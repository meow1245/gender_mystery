import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, set, push, onValue, remove, update, get, onDisconnect } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';
import { firebaseConfig, IMAGE_BASE_URL } from './firebase-config.js';
import { MUSIC_CONFIG, getScriptMusic } from './music-config.js';
import { SCRIPTS } from './scripts-data.js';

let app, database;
let currentRoomId = null;
let currentPlayerId = null;
let currentPlayerName = null;
let allPlayers = {}; // 用於儲存房間內所有玩家資訊，供聊天室查詢角色與頭像
let isHost = false;
let selectedRoomSize = null;
let selectedScriptType = null;
let selectedScript = null;
let phaseTimer = null;
let hasVoted = false;
let currentMusic = null;
let isMusicPlaying = true;
let currentTrackName = null;
let isProcessing = false;

function initializeFirebase() {
    try {
        app = initializeApp(firebaseConfig);
        database = getDatabase(app);
        console.log('✅ Firebase 初始化成功');
        playMusic('home');
    } catch (error) {
        console.error('❌ Firebase Error:', error);
        alert('Firebase 初始化失敗');
    }
}

function bindEvents() {
    document.getElementById('musicToggle')?.addEventListener('click', toggleMusic);
    document.getElementById('btnCreateRoom')?.addEventListener('click', showCreateRoom);
    document.getElementById('btnJoinRoom')?.addEventListener('click', showJoinRoom);
    document.getElementById('btnOpenMusicRoom')?.addEventListener('click', showMusicRoom);

    document.getElementById('selectTeenType')?.addEventListener('click', () => selectScriptType('teen'));
    document.getElementById('selectAdultType')?.addEventListener('click', () => selectScriptType('adult'));
    document.getElementById('btnBackToHomeFromCreate')?.addEventListener('click', backToHome);
    
    document.querySelectorAll('.room-size-btn').forEach(btn => {
        btn.addEventListener('click', (e) => selectRoomSize(parseInt(e.target.dataset.size)));
    });
    
    document.getElementById('btnBackToScriptType')?.addEventListener('click', backToScriptType);
    document.getElementById('btnBackToPlayerCount')?.addEventListener('click', backToPlayerCount);

    document.getElementById('btnConfirmJoin')?.addEventListener('click', joinRoom);
    document.getElementById('btnBackToHomeFromJoin')?.addEventListener('click', backToHome);
    document.getElementById('btnBackFromMusic')?.addEventListener('click', backToHome);

    document.getElementById('btnStartGame')?.addEventListener('click', startGame);
    document.getElementById('btnLeaveRoom')?.addEventListener('click', leaveRoom);
    document.getElementById('btnSendMessage')?.addEventListener('click', sendMessage);
    document.getElementById('endTurnBtn')?.addEventListener('click', endTurn);
    
    document.querySelectorAll('.music-item').forEach(item => {
        item.addEventListener('click', (e) => playMusic(e.target.dataset.music));
    });

    document.getElementById('characterSecret')?.addEventListener('click', function() {
        this.classList.toggle('blur-text');
    });

    document.getElementById('messageInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // 綁定自定義下拉選單事件
    document.getElementById('btnMessageType')?.addEventListener('click', toggleMsgType);
    document.getElementById('btnPrivateTarget')?.addEventListener('click', toggleTargetMenu);

    // 點擊空白處關閉上拉選單
    document.addEventListener('click', (e) => {
        const menu = document.getElementById('targetMenu');
        const btn = document.getElementById('btnPrivateTarget');
        if (menu.classList.contains('show') && !menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
}

// 切換公/私聊
function toggleMsgType() {
    const btn = document.getElementById('btnMessageType');
    const input = document.getElementById('msgTypeInput');
    const targetBtn = document.getElementById('btnPrivateTarget');
    
    if (input.value === 'public') {
        input.value = 'private';
        btn.textContent = '🔒 私聊';
        btn.classList.add('active');
        targetBtn.style.display = 'flex';
        const menu = document.getElementById('targetMenu');
        menu.classList.add('show');
    } else {
        input.value = 'public';
        btn.textContent = '📢 公開';
        btn.classList.remove('active');
        targetBtn.style.display = 'none';
        document.getElementById('targetMenu').classList.remove('show');
    }
}

function toggleTargetMenu() {
    document.getElementById('targetMenu').classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
    initializeFirebase();
    bindEvents();
    switchScreen('homeScreen'); 
    initMusicRoom(); 
});

function updatePlayersList(players, max) {
    const list = document.getElementById('playersList');
    list.innerHTML = '';
    document.getElementById('currentPlayers').textContent = players ? Object.keys(players).length : 0;
    document.getElementById('maxPlayers').textContent = max;

    if (players) {
        Object.entries(players).forEach(([playerId, p]) => {
            const div = document.createElement('div');
            div.className = 'player-item';
            let kickButton = '';
            if (isHost && playerId !== currentPlayerId) {
                kickButton = `<button class="kick-btn">踢出</button>`;
            }
            div.innerHTML = `
                <div class="player-name">
                    <span style="font-size:1.2rem;">${['🐶','🐱','🐭','🐹','🐰','🦊'][Math.floor(Math.random()*6)]}</span>
                    <span>${p.name}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 0.9em; background:#f0f0f0; padding:2px 8px; border-radius:10px;">${p.character ? '✅ 準備' : '⏳ 等待'}</span>
                    ${kickButton}
                </div>
            `;
            if(kickButton) div.querySelector('.kick-btn').addEventListener('click', () => kickPlayer(playerId, p.name));
            list.appendChild(div);
        });
    }
}

function updatePrivateTargets(players) {
    const menu = document.getElementById('targetMenu');
    if (!menu) return;
    menu.innerHTML = '';
    Object.entries(players).forEach(([pid, p]) => {
        if (pid !== currentPlayerId && p.character) {
            const div = document.createElement('div');
            div.className = 'dropup-item';
            div.textContent = `${p.name} (${p.character.name})`;
            div.addEventListener('click', () => {
                document.getElementById('privateTargetInput').value = p.name;
                document.getElementById('btnPrivateTarget').textContent = `To: ${p.name}`;
                menu.classList.remove('show');
            });
            menu.appendChild(div);
        }
    });
}

function initMusicRoom() {
    const container = document.getElementById('fullMusicList');
    if (!container) return;
    const basics = [
        { name: '首頁', key: 'home', desc: '歡迎光臨' },
        { name: '大廳', key: 'lobby', desc: '等待中的懸疑感' },
        { name: '勝利', key: 'victory', desc: '正義伸張' },
        { name: '悲傷', key: 'sad_ending', desc: '遺憾與反思' }
    ];
    let html = '<h4>🎵 基礎音效</h4>';
    basics.forEach(m => { html += `<div class="music-row" onclick="window.playMusic('${m.key}')"><div class="music-info"><span class="music-name">${m.name}</span><span class="music-desc">${m.desc}</span></div><span class="music-play-icon">▶</span></div>`; });
    html += '<h4 style="margin-top:15px;">📂 案件 音樂</h4>';
    ['teen', 'adult'].forEach(type => {
        for (const size in SCRIPTS[type]) {
            SCRIPTS[type][size].forEach(script => {
                html += `<div class="music-row" onclick="window.playMusic('${script.id}', true)"><div class="music-info"><span class="music-name">${script.title}</span><span class="music-desc">${type === 'teen' ? '未成年組' : '成年組'} / ${size}人</span></div><span class="music-play-icon">▶</span></div>`;
            });
        }
    });
    container.innerHTML = html;
}

function showMusicRoom() { switchScreen('musicScreen'); }

// 1. 新增一個輔助函式：把秒數轉為 00:00 格式
function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// 2. 修改原本的 playMusic 函式
function playMusic(trackNameOrScriptId, isScriptId = false) {
    currentTrackName = trackNameOrScriptId;
    
    // 清除舊音樂
    if (currentMusic) { 
        currentMusic.pause(); 
        currentMusic.currentTime = 0; 
        currentMusic = null; 
    }
    
    // 取得 UI 元素
    const playerDiv = document.getElementById('miniPlayer');
    const titleEl = document.getElementById('playerTitle');
    const timeEl = document.getElementById('playerTime');
    const progressBar = document.getElementById('progressBar');

    // 取得音樂路徑
    let trackUrl = isScriptId ? getScriptMusic(trackNameOrScriptId) : MUSIC_CONFIG[trackNameOrScriptId];
    
    // 設定顯示名稱 (如果有找到對應名稱就顯示，不然顯示預設)
    // 這裡做個簡單判斷，如果是基礎音樂就查基礎名稱
    let displayName = "正在播放...";
    if(!isScriptId) {
        // 簡單對應 (如果要更完整，可以建立一個對照表)
        if(trackNameOrScriptId === 'home') displayName = "首頁：歡迎光臨這七彩的世界";
        else if(trackNameOrScriptId === 'lobby') displayName = "大廳：懸疑等待";
        else if(trackNameOrScriptId === 'victory') displayName = "結局：勝利";
        else if(trackNameOrScriptId === 'sad_ending') displayName = "結局：遺憾";
    } else {
        // --- 劇本專屬歌名對照表 (依據 scripts-data.js 主題設計) ---
        const scriptSongNames = {
            // 🌱 未成年/校園組
            "teen_3_bullying": "音樂：沉默的共犯",       // 沉默的共犯
            "teen_3_outing":   "音樂：光害",       // 被公開的秘密 (Outing)
            "teen_4_photo":    "音樂：鏡頭後的視線",     // 鏡頭下的秘密 (偷拍)
            "teen_4_catfish":  "音樂：虛擬的假面",       // 假面騎士 (網戀詐騙)
            "teen_5_uniform":  "音樂：制服下的自由",     // 裙襬戰爭
            "teen_5_deepfake": "音樂：被竊取的容顏",     // AI 換臉
            "teen_6_game":     "音樂：斷線的麥克風",     // 遊戲語音騷擾
            "teen_6_anonymous":"音樂：匿名牆的陰影",     // 匿名仇恨言論

            // 💼 成年/社會組
            "adult_3_workplace":     "音樂：玻璃天花板",    // 職場性騷擾
            "adult_3_smart_control": "音樂：智慧的牢籠",    // 數位家暴監控
            "gender_tech_lab_mystery":"音樂：演算法的偏誤",  // 數據偏見
            "adult_4_domestic":      "音樂：無聲的風暴",    // 家暴與經濟控制
            "adult_5_party":         "音樂：迷離的記憶",    // 派對與合意
            "adult_5_dating_app":    "音樂：計算出的陷阱",  // 交友軟體跟蹤
            "adult_6_digital_footprint":"音樂：無法刪除的烙印", // 數位足跡
            "adult_6_metaverse":     "音樂：觸不到的傷痕"    // 元宇宙騷擾
        };

        if (scriptSongNames[trackNameOrScriptId]) {
            displayName = scriptSongNames[trackNameOrScriptId];
        } else {
            // 如果沒在上面定義到，嘗試自動抓取劇本標題
            let foundScript = null;
            // 遍歷所有劇本來找標題
            ['teen', 'adult'].forEach(type => {
                if (SCRIPTS[type]) {
                    Object.values(SCRIPTS[type]).forEach(sizeArray => {
                        const target = sizeArray.find(s => s.id === trackNameOrScriptId);
                        if (target) foundScript = target;
                    });
                }
            });
            displayName = foundScript ? `劇本：${foundScript.title}` : "劇本情境音樂";
        }

    }

    if (!isMusicPlaying) {
        // 如果是靜音模式，隱藏播放器或顯示「靜音中」
        if(playerDiv) playerDiv.style.display = 'none';
        return;
    }

    if (trackUrl) {
        currentMusic = new Audio(trackUrl);
        currentMusic.loop = true;
        currentMusic.volume = 0.3;

        // 🔥 顯示播放器 UI
        if (playerDiv) {
            playerDiv.style.display = 'block';
            titleEl.textContent = displayName;
            progressBar.value = 0;
        }

        // 🔥 綁定進度條更新事件 (音樂播放時，自動更新拉桿)
        currentMusic.addEventListener('timeupdate', () => {
            if (!isNaN(currentMusic.duration)) {
                // 計算百分比
                const percent = (currentMusic.currentTime / currentMusic.duration) * 100;
                progressBar.value = percent;
                // 更新時間文字
                timeEl.textContent = `${formatTime(currentMusic.currentTime)} / ${formatTime(currentMusic.duration)}`;
            }
        });

        // 🔥 綁定拉桿拖動事件 (使用者拉動時，跳轉音樂)
        progressBar.oninput = function() {
            if (currentMusic && !isNaN(currentMusic.duration)) {
                const seekTime = (this.value / 100) * currentMusic.duration;
                currentMusic.currentTime = seekTime;
            }
        };

        // --- ✂️ 開始複製 ✂️ ---
var playPromise = currentMusic.play();

if (playPromise !== undefined) {
    playPromise.catch(error => {
        console.log('自動播放被瀏覽器阻擋 (正常現象)，等待使用者互動...');
        
        // 定義一個「點擊後播放」的函式
        const resumeAudio = () => {
            if (currentMusic && isMusicPlaying) {
                currentMusic.play();
            }
            // 播放成功後，把自己移除，避免以後亂觸發
            document.removeEventListener('click', resumeAudio);
            document.removeEventListener('touchstart', resumeAudio);
        };

        // 監聽整個網頁，使用者只要點一下（或滑一下手機），音樂就會解鎖播放
        document.addEventListener('click', resumeAudio);
        document.addEventListener('touchstart', resumeAudio);
    });
}
    }
}
function toggleMusic() {
    const btn = document.getElementById('musicToggle');
    isMusicPlaying = !isMusicPlaying;
    if (isMusicPlaying) {
        btn.textContent = '🔊';
        if (currentTrackName) playMusic(currentTrackName, !['home', 'lobby', 'victory', 'sad_ending'].includes(currentTrackName));
    } else {
        btn.textContent = '🔇';
        if (currentMusic) currentMusic.pause();
    }
}

function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none';
    });
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
        target.style.removeProperty('display');
    }
}

