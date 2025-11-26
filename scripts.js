import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, set, push, onValue, remove, update, get, onDisconnect } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';
import { firebaseConfig, IMAGE_BASE_URL } from './firebase-config.js';
import { MUSIC_CONFIG, getScriptMusic } from './music-config.js';
import { SCRIPTS } from './scripts-data.js';


// 全局變數
let app, database;
let currentRoomId = null;
let currentPlayerId = null;
let currentPlayerName = null;
let isHost = false;
let selectedRoomSize = null;
let selectedScriptType = null;
let selectedScript = null;
let phaseTimer = null;
let hasVoted = false;
let currentMusic = null;
let isMusicPlaying = true;
let currentTrackName = null;

// 初始化 Firebase
function initializeFirebase() {
    try {
        app = initializeApp(firebaseConfig);
        database = getDatabase(app);
        console.log('✅ Firebase 初始化成功');
        playMusic('home');
        return true;
    } catch (error) {
        console.error('❌ Firebase 初始化失敗:', error);
        alert('Firebase 初始化失敗：' + error.message);
        return false;
    }
}


// 音樂控制函數
function playMusic(trackNameOrScriptId, isScriptId = false) {
    if (currentMusic) {
        currentMusic.pause();
        currentMusic.currentTime = 0;
        currentMusic = null;
    }

    if (!isMusicPlaying) return;

    let trackUrl;
    if (isScriptId) {
        trackUrl = getScriptMusic(trackNameOrScriptId);
        currentTrackName = trackNameOrScriptId;
    } else {
        trackUrl = MUSIC_CONFIG[trackNameOrScriptId];
        currentTrackName = trackNameOrScriptId;
    }

    if (trackUrl) {
        currentMusic = new Audio(trackUrl);
        currentMusic.loop = true;
        currentMusic.volume = 0.3;
        currentMusic.play().catch(err => {
            console.log('音樂播放失敗（可能需要用戶互動）:', err);
        });
    }
}

window.toggleMusic = function() {
    const btn = document.getElementById('musicToggle');
    isMusicPlaying = !isMusicPlaying;
    
    if (isMusicPlaying) {
        btn.textContent = '🔊';
        // 重新播放當前音樂
        if (currentTrackName) {
            const isScript = !['home', 'lobby', 'victory'].includes(currentTrackName);
            playMusic(currentTrackName, isScript);
        }
    } else {
        btn.textContent = '🔇';
        if (currentMusic) {
            currentMusic.pause();
        }
    }
};


// 頁面載入時初始化
document.addEventListener('DOMContentLoaded', () => {
    initializeFirebase();
    
    // 監聽訊息類型變化
    const messageType = document.getElementById('messageType');
    const privateTarget = document.getElementById('privateTarget');
    
    if (messageType && privateTarget) {
        messageType.addEventListener('change', (e) => {
            if (e.target.value === 'private') {
                privateTarget.style.display = 'block';
            } else {
                privateTarget.style.display = 'none';
            }
        });
    }

    // Enter 鍵發送訊息
    const messageInput = document.getElementById('messageInput');
    if (messageInput) {
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }
});

// 導航函數
window.showCreateRoom = function() {
            const name = document.getElementById('playerName').value.trim();
            if (!name) {
                alert('請先輸入你的名字');
                return;
            }
            currentPlayerName = name;
            document.getElementById('homeScreen').classList.remove('active');
            document.getElementById('createRoomScreen').classList.add('active');
        };

window.showJoinRoom = function() {
    const name = document.getElementById('playerName').value.trim();
    if (!name) {
        alert('請先輸入你的名字');
        return;
    }
    currentPlayerName = name;
    document.getElementById('homeScreen').classList.remove('active');
    document.getElementById('joinRoomScreen').classList.add('active');
};

window.backToHome = function() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('homeScreen').classList.add('active');
    playMusic('home');
    selectedRoomSize = null;
    selectedScriptType = null;
    selectedScript = null;
};

window.backToScriptType = function() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('createRoomScreen').classList.add('active');
    selectedRoomSize = null;
};

window.backToPlayerCount = function() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('selectPlayerCountScreen').classList.add('active');
    selectedScript = null;
};