function showCreateRoom() {
    const name = document.getElementById('playerName').value.trim();
    if (!name) { alert('請先輸入你的名字 ✨'); return; }
    currentPlayerName = name;
    switchScreen('createRoomScreen');
}

function showJoinRoom() {
    const name = document.getElementById('playerName').value.trim();
    if (!name) { alert('請先輸入你的名字 ✨'); return; }
    currentPlayerName = name;
    switchScreen('joinRoomScreen');
}

function backToHome() {
    switchScreen('homeScreen');
    playMusic('home');
    selectedRoomSize = null;
    selectedScriptType = null;
    selectedScript = null;
}

function backToScriptType() { switchScreen('createRoomScreen'); selectedRoomSize = null; }
function backToPlayerCount() { switchScreen('selectPlayerCountScreen'); selectedScript = null; }

function selectScriptType(type) {
    selectedScriptType = type;
    document.querySelectorAll('.script-card').forEach(card => card.classList.remove('selected'));
    const targetId = type === 'teen' ? 'selectTeenType' : 'selectAdultType';
    document.getElementById(targetId).classList.add('selected');
    setTimeout(() => switchScreen('selectPlayerCountScreen'), 300);
}

function selectRoomSize(size) {
    selectedRoomSize = size;
    document.querySelectorAll('.room-size-btn').forEach(btn => btn.classList.remove('selected'));
    const clickedBtn = Array.from(document.querySelectorAll('.room-size-btn')).find(b => b.dataset.size == size);
    if(clickedBtn) clickedBtn.classList.add('selected');
    setTimeout(showAvailableScripts, 300);
}

function showAvailableScripts() {
    const scripts = SCRIPTS[selectedScriptType][selectedRoomSize];
    const scriptList = document.getElementById('scriptList');
    scriptList.innerHTML = '';
    if (!scripts || scripts.length === 0) {
        scriptList.innerHTML = '<p style="text-align:center; color:#666;">無符合劇本 😿</p>';
        switchScreen('selectScriptScreen');
        return;
    }
    scripts.forEach(script => {
        const scriptDiv = document.createElement('div');
        scriptDiv.className = 'script-option';
        scriptDiv.innerHTML = `<h4>${script.title}</h4><p>${script.description}</p><div class="script-meta"><span class="tag duration">⏱️ ${script.duration}</span><span class="tag difficulty">📊 ${script.difficulty}</span><span class="tag">👥 ${selectedRoomSize}人</span></div>`;
        scriptDiv.addEventListener('click', () => selectScript(script, scriptDiv));
        scriptList.appendChild(scriptDiv);
    });
    switchScreen('selectScriptScreen');
}

function selectScript(script, element) {
    if (isProcessing) return;
    isProcessing = true;
    selectedScript = script;
    document.querySelectorAll('.script-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    setTimeout(() => {
        createRoomWithScript().finally(() => isProcessing = false);
    }, 300);
}