window.selectScriptType = function(type) {
    selectedScriptType = type;
    document.querySelectorAll('.script-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.target.closest('.script-card').classList.add('selected');
    
    setTimeout(() => {
        document.getElementById('createRoomScreen').classList.remove('active');
        document.getElementById('selectPlayerCountScreen').classList.add('active');
    }, 300);
};

window.selectRoomSize = function(size) {
    selectedRoomSize = size;
    document.querySelectorAll('.room-size-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
    
    setTimeout(() => {
        showAvailableScripts();
    }, 300);
};


function showAvailableScripts() {
    const scripts = SCRIPTS[selectedScriptType][selectedRoomSize];
    const scriptList = document.getElementById('scriptList');
    scriptList.innerHTML = '';
    
    scripts.forEach(script => {
        const scriptDiv = document.createElement('div');
        scriptDiv.className = 'script-option';
        scriptDiv.onclick = () => selectScript(script);
        
        scriptDiv.innerHTML = `
            <h4>${script.title}</h4>
            <p>${script.description}</p>
            <div class="script-meta">
                <span class="tag duration">⏱️ ${script.duration}</span>
                <span class="tag difficulty">📊 ${script.difficulty}</span>
                <span class="tag">👥 ${selectedRoomSize}人</span>
                ${script.days > 1 ? `<span class="tag">📅 ${script.days}天</span>` : ''}
            </div>
        `;
        
        scriptList.appendChild(scriptDiv);
    });
    
    document.getElementById('selectPlayerCountScreen').classList.remove('active');
    document.getElementById('selectScriptScreen').classList.add('active');
}


window.selectScript = function(script) {
    selectedScript = script;
    
    document.querySelectorAll('.script-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.target.closest('.script-option').classList.add('selected');
    
    setTimeout(() => {
        createRoomWithScript();
    }, 300);
};


// --- 房間與遊戲邏輯 ---
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

window.joinRoom = async function() {
    const roomCode = document.getElementById('roomCode').value.trim().toUpperCase();

    if (!roomCode) {
        alert('請輸入房間代碼');
        return;
    }

    currentRoomId = roomCode;
    const roomRef = ref(database, `rooms/${currentRoomId}`);
    const snapshot = await get(roomRef);

    if (!snapshot.exists()) {
        alert('房間不存在，請確認代碼是否正確');
        return;
    }

    const room = snapshot.val();
    const currentPlayerCount = room.players ? Object.keys(room.players).length : 0;

    if (currentPlayerCount >= room.maxPlayers) {
        alert('房間已滿');
        return;
    }

    if (room.status !== 'waiting') {
        alert('遊戲已開始，無法加入');
        return;
    }
    currentPlayerId = await addPlayer(currentPlayerName);
    showLobby();
    listenToRoom();
};


async function addPlayer(name) {
    const playersRef = ref(database, `rooms/${currentRoomId}/players`);
    const newPlayerRef = push(playersRef);
    
    await set(newPlayerRef, {
        name: name,
        joinedAt: Date.now(),
        voiceActive: false
    });

    onDisconnect(newPlayerRef).remove();
    
    return newPlayerRef.key;
}


async function startGame() {
    if (!isHost) return;
    const snapshot = await get(ref(database, `rooms/${currentRoomId}/players`));
    const players = snapshot.val();
    const playerIds = Object.keys(players);
    
    const roomSnap = await get(ref(database, `rooms/${currentRoomId}`));
    const roomData = roomSnap.val();

    if (playerIds.length !== roomData.maxPlayers) {
        alert(`需要 ${roomData.maxPlayers} 人才能開始`);
        return;
    }

    const shuffledChars = [...roomData.script.characters].sort(() => Math.random() - 0.5);
    playerIds.forEach((pid, idx) => {
        update(ref(database, `rooms/${currentRoomId}/players/${pid}`), { character: shuffledChars[idx] });
    });

    await update(ref(database, `rooms/${currentRoomId}`), {
        status: 'playing',
        startTime: Date.now(),
        currentDay: 1,
        currentPhaseIndex: 0
    });
}

function leaveRoom() {
    if (currentRoomId && currentPlayerId) {
        remove(ref(database, `rooms/${currentRoomId}/players/${currentPlayerId}`));
    }
    location.reload();
}

async function sendMessage() {
    const input = document.getElementById('messageInput');
    const type = document.getElementById('messageType').value;
    if (!input.value.trim()) return;

    await push(ref(database, `rooms/${currentRoomId}/messages`), {
        sender: currentPlayerName,
        text: input.value.trim(),
        type: type,
        timestamp: Date.now()
    });
    input.value = '';
}

async function vote(votedName) {
    if (hasVoted) return;
    await update(ref(database, `rooms/${currentRoomId}/players/${currentPlayerId}`), { vote: votedName });
    hasVoted = true;
    document.querySelectorAll('.vote-button').forEach(btn => btn.disabled = true);
    alert('投票成功');
    checkVoteResults();
}

// --- 輔助函式 ---

function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function updateSelectedCard(selector, target) {
    if(!target) return;
    document.querySelectorAll(selector).forEach(el => el.classList.remove('selected'));
    target.classList.add('selected');
}

function generateRoomCode() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function showLobby() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('lobbyScreen').classList.add('active');
    document.getElementById('displayRoomCode').textContent = currentRoomId;

    playMusic('lobby');

    if (isHost) {
        document.getElementById('hostControls').style.display = 'block';
    }
}

function listenToRoom() {
    onValue(ref(database, `rooms/${currentRoomId}`), (snapshot) => {
        const room = snapshot.val();
        if (!room) { alert('房間已關閉'); location.reload(); return; }

        updatePlayersList(room.players, room.maxPlayers);
        if (room.script) {
            document.getElementById('displayScriptName').textContent = room.script.title;
            document.getElementById('displayDuration').textContent = room.script.duration;
        }
        if (room.status === 'playing') {
            showGame(room);
            updateGamePhase(room);
            
            // 新增: 如果是主持人，且遊戲狀態是 playing，則檢查回合是否結束
            if (isHost && room.players) {
                checkAllTurnsEnded(room); 
            }
        }
        if (room.messages) updateChat(room.messages);
    });
}

function updatePlayersList(players, max) {
    const list = document.getElementById('playersList');
    list.innerHTML = '';
    document.getElementById('currentPlayers').textContent = players ? Object.keys(players).length : 0;
    document.getElementById('maxPlayers').textContent = max;

    if (players) {
        Object.values(players).forEach(p => {
            const div = document.createElement('div');
            div.className = 'player-item';
            div.innerHTML = `<span>👤 ${p.name}</span>${p.character ? '<span>✅</span>' : '<span>⏳</span>'}`;
            list.appendChild(div);
        });
    }
}

function showGame(room) {
    if (document.getElementById('gameScreen').classList.contains('active')) return;
    switchScreen('gameScreen');

    // 播放音樂：檢查劇本是否有設定 music，否則使用預設
    const musicKey = room.script.music || (room.scriptType === 'teen' ? 'default_teen' : 'default_adult');
    playMusic(musicKey);

    const myPlayer = room.players[currentPlayerId];
    if (myPlayer?.character) {
        document.getElementById('characterName').textContent = myPlayer.character.name;
        document.getElementById('characterBackground').textContent = myPlayer.character.background;
        document.getElementById('characterSecret').textContent = myPlayer.character.secret;
        if (myPlayer.character.goal) {
            document.getElementById('characterGoal').innerHTML = `<strong>目標：</strong>${myPlayer.character.goal}`;
        }
        
        // 圖片處理
        const img = document.getElementById('characterPortrait');
        if (myPlayer.character.portrait) {
            img.src = IMAGE_BASE_URL + myPlayer.character.portrait;
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    }
    
    const qList = document.getElementById('questionList');
    qList.innerHTML = '';
    room.script.questions?.forEach(q => {
        const li = document.createElement('li');
        li.textContent = q;
        qList.appendChild(li);
    });
}

function updateGamePhase(room) {
    const script = room.script;
    const dayData = script.dayPhases.find(d => d.day === (room.currentDay || 1));
    if (!dayData) return;
    const phase = dayData.phases[room.currentPhaseIndex || 0];
    if (!phase) return;

    document.getElementById('dayIndicator').textContent = `第 ${room.currentDay || 1} 天`;
    document.getElementById('phaseInfo').textContent = `${phase.name} - ${phase.description}`;

    if (dayData.events) {
        const evt = dayData.events.find(e => e.phase === phase.name);
        if (evt && !room.eventShown) {
            showEvent(evt.content);
            if (isHost) update(ref(database, `rooms/${currentRoomId}`), { eventShown: true });
        }
    }

    if (phase.type === 'discussion' && !phaseTimer) {
        startPhaseTimer(phase.duration, room.currentDay, room.currentPhaseIndex, dayData.phases.length);
    } else if (phase.type === 'voting') {
        if (phaseTimer) { clearInterval(phaseTimer); phaseTimer = null; }
        showVoting(room.players, room.scriptType, room.currentDay, script.days);
    }
    // 獲取當前玩家的狀態
    const myPlayer = room.players[currentPlayerId];
    const endTurnBtn = document.getElementById('endTurnBtn');
    const voteSection = document.getElementById('voteSection');
    
    // 隱藏投票區塊和按鈕，然後根據階段顯示
    endTurnBtn.style.display = 'none';
    voteSection.style.display = 'none';

    if (phase.type === 'discussion') {
        // 顯示結束回合按鈕
        endTurnBtn.style.display = 'block';
        if (myPlayer?.turnEnded) {
            endTurnBtn.disabled = true;
            endTurnBtn.textContent = '✅ 已結束發言，等待其他玩家...';
        } else {
            endTurnBtn.disabled = false;
            endTurnBtn.textContent = '結束本回合發言';
        }

        if (!phaseTimer) {
            startPhaseTimer(phase.duration, room.currentDay, room.currentPhaseIndex, dayData.phases.length);
        }
    } else if (phase.type === 'voting') {
        if (phaseTimer) { clearInterval(phaseTimer); phaseTimer = null; }
        showVoting(room.players, room.scriptType, room.currentDay, script.days);
    }
}

function showEvent(content) {
    const card = document.getElementById('eventCard');
    document.getElementById('eventContent').textContent = content;
    card.style.display = 'block';
    setTimeout(() => card.style.opacity = '0.7', 5000);
}

function startPhaseTimer(seconds, day, pIndex, totalP) {
    let timeLeft = seconds;
    const timerDiv = document.getElementById('timer');
    
    // 清除舊的計時器
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
                } else {
                   await update(ref(database, `rooms/${currentRoomId}`), updateData);
                }
            }
        }
    }, 1000);
}