function generateRoomCode() { return Math.random().toString(36).substring(2, 8).toUpperCase(); }

async function createRoomWithScript() {
    currentRoomId = generateRoomCode();
    const roomRef = ref(database, `rooms/${currentRoomId}`);
    await set(roomRef, {
        host: currentPlayerName,
        status: 'waiting',
        scriptType: selectedScriptType,
        scriptId: selectedScript.id,
        script: selectedScript,
        maxPlayers: selectedRoomSize,
        createdAt: Date.now()
    });
    currentPlayerId = await addPlayer(currentPlayerName);
    isHost = true;
    showLobby();
    listenToRoom();
}

async function joinRoom() {
    if (isProcessing) return;
    const roomCode = document.getElementById('roomCodeInput').value.trim().toUpperCase();
    if (!roomCode) { alert('請輸入代碼'); return; }
    isProcessing = true;
    const btn = document.getElementById('btnConfirmJoin');
    if(btn) { btn.disabled = true; btn.textContent = '加入中...'; }
    try {
        currentRoomId = roomCode;
        const roomRef = ref(database, `rooms/${currentRoomId}`);
        const snapshot = await get(roomRef);
        if (!snapshot.exists()) { alert('房間不存在 😿'); return; }
        const room = snapshot.val();
        const count = room.players ? Object.keys(room.players).length : 0;
        if (count >= room.maxPlayers) { alert('房間已滿 🚫'); return; }
        if (room.status !== 'waiting') { alert('遊戲已開始 🚫'); return; }
        currentPlayerId = await addPlayer(currentPlayerName);
        showLobby();
        listenToRoom();
    } catch (e) { console.error(e); alert('加入失敗'); }
    finally { isProcessing = false; if(btn) { btn.disabled = false; btn.textContent = '確認加入'; } }
}