function updateChat(msgs) {
    const box = document.getElementById('chatContainer');
    box.innerHTML = '';
    Object.values(msgs).sort((a,b) => a.timestamp - b.timestamp).forEach(m => {
        const div = document.createElement('div');
        div.className = 'message';
        div.innerHTML = `<div class="sender">${m.sender} ${m.type==='private'?'(私)':''}</div><div>${m.text}</div>`;
        box.appendChild(div);
    });
    box.scrollTop = box.scrollHeight;
}

function showVoting(players, type, day, totalDays) {
    document.getElementById('voteSection').style.display = 'block';
    const btnDiv = document.getElementById('voteButtons');
    btnDiv.innerHTML = '';
    document.getElementById('votePrompt').textContent = type === 'teen' 
        ? '誰的觀點最有啟發性？' 
        : (day < totalDays ? '誰最可疑？' : '最終投票：誰是兇手/關鍵人物？');

    Object.values(players).forEach(p => {
        if (!p.character) return;
        const btn = document.createElement('button');
        btn.className = 'vote-button';
        btn.textContent = `${p.name} (${p.character.name})`;
        btn.onclick = () => vote(p.name);
        if (hasVoted) btn.disabled = true;
        btnDiv.appendChild(btn);
    });
}

async function checkVoteResults() {
    const snap = await get(ref(database, `rooms/${currentRoomId}`));
    const room = snap.val();
    const players = room.players;
    
    let allVoted = true;
    const votes = {};
    Object.values(players).forEach(p => {
        if (!p.vote) allVoted = false;
        else votes[p.vote] = (votes[p.vote] || 0) + 1;
    });

    if (allVoted) {
        const maxVoteName = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
        if ((room.currentDay || 1) < room.script.days) {
            push(ref(database, `rooms/${currentRoomId}/messages`), {
                sender: '系統', text: `投票結果：${maxVoteName} 最高票。`, type: 'public', timestamp: Date.now()
            });
        } else {
            showFinalResults(votes, players, room);
        }
    }
}