async function addPlayer(name) {
    const newPlayerRef = push(ref(database, `rooms/${currentRoomId}/players`));
    await set(newPlayerRef, { name: name, joinedAt: Date.now() });
    onDisconnect(newPlayerRef).remove();
    return newPlayerRef.key;
}

function showLobby() {
    switchScreen('lobbyScreen');
    document.getElementById('displayRoomCode').textContent = currentRoomId;
    playMusic('lobby');
    if (isHost) document.getElementById('hostControls').style.display = 'block';
}

function listenToRoom() {
    onValue(ref(database, `rooms/${currentRoomId}`), (snapshot) => {
        const room = snapshot.val();
        if (!room) { alert('房間已關閉 👋'); location.reload(); return; }
        
        // 更新全域玩家列表，供聊天室使用
        if (room.players) {
            allPlayers = room.players;
        }

        if (room.players && room.players[currentPlayerId]?.kicked) { alert('你已被移出 🚫'); location.reload(); return; }
        if (room.status === 'waiting' && room.players && !room.players[currentPlayerId]) { alert('你已被移出'); location.reload(); return; }
        if (isHost) checkAndDestroyEmptyRoom(room);
        updatePlayersList(room.players, room.maxPlayers);
        if (room.script) {
            document.getElementById('displayScriptName').textContent = room.script.title;
            document.getElementById('displayDuration').textContent = room.script.duration;
        }
        if (room.status === 'playing') {
            showGame(room);
            updateGamePhase(room);
            updatePrivateTargets(room.players);
            if (isHost && room.players) checkAllTurnsEnded(room);
        }
        if (room.messages) updateChat(room.messages);
    });
}

async function kickPlayer(playerId, playerName) {
    if (!confirm(`確定要將 ${playerName} 踢出房間嗎？`)) return;
    try {
        await push(ref(database, `rooms/${currentRoomId}/messages`), { sender: '系統', text: `${playerName} 已被房主移出房間`, type: 'public', timestamp: Date.now() });
        await update(ref(database, `rooms/${currentRoomId}/players/${playerId}`), { kicked: true });
        setTimeout(async () => await remove(ref(database, `rooms/${currentRoomId}/players/${playerId}`)), 500);
    } catch (error) { console.error(error); }
}

async function checkAndDestroyEmptyRoom(room) {
    const count = room.players ? Object.keys(room.players).length : 0;
    if (count === 0) await remove(ref(database, `rooms/${currentRoomId}`));
}

async function startGame() {
    const snap = await get(ref(database, `rooms/${currentRoomId}/players`));
    const players = snap.val();
    const pIds = Object.keys(players);
    const roomSnap = await get(ref(database, `rooms/${currentRoomId}`));
    const roomData = roomSnap.val();
    if (pIds.length !== roomData.maxPlayers) { alert(`需要 ${roomData.maxPlayers} 人才能開始`); return; }
    const chars = [...roomData.script.characters].sort(() => Math.random() - 0.5);
    pIds.forEach((pid, idx) => update(ref(database, `rooms/${currentRoomId}/players/${pid}`), { character: chars[idx] }));
    await update(ref(database, `rooms/${currentRoomId}`), { status: 'playing', startTime: Date.now(), currentDay: 1, currentPhaseIndex: 0 });
}

function leaveRoom() {
    if (currentRoomId && currentPlayerId) {
        if (isHost) remove(ref(database, `rooms/${currentRoomId}`)).then(() => location.reload());
        else remove(ref(database, `rooms/${currentRoomId}/players/${currentPlayerId}`)).then(() => location.reload());
    } else location.reload();
}

function showGame(room) {
    if (document.getElementById('gameScreen').classList.contains('active')) return;
    switchScreen('gameScreen');
    const musicKey = room.script.music || (room.scriptType === 'teen' ? 'default_teen' : 'default_adult');
    playMusic(musicKey);
    const myPlayer = room.players[currentPlayerId];
    if (myPlayer?.character) {
        document.getElementById('characterName').textContent = myPlayer.character.name;
        document.getElementById('characterBackground').textContent = myPlayer.character.background;
        document.getElementById('characterSecret').textContent = myPlayer.character.secret;
        if (myPlayer.character.goal) document.getElementById('characterGoal').innerHTML = `<strong>目標：</strong>${myPlayer.character.goal}`;
        const img = document.getElementById('characterPortrait');
        if (myPlayer.character.portrait) { img.src = IMAGE_BASE_URL + myPlayer.character.portrait; img.style.display = 'block'; }
    }
}

function updateGamePhase(room) {
    const script = room.script;
    const currentDay = room.currentDay || 1;
    const dayData = script.dayPhases.find(d => d.day === currentDay);
    if (!dayData) return;
    const phase = dayData.phases[room.currentPhaseIndex || 0];
    if (!phase) return;
    document.getElementById('dayIndicator').textContent = `Day ${currentDay}`;
    document.getElementById('phaseInfo').textContent = `${phase.name}`;
    const myPlayer = room.players[currentPlayerId];
    if (myPlayer?.character) showCharacterClue(myPlayer.character, phase.name, currentDay);
    if (dayData.events) {
        const evt = dayData.events.find(e => e.phase === phase.name);
        if (evt && !room.eventShown) {
            document.getElementById('eventContent').textContent = evt.content;
            document.getElementById('eventCard').style.display = 'block';
            setTimeout(() => document.getElementById('eventCard').style.display = 'none', 8000);
            if (isHost) update(ref(database, `rooms/${currentRoomId}`), { eventShown: true });
        }
    }
    const endTurnBtn = document.getElementById('endTurnBtn');
    const voteSection = document.getElementById('voteSection');
    endTurnBtn.style.display = 'none';
    voteSection.style.display = 'none';
    if (phase.type === 'discussion') {
        endTurnBtn.style.display = 'block';
        if (myPlayer?.turnEnded) { endTurnBtn.disabled = true; endTurnBtn.textContent = '✅ 已待機'; }
        else { endTurnBtn.disabled = false; endTurnBtn.textContent = '結束發言'; }
        if (!phaseTimer) startPhaseTimer(phase.duration, currentDay, room.currentPhaseIndex, dayData.phases.length);
    } else if (phase.type === 'voting') {
        if (phaseTimer) { clearInterval(phaseTimer); phaseTimer = null; }
        showVoting(room.players, room.script, currentDay);
    }
}

function showCharacterClue(character, phaseName, day) {
    const clueDiv = document.getElementById('characterClue');
    const clueContent = document.getElementById('clueContent');
    const clueKey = `${phaseName}_${day}`;
    if (character.clues && character.clues[clueKey]) {
        clueContent.textContent = character.clues[clueKey];
        clueDiv.style.display = 'block';
    } else {
        clueDiv.style.display = 'none';
    }
}

function startPhaseTimer(seconds, day, pIndex, totalP) { 
    let timeLeft = seconds;
    const timerDiv = document.getElementById('timer');
    if(phaseTimer) clearInterval(phaseTimer);
    phaseTimer = setInterval(async () => {
        const min = Math.floor(timeLeft / 60);
        const sec = timeLeft % 60;
        timerDiv.textContent = `${min}:${sec.toString().padStart(2, '0')}`;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(phaseTimer);
            phaseTimer = null;
            if (isHost) {
                const nextP = pIndex + 1;
                const updateData = nextP < totalP 
                    ? { currentPhaseIndex: nextP, eventShown: false }
                    : { currentDay: day + 1, currentPhaseIndex: 0, eventShown: false };
                if (nextP >= totalP) {
                   const updates = {};
                   const snap = await get(ref(database, `rooms/${currentRoomId}/players`));
                   Object.keys(snap.val() || {}).forEach(k => updates[`players/${k}/vote`] = null);
                   await update(ref(database, `rooms/${currentRoomId}`), { ...updateData, ...updates });
                } else { await update(ref(database, `rooms/${currentRoomId}`), updateData); }
            }
        }
    }, 1000);
}