function showFinalResults(votes, players, room) {
    const maxVote = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
    const resDiv = document.getElementById('gameResult');
    resDiv.style.display = 'block';
    playMusic('victory');
    
    let villainInfo = room.script.villain || '請參考劇本說明';
    
    resDiv.className = 'alert alert-info';
    resDiv.innerHTML = `
        <h3>投票結果</h3>
        <p>最高票：<strong>${maxVote}</strong></p>
        <hr>
        <h4>真相揭露：</h4>
        <p>${villainInfo}</p>
    `;
    
    if (isHost) update(ref(database, `rooms/${currentRoomId}`), { phase: 'ended' });
}

async function endTurn() {
    // 檢查當前是否為討論階段
    const roomSnap = await get(ref(database, `rooms/${currentRoomId}`));
    const room = roomSnap.val();
    const script = room.script;
    const dayData = script.dayPhases.find(d => d.day === (room.currentDay || 1));
    const phase = dayData.phases[room.currentPhaseIndex || 0];
    
    if (phase.type !== 'discussion') return; // 只有討論階段才能結束回合

    // 1. 更新玩家狀態為已結束發言
    await update(ref(database, `rooms/${currentRoomId}/players/${currentPlayerId}`), { turnEnded: true });

    // 2. 顯示按鈕已禁用，避免重複點擊
    document.getElementById('endTurnBtn').disabled = true;
    document.getElementById('endTurnBtn').textContent = '✅ 已結束發言，等待其他玩家...';

    // 3. 系統廣播該玩家已結束
    await push(ref(database, `rooms/${currentRoomId}/messages`), {
        sender: '系統', 
        text: `${currentPlayerName} 已結束本回合發言。`, 
        type: 'public', 
        timestamp: Date.now()
    });

    // 4. 主持人檢查是否所有人都結束了
    if (isHost) {
        checkAllTurnsEnded(room);
    }
}