async function sendMessage() {
    const input = document.getElementById('messageInput');
    const type = document.getElementById('msgTypeInput').value;
    const target = document.getElementById('privateTargetInput').value;
    
    if (!input.value.trim()) return;
    if (type === 'private' && !target) { alert('請選擇私聊對象'); return; }

    const messageData = { sender: currentPlayerName, text: input.value.trim(), type: type, timestamp: Date.now() };
    if (type === 'private') messageData.target = target;
    
    await push(ref(database, `rooms/${currentRoomId}/messages`), messageData);
    input.value = '';
}

// 聊天室更新核心 (含頭像與角色名)
function updateChat(msgs) {
    const box = document.getElementById('chatContainer');
    box.innerHTML = '';
    
    Object.values(msgs).sort((a,b) => a.timestamp - b.timestamp).forEach(m => {
        // 私聊權限檢查
        const isPrivate = m.type === 'private';
        if (isPrivate) {
            if (m.sender !== currentPlayerName && m.target !== currentPlayerName) return;
        }

        // 查找發送者的玩家資料以獲取角色資訊
        // 注意：這裡假設 sender 是玩家暱稱。系統訊息 sender 為 '系統'
        const senderPlayer = Object.values(allPlayers).find(p => p.name === m.sender);
        const charName = senderPlayer?.character?.name || '';
        const avatarUrl = senderPlayer?.character?.portrait 
            ? IMAGE_BASE_URL + senderPlayer.character.portrait 
            : null; 

        // 建立容器
        const msgContainer = document.createElement('div');
        msgContainer.className = 'message-container';
        
        // 判斷是否為自己發送
        const isMe = m.sender === currentPlayerName;
        if (isMe) msgContainer.classList.add('me');

        // 準備頭像 HTML
        let avatarHtml = '';
        if (m.sender === '系統') {
            avatarHtml = `<div class="chat-avatar system-avatar">📢</div>`;
        } else if (avatarUrl) {
            avatarHtml = `<img src="${avatarUrl}" class="chat-avatar" alt="${charName}">`;
        } else {
            // 沒有頭像時的預設顯示 (顯示名字首字)
            avatarHtml = `<div class="chat-avatar default-avatar">${m.sender[0]}</div>`;
        }

        // 準備顯示名稱 (玩家名 + 角色名)
        let displayName = m.sender;
        if (charName) {
            displayName += ` <span class="char-label">(${charName})</span>`;
        }
        if (isPrivate) {
             displayName = isMe ? `你 🔒 To: ${m.target}` : `${m.sender} 🔒 (私訊)`;
        }

        // 組合 HTML
        msgContainer.innerHTML = `
            ${avatarHtml}
            <div class="message-content-wrapper">
                <div class="message-sender">${displayName}</div>
                <div class="message-bubble ${isPrivate ? 'private' : ''}">${m.text}</div>
            </div>
        `;

        box.appendChild(msgContainer);
    });
    box.scrollTop = box.scrollHeight;
}

async function endTurn() {
    await update(ref(database, `rooms/${currentRoomId}/players/${currentPlayerId}`), { turnEnded: true });
    document.getElementById('endTurnBtn').disabled = true;
    document.getElementById('endTurnBtn').textContent = '✅ 已待機';
    await push(ref(database, `rooms/${currentRoomId}/messages`), { sender: '系統', text: `${currentPlayerName} 已結束發言。`, type: 'public', timestamp: Date.now() });
    if (isHost) checkAllTurnsEnded(await (await get(ref(database, `rooms/${currentRoomId}`))).val());
}

async function checkAllTurnsEnded(room) {
    const players = room.players;
    let allEnded = true;
    Object.values(players).forEach(p => { if (!p.turnEnded) allEnded = false; });
    if (allEnded) {
        if (phaseTimer) clearInterval(phaseTimer);
        const script = room.script;
        const dayData = script.dayPhases.find(d => d.day === (room.currentDay || 1));
        const totalP = dayData.phases.length;
        const nextP = (room.currentPhaseIndex || 0) + 1;
        const updates = {};
        if (nextP < totalP) { updates.currentPhaseIndex = nextP; updates.eventShown = false; }
        else { updates.currentDay = (room.currentDay || 1) + 1; updates.currentPhaseIndex = 0; updates.eventShown = false; Object.keys(players).forEach(k => updates[`players/${k}/vote`] = null); }
        Object.keys(players).forEach(pid => updates[`players/${pid}/turnEnded`] = false);
        await update(ref(database, `rooms/${currentRoomId}`), updates);
        await push(ref(database, `rooms/${currentRoomId}/messages`), { sender: '系統', text: '階段切換！', type: 'public', timestamp: Date.now() });
    }
}

function showVoting(players, script, day) {
    document.getElementById('voteSection').style.display = 'block';
    const btnDiv = document.getElementById('voteButtons');
    btnDiv.innerHTML = '';
    const isFinalDay = day >= script.days;
    document.getElementById('votePrompt').textContent = isFinalDay ? '最終投票：請選擇結局' : '誰最可疑？';
    Object.values(players).forEach(p => {
        if (!p.character) return;
        const btn = document.createElement('button');
        btn.className = 'vote-button';
        btn.textContent = `${p.name} (${p.character.name})`;
        btn.addEventListener('click', () => vote(p.character.name));
        if (hasVoted) btn.disabled = true;
        btnDiv.appendChild(btn);
    });
    if (isFinalDay && script.specialVotes) {
        script.specialVotes.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'vote-button system-vote';
            btn.style.backgroundColor = '#6c757d'; btn.textContent = opt.label;
            btn.addEventListener('click', () => vote(opt.value));
            if (hasVoted) btn.disabled = true;
            btnDiv.appendChild(btn);
        });
    }
}

async function vote(votedName) {
    if (hasVoted) return;
    await update(ref(database, `rooms/${currentRoomId}/players/${currentPlayerId}`), { vote: votedName });
    hasVoted = true;
    document.querySelectorAll('.vote-button').forEach(btn => btn.disabled = true);
    alert('投票成功');
    checkVoteResults();
}

async function checkVoteResults() {
    const snap = await get(ref(database, `rooms/${currentRoomId}`));
    const room = snap.val();
    const players = room.players;
    let allVoted = true;
    const votes = {};
    Object.values(players).forEach(p => { if (!p.vote) allVoted = false; else votes[p.vote] = (votes[p.vote] || 0) + 1; });
    if (allVoted) {
        const maxVoteName = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
        if ((room.currentDay || 1) < room.script.days) {
            await push(ref(database, `rooms/${currentRoomId}/messages`), { sender: '系統', text: `投票結果：${maxVoteName} 目前最被懷疑。`, type: 'public', timestamp: Date.now() });
        } else { showFinalResults(votes, players, room); }
    }
}

function showFinalResults(votes, players, room) {
    const winnerKey = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
    let endingContent = null;
    if (room.script.endings && room.script.endings[winnerKey]) endingContent = room.script.endings[winnerKey];
    else endingContent = { title: "結局：迷霧重重", description: `眾人指向了 ${winnerKey}，但證據不足...`, type: "bad", image: null };
    
    const resDiv = document.getElementById('gameResult');
    resDiv.style.display = 'block';
    if (endingContent.type === 'bad') { playMusic('sad_ending'); resDiv.className = 'result-modal alert-danger'; }
    else if (endingContent.type === 'good') { playMusic('victory'); resDiv.className = 'result-modal alert-success'; }
    else { playMusic('victory'); resDiv.className = 'result-modal alert-info'; }
    
    let imgHTML = endingContent.image ? `<img src="${IMAGE_BASE_URL}${endingContent.image}" class="final-image" style="width:100%; border-radius:8px;">` : '';
    let questionsHTML = room.script.questions ? `<ul>${room.script.questions.map(q => `<li>${q}</li>`).join('')}</ul>` : '';

    resDiv.innerHTML = `
        <button class="close-modal-btn" onclick="document.getElementById('gameResult').style.display='none'">×</button>
        <h3>🎉 結局</h3><p>選擇：${winnerKey}</p>
        <div style="background:rgba(255,255,255,0.9); padding:15px; border-radius:8px;">
            <h2>${endingContent.title}</h2>${imgHTML}<p>${endingContent.description}</p>
        </div>
        ${questionsHTML}
        <button onclick="leaveRoom()" class="btn-secondary full-width" style="margin-top:15px;">退出遊戲</button>
    `;
    if (isHost) update(ref(database, `rooms/${currentRoomId}`), { phase: 'ended' });
}

window.leaveRoom = leaveRoom;
window.joinRoom = joinRoom;
window.showCreateRoom = showCreateRoom;
window.toggleMusic = toggleMusic;
window.playMusic = playMusic;
window.startGame = startGame;
window.sendMessage = sendMessage;
window.endTurn = endTurn;
window.backToHome = backToHome;
window.backToScriptType = backToScriptType;
window.backToPlayerCount = backToPlayerCount;
window.selectScriptType = selectScriptType;
window.selectRoomSize = selectRoomSize;
window.selectScript = selectScript;