async function checkAllTurnsEnded(room) {
    const players = room.players;
    const playerIds = Object.keys(players);
    let allEnded = true;

    playerIds.forEach(pid => {
        if (!players[pid].turnEnded) {
            allEnded = false;
        }
    });

    if (allEnded) {
        // 清除計時器（如果正在運行）
        if (phaseTimer) {
            clearInterval(phaseTimer);
            phaseTimer = null;
        }

        // 觸發進入下一階段的邏輯 (與計時器結束邏輯相同)
        const script = room.script;
        const dayData = script.dayPhases.find(d => d.day === (room.currentDay || 1));
        const totalP = dayData.phases.length;
        const currentPIndex = room.currentPhaseIndex || 0;
        const nextP = currentPIndex + 1;
        const currentDay = room.currentDay || 1;

        const updates = {};
        
        if (nextP < totalP) {
            // 進入下一個階段
            updates.currentPhaseIndex = nextP;
            updates.eventShown = false;
        } else {
            // 進入下一天，或者遊戲結束
            updates.currentDay = currentDay + 1;
            updates.currentPhaseIndex = 0;
            updates.eventShown = false;
            
            // 清除所有玩家的投票紀錄，因為要開始新的一輪
            const snap = await get(ref(database, `rooms/${currentRoomId}/players`));
            Object.keys(snap.val() || {}).forEach(k => updates[`players/${k}/vote`] = null);
        }

        // 重置所有玩家的 turnEnded 狀態
        Object.keys(players).forEach(pid => updates[`players/${pid}/turnEnded`] = false);

        // 提交更新
        await update(ref(database, `rooms/${currentRoomId}`), updates);
        
        // 系統通知回合結束
        await push(ref(database, `rooms/${currentRoomId}/messages`), {
            sender: '系統', 
            text: '所有玩家已結束發言，進入下一階段！', 
            type: 'public', 
            timestamp: Date.now()
        });
    }
}

// -----------------------------------------------------------
// ⚠️ 重要：手動將函式綁定到 window 物件，解決 onclick 找不到的問題
// -----------------------------------------------------------

console.log("🔗 正在綁定全域函式...");

window.toggleMusic = toggleMusic;
window.showCreateRoom = showCreateRoom;
window.showJoinRoom = showJoinRoom;
window.backToHome = backToHome;
window.backToScriptType = backToScriptType;
window.backToPlayerCount = backToPlayerCount;
window.selectScriptType = selectScriptType;
window.selectRoomSize = selectRoomSize;
window.selectScript = selectScript; 
window.joinRoom = joinRoom;
window.startGame = startGame;
window.sendMessage = sendMessage;
window.leaveRoom = leaveRoom;
window.vote = vote;
window.endTurn = endTurn;

console.log("✅ 全域函式綁定完成！");

// 確保這一行在最後
export { initializeFirebase };