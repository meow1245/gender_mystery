// scripts-data.js

export const SCRIPTS = {
    teen: {
        3: [
            {
                id: "teen_3_bullying",
                title: "沉默的共犯",
                description: "轉學生遭受言語霸凌。這不只是兩個人的事，而是整個班級的「空氣」出了問題。",
                duration: "20分鐘",
                days: 1,
                difficulty: "入門",
                background: "班上轉來的新同學小雨因為口音被嘲笑，最後導致她不敢來上學。班導師決定召開緊急班會。",
                specialVotes: [
                    { label: "😶 檢討班級冷漠文化", value: "班級冷漠文化" }
                ],
                endings: {
                    "阿傑": {
                        title: "結局 A：抓出壞蘋果 (Normal Ending)",
                        type: "neutral",
                        description: "你們認為阿傑是罪魁禍首，老師記了他大過。霸凌暫時停止了，但班上的氣氛依然冷漠，大家只是怕被處罰，並沒有真正學會尊重。",
                        image: "ending_punish.jpg"
                    },
                    "小雨": {
                        title: "結局 B：檢討受害者 (Bad Ending)",
                        type: "bad",
                        description: "部分同學認為「小雨自己太玻璃心」。小雨最終轉學了，班級恢復了平靜，但這種排擠異己的文化被默許了。",
                        image: "ending_victim_blame.jpg"
                    },
                    "班級冷漠文化": {
                        title: "結局 C：打破沉默 (True Ending)",
                        type: "good",
                        description: "你們意識到阿傑只是導火線，真正的問題是「旁觀者的沉默」。班級制定了新的公約，承諾在有人被攻擊時挺身而出。",
                        image: "ending_solidarity.jpg"
                    }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 300, type: "discussion", description: "還原現場：誰看見了什麼？" },
                            { name: "下午", duration: 300, type: "discussion", description: "深層動機：為什麼沒人阻止？" },
                            { name: "傍晚", duration: 180, type: "voting", description: "表態：我們該如何定義這件事？" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "小雨",
                        role: "受害者好友",
                        background: "你是受害者的好友，目睹了全程。",
                        secret: "你其實很愧疚，因為當大家在群組嘲笑她時，你為了合群也發了一個貼圖。",
                        clues: {
                            "早晨_1": "我看見阿傑在黑板上寫嘲笑小雨的話，當時班上很多人都在笑。",
                            "下午_1": "其實小雨傳訊息跟我求救過，但我怕我也被排擠，所以已讀不回..."
                        }
                    },
                    {
                        name: "阿傑",
                        role: "帶頭者",
                        background: "班上的意見領袖，覺得自己只是在「開玩笑」。",
                        secret: "你其實嫉妒小雨成績比你好，所以才帶頭排擠她。",
                        clues: {
                            "早晨_1": "拜託，大家都在笑啊，又不是只有我。而且她自己也沒說不喜歡啊。",
                            "下午_1": "我承認我有傳那個迷因圖，但我只是轉發，圖又不是我做的。"
                        }
                    },
                    {
                        name: "王老師",
                        role: "班導師",
                        background: "這學期剛接手這個班級。",
                        secret: "你早就發現班級群組氣氛怪怪的，但為了不想惹麻煩選擇無視。",
                        clues: {
                            "早晨_1": "我在班級日誌裡看到過幾次「有人亂丟小雨課本」的紀錄。",
                            "下午_1": "我查了群組紀錄，發現這不是單一事件，而是長達一個月的集體網路霸凌。"
                        }
                    }
                ],
                questions: ["「開玩笑」和「霸凌」的界線在哪裡？"]
            },
            {
                id: "teen_3_outing",
                title: "被公開的秘密",
                description: "有人擅自公開了同學的性傾向。這是「八卦」還是「暴力」？",
                duration: "25分鐘",
                days: 1,
                difficulty: "入門",
                background: "班上的阿凱最近被指指點點，因為有人截圖了他的私人小帳，公開他是同志的事實。這是強制出櫃 (Outing)。",
                specialVotes: [
                    { label: "🌈 我們應該尊重隱私", value: "尊重隱私" }
                ],
                endings: {
                    "小琳": {
                        title: "結局 A：八卦的代價 (Normal Ending)",
                        type: "neutral",
                        description: "散播截圖的小琳道歉了，但她堅持「我又沒說謊，這是事實」。阿凱受到了傷害，變得更封閉。",
                        image: "ending_gossip.jpg"
                    },
                    "尊重隱私": {
                        title: "結局 B：擁抱多元 (True Ending)",
                        type: "good",
                        description: "大家意識到「強制出櫃」是一種嚴重的暴力。班級約定尊重每個人的隱私與步調。阿凱感受到了接納。",
                        image: "ending_rainbow.jpg"
                    }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 300, type: "discussion", description: "是誰截圖的？" },
                            { name: "下午", duration: 300, type: "discussion", description: "公開別人的秘密有錯嗎？" },
                            { name: "傍晚", duration: 180, type: "voting", description: "誰該道歉？" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "阿凱",
                        role: "當事人",
                        background: "安靜的男生，有個鎖起來的小帳。",
                        secret: "你還沒準備好跟任何人說，現在覺得赤裸裸地被展示。",
                        clues: {
                            "早晨_1": "我的小帳只有加三個最好的朋友，截圖一定從他們流出的。",
                            "下午_1": "我不覺得我是同志有什麼錯，但我有權利決定什麼時候說。"
                        }
                    },
                    {
                        name: "小琳",
                        role: "截圖者",
                        background: "愛聊八卦。",
                        secret: "是朋友給你看手機時你偷拍的。你覺得這很勁爆。",
                        clues: {
                            "早晨_1": "我只是覺得大家有權利知道啊。",
                            "下午_1": "他又沒寫「禁止轉載」，網路上不就是這樣嗎？"
                        }
                    },
                    {
                        name: "班長",
                        role: "協調者",
                        background: "想維持班級秩序。",
                        secret: "你以前也拿別人的性傾向開過玩笑，現在在反省。",
                        clues: {
                            "早晨_1": "這不是誠實的問題，這是侵犯隱私。",
                            "下午_1": "性傾向是個人的事，不應該成為八卦話題。"
                        }
                    }
                ],
                questions: ["為什麼「強制出櫃」是一種傷害？"]
            }
        ],
        4: [
            {
                id: "teen_4_photo",
                title: "鏡頭下的秘密",
                description: "攝影社發生偷拍事件。探討肖像權與數位性別暴力。",
                duration: "25分鐘",
                days: 1,
                difficulty: "入門",
                background: "社團雲端硬碟流出一組女同學未經同意被拍攝的照片。社長大明試圖內部處理。",
                specialVotes: [
                    { label: "⚖️ 尋求學校正式管道", value: "偷拍者" }
                ],
                endings: {
                    "大明": {
                        title: "結局 A：私了的代價 (Bad Ending)",
                        type: "bad",
                        description: "你們選擇相信大明的「內部處理」，照片被刪除了，但偷拍者沒有受到教訓。",
                        image: "ending_secret.jpg"
                    },
                    "偷拍者": {
                        title: "結局 B：直面錯誤 (Good Ending)",
                        type: "good",
                        description: "偷拍者被指認並接受處分。學校藉此機會重申「數位身體隱私權」。",
                        image: "ending_justice.jpg"
                    }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 360, type: "discussion", description: "誰上傳了照片？" },
                            { name: "下午", duration: 360, type: "discussion", description: "包庇還是揭發？" },
                            { name: "傍晚", duration: 180, type: "voting", description: "決定如何處理" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "小美",
                        role: "受害者",
                        background: "照片主角，感到極度不安。",
                        secret: "你不想把事情鬧大，怕被說「太敏感」。",
                        clues: { "早晨_1": "照片角度明顯是偷拍。", "下午_1": "有人私訊騷擾我。" }
                    },
                    {
                        name: "大明",
                        role: "社長",
                        background: "想保護社團名聲。",
                        secret: "你知道偷拍者是你最好的朋友。",
                        clues: { "早晨_1": "這可能只是誤傳。", "下午_1": "報給學校會被廢社。" }
                    },
                    {
                        name: "小華",
                        role: "社員",
                        background: "正直的社員。",
                        secret: "你看到大明在偷偷刪除紀錄。",
                        clues: { "早晨_1": "拍攝時間是午休。", "下午_1": "社長在刪除下載紀錄。" }
                    },
                    {
                        name: "輔導老師",
                        role: "協助者",
                        background: "提供支援。",
                        secret: "這已經觸犯刑法。",
                        clues: { "早晨_1": "這涉及妨害秘密罪。", "下午_1": "受害者意願最重要。" }
                    }
                ],
                questions: ["為了保護朋友而隱瞞錯誤，是義氣還是共犯？"]
            },
            {
                id: "teen_4_catfish",
                title: "假面騎士",
                description: "網戀對象竟然是班上同學假扮的？探討網路身分冒用。",
                duration: "30分鐘",
                days: 1,
                difficulty: "入門",
                background: "小剛在網路上交了一個「女友」，對方寄了很多照片。結果被發現那些照片是盜用隔壁班女生的。",
                specialVotes: [
                    { label: "🚫 譴責盜圖與欺騙", value: "惡作劇者" }
                ],
                endings: {
                    "惡作劇者": {
                        title: "結局 A：玩笑開過頭 (Good Ending)",
                        type: "good",
                        description: "假扮者承認這只是為了「好玩」。大家認識到盜圖和欺騙感情不僅不道德，還可能違法。",
                        image: "ending_reveal.jpg"
                    },
                    "小剛": {
                        title: "結局 B：受傷的信任 (Bad Ending)",
                        type: "bad",
                        description: "大家嘲笑小剛「太蠢才會被騙」。沒有人檢討盜圖者，導致網路霸凌加劇。",
                        image: "ending_mockery.jpg"
                    }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 360, type: "discussion", description: "照片是誰的？" },
                            { name: "下午", duration: 360, type: "discussion", description: "盜圖的後果" },
                            { name: "傍晚", duration: 180, type: "voting", description: "誰是幕後黑手？" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "小剛",
                        role: "被騙者",
                        background: "付出真心卻被騙。",
                        secret: "你傳了私密照給對方，怕外流。",
                        clues: { "早晨_1": "她說住國外不能視訊。", "下午_1": "照片是隔壁班小雅的。" }
                    },
                    {
                        name: "阿強",
                        role: "假扮者",
                        background: "覺得無聊想整人。",
                        secret: "就是你創的假帳號。",
                        clues: { "早晨_1": "網路上本來就很多假人。", "下午_1": "只是隨便抓圖而已。" }
                    },
                    {
                        name: "小雅",
                        role: "被盜圖者",
                        background: "莫名其妙捲入。",
                        secret: "有人以為你真的在跟小剛交往。",
                        clues: { "早晨_1": "我根本不認識小剛。", "下午_1": "盜用照片侵犯肖像權。" }
                    },
                    {
                        name: "老師",
                        role: "調解者",
                        background: "處理糾紛。",
                        secret: "這涉及情感詐騙。",
                        clues: { "早晨_1": "可能涉及刑法。", "下午_1": "網路傷害是真實的。" }
                    }
                ],
                questions: ["在網路上假扮他人有什麼法律責任？"]
            }
        ],
        5: [
            {
                id: "teen_5_uniform",
                title: "裙襬戰爭",
                description: "女學生因裙子長度受罰。規則是為了保護，還是控制？",
                duration: "30分鐘",
                days: 1,
                difficulty: "進階",
                background: "小婷因為裙子膝上 5 公分被記警告，但男同學穿短褲卻沒事。學生會發起抗議。",
                specialVotes: [
                    { label: "✊ 修改不合理校規", value: "修改校規" }
                ],
                endings: {
                    "維持校規": {
                        title: "結局 A：傳統的束縛 (Normal Ending)",
                        type: "neutral",
                        description: "抗議無效，校方堅持「學生要有學生的樣子」。小婷只能把裙子放長，怨氣持續累積。",
                        image: "ending_rules.jpg"
                    },
                    "修改校規": {
                        title: "結局 B：身體自主 (True Ending)",
                        type: "good",
                        description: "學校廢除了以性別區分的服儀規定。這是校園民主與性別平權的一大勝利。",
                        image: "ending_freedom.jpg"
                    }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 420, type: "discussion", description: "規定合理嗎？" },
                            { name: "下午", duration: 420, type: "discussion", description: "雙重標準的討論" },
                            { name: "傍晚", duration: 180, type: "voting", description: "表決：修改校規還是維持現狀？" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "小婷",
                        role: "抗議學生",
                        secret: "主任說「女生穿這樣會引人犯罪」。",
                        clues: { "早晨_1": "我長高了所以裙子變短。", "下午_1": "男生穿短褲就是陽光？" }
                    },
                    {
                        name: "林主任",
                        role: "訓導主任",
                        secret: "覺得規定過時但怕家長。",
                        clues: { "早晨_1": "為了保護女生。", "下午_1": "開放會亂。" }
                    },
                    {
                        name: "阿強",
                        role: "男同學",
                        secret: "發現自己有性別特權。",
                        clues: { "早晨_1": "我覺得她穿很普通。", "下午_1": "應該教男生尊重。" }
                    },
                    {
                        name: "學生會長",
                        role: "改革者",
                        secret: "處分可能違法。",
                        clues: { "早晨_1": "教育部有規定。", "下午_1": "討論身體自主權。" }
                    },
                    {
                        name: "家長會長",
                        role: "保守派",
                        secret: "女兒也抱怨裙子熱。",
                        clues: { "早晨_1": "要有學生樣子。", "下午_1": "以後會不會染髮？" }
                    }
                ],
                questions: ["「為了保護妳」這句話背後，是否隱藏著「受害者譴責」？"]
            },
            {
                id: "teen_5_deepfake",
                title: "AI 換臉風波",
                description: "同學的臉被 AI 移花接木到不雅影片。這是「技術」還是「犯罪」？",
                duration: "35分鐘",
                days: 1,
                difficulty: "進階",
                background: "班級群組流傳一段影片，主角很像班長小慧。但那是用 Deepfake 做的。",
                specialVotes: [
                    { label: "💻 提升數位素養與立法", value: "使用者與文化" }
                ],
                endings: {
                    "製作軟體": {
                        title: "結局 A：怪罪工具 (Normal Ending)",
                        type: "neutral",
                        description: "大家認為是 AI 軟體太氾濫。雖然製作者被處罰，但沒有人反思「為什麼想看這種影片」的慾望。",
                        image: "ending_ai_ban.jpg"
                    },
                    "使用者與文化": {
                        title: "結局 B：數位素養 (True Ending)",
                        type: "good",
                        description: "大家意識到技術中立，惡意的是人。學校開始推動「數位性暴力」課程，教導大家 Deepfake 也是一種性暴力。",
                        image: "ending_digital_literacy.jpg"
                    }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 400, type: "discussion", description: "影片是真的嗎？" },
                            { name: "下午", duration: 400, type: "discussion", description: "技術的倫理界線" },
                            { name: "傍晚", duration: 200, type: "voting", description: "誰製作了影片？" }
                        ]
                    }
                ],
                characters: [
                    { name: "小慧", role: "受害者", secret: "覺得被玷污。", clues: { "早晨_1": "我沒穿那件衣服。", "下午_1": "這是盜用身分。" } },
                    { name: "阿光", role: "製作者", secret: "想試新App。", clues: { "早晨_1": "AI 很強。", "下午_1": "只是合成而已。" } },
                    { name: "小明", role: "轉發者", secret: "轉到別班群組。", clues: { "早晨_1": "大家都在傳。", "下午_1": "以為是真的。" } },
                    { name: "老師", role: "調查者", secret: "涉及散播猥褻物品。", clues: { "早晨_1": "造成極大傷害。", "下午_1": "製作有刑責。" } },
                    { name: "科技小老師", role: "鑑識者", secret: "看出破綻。", clues: { "早晨_1": "邊緣模糊。", "下午_1": "查手機就知道。" } }
                ],
                questions: ["用 AI 合成別人的私密照，為什麼也算是性暴力？"]
            }
        ],
        6: [
            {
                id: "teen_6_game",
                title: "虛擬世界的真實惡意",
                description: "女玩家在遊戲語音中遭受集體騷擾。網路只是虛擬的嗎？",
                duration: "35分鐘",
                days: 1,
                difficulty: "進階",
                background: "公會裡唯一的女生小櫻退群了，因為她在語音頻道被一群男生開黃腔騷擾。",
                specialVotes: [
                    { label: "🎮 改革公會文化", value: "改革" }
                ],
                endings: {
                    "無視": {
                        title: "結局 A：劣幣驅逐良幣 (Bad Ending)",
                        type: "bad",
                        description: "公會認為「認真就輸了」。小櫻徹底離開遊戲，公會變成了只有男生的有毒環境。",
                        image: "ending_toxic.jpg"
                    },
                    "改革": {
                        title: "結局 B：數位公民素養 (Good Ending)",
                        type: "good",
                        description: "會長制定了「反騷擾公約」，踢出了惡意騷擾者。公會氣氛變好了。",
                        image: "ending_community.jpg"
                    }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 480, type: "discussion", description: "這只是遊戲玩笑？" },
                            { name: "下午", duration: 480, type: "discussion", description: "虛擬分身的真實傷害" },
                            { name: "傍晚", duration: 240, type: "voting", description: "公會該如何處理騷擾者？" }
                        ]
                    }
                ],
                characters: [
                    { name: "小櫻", role: "受害者", secret: "有錄音檔。", clues: { "早晨_1": "玩輸出被罵。", "下午_1": "這是錄音檔。" } },
                    { name: "阿威", role: "會長", secret: "騷擾者是主力。", clues: { "早晨_1": "遊戲圈講話衝。", "下午_1": "踢了會輸公會戰。" } },
                    { name: "小杰", role: "旁觀玩家", secret: "跟著笑很後悔。", clues: { "早晨_1": "氣氛很嗨。", "下午_1": "真的很過分。" } },
                    { name: "版主", role: "管理者", secret: "很少執行規範。", clues: { "早晨_1": "可以封鎖帳號。", "下午_1": "不能成為法外之地。" } },
                    { name: "騷擾者", role: "加害者", secret: "現實很自卑。", clues: { "早晨_1": "幹嘛認真？", "下午_1": "是她自己開麥。" } },
                    { name: "老玩家", role: "觀察者", secret: "以前也遇過。", clues: { "早晨_1": "到處都有。", "下午_1": "該改變文化了。" } }
                ],
                questions: ["虛擬世界的性騷擾會造成真實的心理創傷嗎？"]
            },
            {
                id: "teen_6_anonymous",
                title: "匿名牆背後的黑手",
                description: "學校匿名告白牆出現了針對特定性別的仇恨言論。誰是鍵盤俠？",
                duration: "35分鐘",
                days: 1,
                difficulty: "進階",
                background: "學校 IG 的匿名告白牆最近充滿了「台女不意外」、「母豬」等仇恨言論，導致男女同學對立。",
                specialVotes: [
                    { label: "🤝 面對仇恨並對話", value: "揪出源頭" }
                ],
                endings: {
                    "關閉粉專": {
                        title: "結局 A：逃避問題 (Neutral Ending)",
                        type: "neutral",
                        description: "粉專關閉了，但仇恨言論轉移到了更私密的群組，對立依然存在。",
                        image: "ending_shutdown.jpg"
                    },
                    "揪出源頭": {
                        title: "結局 B：面對仇恨 (True Ending)",
                        type: "good",
                        description: "透過 IP 追蹤發現是少數人刻意煽動。學校舉辦了性別對話論壇，化解了誤會。",
                        image: "ending_dialogue.jpg"
                    }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 480, type: "discussion", description: "誰在投稿？" },
                            { name: "下午", duration: 480, type: "discussion", description: "言論自由與仇恨言論" },
                            { name: "傍晚", duration: 240, type: "voting", description: "關閉粉專還是揪出黑手？" }
                        ]
                    }
                ],
                characters: [
                    { name: "小編", role: "管理者", secret: "為了流量放行。", clues: { "早晨_1": "看不完投稿。", "下午_1": "越吵流量越高。" } },
                    { name: "女權隊長", role: "抗議者", secret: "也投稿罵男生。", clues: { "早晨_1": "這是性騷擾。", "下午_1": "不能容忍厭女。" } },
                    { name: "酸民代表", role: "投稿者", secret: "被女生拒絕。", clues: { "早晨_1": "言論自由。", "下午_1": "我說的是事實。" } },
                    { name: "和事佬", role: "調解者", secret: "知道是誰。", clues: { "早晨_1": "不要激動。", "下午_1": "大家誤會了。" } },
                    { name: "吃瓜群眾", role: "旁觀者", secret: "每篇都按讚。", clues: { "早晨_1": "好精彩。", "下午_1": "按讚不犯法。" } },
                    { name: "資訊社", role: "技術支援", secret: "來自同IP。", clues: { "早晨_1": "像是分身。", "下午_1": "可以查學校WiFi。" } }
                ],
                questions: ["言論自由包含仇恨言論嗎？"]
            }
        ]
    },
    adult: {
        3: [
            {
                id: "adult_3_workplace",
                title: "透明的屏障",
                description: "科技公司性騷擾疑雲。是誤會還是權力欺壓？",
                duration: "30分鐘",
                days: 1,
                difficulty: "入門",
                background: "行銷部經理林雅婷突然離職，傳聞與業務總監王大為的性騷擾有關。",
                specialVotes: [
                    { label: "🏢 改革公司體制", value: "公司體制" }
                ],
                endings: {
                    "王大為": {
                        title: "結局 A：個人懲處 (Normal Ending)",
                        type: "neutral",
                        description: "王大為被記過，但公司文化未變。大家私下議論林雅婷「很難搞」。",
                        image: "ending_gossip.jpg"
                    },
                    "公司體制": {
                        title: "結局 B：結構改革 (True Ending)",
                        type: "good",
                        description: "董事會介入，建立了獨立的性平申訴機制。公司氛圍開始轉變。",
                        image: "ending_reform_corp.jpg"
                    }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 420, type: "discussion", description: "還原辦公室傳聞" },
                            { name: "下午", duration: 420, type: "discussion", description: "權力結構分析" },
                            { name: "傍晚", duration: 240, type: "voting", description: "誰該為此負責？" }
                        ]
                    }
                ],
                characters: [
                    { name: "林雅婷", role: "檢舉人", secret: "人資暗示閉嘴。", clues: { "早晨_1": "開會时不舒服接觸。", "下午_1": "錄音：大局為重。" } },
                    { name: "王大為", role: "嫌疑人", secret: "公司會保你。", clues: { "早晨_1": "只是鼓勵。", "下午_1": "老闆看重我。" } },
                    { name: "人資總監", role: "公司代表", secret: "高層施壓。", clues: { "早晨_1": "她壓力大。", "下午_1": "影響股價。" } }
                ],
                questions: ["旁觀者在職場性騷擾中可以扮演什麼角色？"]
            },
            {
                id: "adult_3_smart_control",
                title: "智慧監控",
                description: "丈夫用智慧家電監控妻子。這是關心還是控制？IoT 時代的家暴。",
                duration: "30分鐘",
                days: 1,
                difficulty: "入門",
                background: "妻子小安總是感到焦慮，覺得丈夫知道她在家的一舉一動。她懷疑家裡的智慧音箱和攝影機。",
                specialVotes: [
                    { label: "📱 識別數位跟蹤", value: "丈夫" }
                ],
                endings: {
                    "丈夫": {
                        title: "結局 A：識別數位跟蹤 (Good Ending)",
                        type: "good",
                        description: "小安發現了手機裡的間諜軟體。丈夫的行為被定義為「數位跟蹤騷擾」，小安申請了保護令。",
                        image: "ending_privacy.jpg"
                    },
                    "小安": {
                        title: "結局 B：煤氣燈效應 (Bad Ending)",
                        type: "bad",
                        description: "丈夫成功讓大家相信小安精神不正常，是「被害妄想」。小安被送去諮商，控制繼續進行。",
                        image: "ending_gaslight.jpg"
                    }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 360, type: "discussion", description: "無所不在的眼睛" },
                            { name: "下午", duration: 360, type: "discussion", description: "數位控制與隱私" },
                            { name: "傍晚", duration: 180, type: "voting", description: "這是愛還是犯罪？" }
                        ]
                    }
                ],
                characters: [
                    { name: "小安", role: "妻子", secret: "門鎖紀錄被監控。", clues: { "早晨_1": "他知道我幾點回家。", "下午_1": "手機發燙。" } },
                    { name: "丈夫", role: "控制者", secret: "裝了定位App。", clues: { "早晨_1": "關心安全。", "下午_1": "智慧家電有紀錄。" } },
                    { name: "閨蜜", role: "協助者", secret: "對話被竊聽。", clues: { "早晨_1": "他知道我們喝咖啡。", "下午_1": "數位監獄。" } }
                ],
                questions: ["科技便利與隱私監控的界線在哪？"]
            }
        ],
        4: [
            {
                id: "gender_tech_lab_mystery",
                title: "演算法的偏見：實驗室之死",
                description: "AI 實驗室的數據洩漏事件。是個人的報復，還是系統性的謀殺？",
                duration: "90分鐘",
                days: 2,
                difficulty: "困難",
                background: "跨性別工程師 Alex 的私密醫療數據被洩漏，並被訓練進公司的 AI 模型。董事會要求抓出「內鬼」。",
                specialVotes: [
                    { label: "🚨 檢舉 FutureCore 公司體制", value: "FutureCore體制" }
                ],
                endings: {
                    "Sam": { title: "結局 A：平庸的惡", type: "bad", description: "Sam 只是冰山一角，公司文化未變。", image: "ending_silence.jpg" },
                    "FutureCore體制": { title: "結局 B：系統重置", type: "good", description: "你們將矛頭指向公司缺乏倫理審查，推動了結構改革。", image: "ending_reform.jpg" }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "上午", duration: 600, type: "discussion", description: "檢視數位足跡" },
                            { name: "下午", duration: 600, type: "discussion", description: "職場微歧視" }
                        ],
                        events: [{ phase: "下午", content: "伺服器偵測到刪除日誌的痕跡。" }]
                    },
                    {
                        day: 2,
                        phases: [
                            { name: "上午", duration: 600, type: "discussion", description: "辨識 Deepfake" },
                            { name: "下午", duration: 600, type: "discussion", description: "倫理辯論" },
                            { name: "投票", duration: 300, type: "voting", description: "最終審判" }
                        ],
                        events: [{ phase: "上午", content: "影片是由公司內部的 VoiceGen 2.0 合成的。" }]
                    }
                ],
                characters: [
                    { name: "Alex", role: "受害者", secret: "試圖修正演算法。", clues: { "上午_1": "主管叫錯名字。", "下午_2": "影片語氣像 Sam。" } },
                    { name: "Chris", role: "經理", secret: "包庇 Sam。", clues: { "上午_1": "Alex 影響士氣。", "下午_2": "照片是假的。" } },
                    { name: "Sam", role: "工程師", secret: "私用數據。", clues: { "上午_1": "代碼註解。", "上午_2": "深夜上傳數據。" } },
                    { name: "Taylor", role: "旁觀者", secret: "有 Log 備份。", clues: { "下午_1": "IP 來自內部。", "下午_2": "我有備份。" } }
                ],
                questions: ["當 AI 放大偏見時，誰該負責？"]
            },
            {
                id: "adult_4_domestic",
                title: "無形的枷鎖",
                description: "家暴不只是身體的傷。探討經濟控制與心理制約。",
                duration: "35分鐘",
                days: 1,
                difficulty: "進階",
                background: "張小惠在醫院醒來，鄰居報了警。丈夫堅稱是意外摔倒。",
                specialVotes: [
                    { label: "🤝 建立社會支持系統", value: "社會支持系統" }
                ],
                endings: {
                    "張建國": {
                        title: "結局 A：暴力的輪迴 (Normal Ending)",
                        type: "bad",
                        description: "丈夫被抓，但小惠因為沒有經濟能力，幾個月後又回到丈夫身邊。",
                        image: "ending_cycle.jpg"
                    },
                    "社會支持系統": {
                        title: "結局 B：重建生活 (True Ending)",
                        type: "good",
                        description: "小惠連結了法律扶助與庇護資源，終於有勇氣提告並離婚。",
                        image: "ending_freedom_mom.jpg"
                    }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 480, type: "discussion", description: "這真的是意外嗎？" },
                            { name: "下午", duration: 540, type: "discussion", description: "家暴的循環" },
                            { name: "傍晚", duration: 240, type: "voting", description: "如何幫助小惠？" }
                        ]
                    }
                ],
                characters: [
                    { name: "張小惠", role: "受害者", secret: "沒錢不敢走。", clues: { "早晨_1": "他求我原諒。", "下午_1": "威脅帶走孩子。" } },
                    { name: "張建國", role: "丈夫", secret: "控制慾強。", clues: { "早晨_1": "她精神不穩。", "下午_1": "乖乖聽話就好。" } },
                    { name: "王社工", role: "協助者", secret: "經濟控制。", clues: { "早晨_1": "每個月都有意外。", "下午_1": "精神虐待。" } },
                    { name: "李鄰居", role: "旁觀者", secret: "以前覺得是家務事。", clues: { "早晨_1": "聽到大吼。", "下午_1": "穿長袖遮傷。" } }
                ],
                questions: ["為什麼「經濟獨立」對家暴受害者這麼重要？"]
            }
        ],
        5: [
            {
                id: "adult_5_party",
                title: "派對之後的迷霧",
                description: "合意還是性侵？探討「積極同意」與「檢討受害者」。",
                duration: "40分鐘",
                days: 1,
                difficulty: "進階",
                background: "迎新派對後，小美指控阿傑性侵。阿傑喊冤。",
                specialVotes: [
                    { label: "✋ 認定違反意願", value: "阿傑" }
                ],
                endings: {
                    "小美": { title: "結局 A：二度傷害 (Bad Ending)", type: "bad", description: "大家質疑小美「為什麼要喝醉」。阿傑無罪釋放。", image: "ending_blame.jpg" },
                    "阿傑": { title: "結局 B：確立同意界線 (True Ending)", type: "good", description: "大家認定阿傑在對方無法抗拒時發生行為就是性侵。", image: "ending_consent.jpg" }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "上午", duration: 600, type: "discussion", description: "還原現場" },
                            { name: "下午", duration: 600, type: "discussion", description: "輿論與偏見" },
                            { name: "傍晚", duration: 300, type: "voting", description: "這是犯罪嗎？" }
                        ]
                    }
                ],
                characters: [
                    { name: "小美", role: "控訴者", secret: "自責喝醉。", clues: { "上午_1": "想回家。", "下午_1": "沒印象點頭。" } },
                    { name: "阿傑", role: "被告", secret: "沒說不就是好。", clues: { "上午_1": "沒推開。", "下午_1": "跟我去房間。" } },
                    { name: "小華", role: "目擊者", secret: "像屍體。", clues: { "上午_1": "站不穩。", "下午_1": "撿屍。" } },
                    { name: "諮商師", role: "專家", secret: "不是個案。", clues: { "上午_1": "積極同意。", "下午_1": "無法同意。" } },
                    { name: "會長", role: "學生代表", secret: "學校想壓。", clues: { "上午_1": "怕影響校譽。", "下午_1": "性平教育。" } }
                ],
                questions: ["什麼是「積極同意」？"]
            },
            {
                id: "adult_5_dating_app",
                title: "危險的配對",
                description: "交友軟體演算法導致的連續騷擾案。技術中立能當藉口嗎？",
                duration: "40分鐘",
                days: 1,
                difficulty: "進階",
                background: "多名女性在使用 'LoveMatch' App 後遭到跟蹤。調查發現 App 的「距離功能」有漏洞。",
                specialVotes: [
                    { label: "📱 追究 App 開發商責任", value: "App開發商" }
                ],
                endings: {
                    "跟蹤狂": {
                        title: "結局 A：治標不治本 (Normal Ending)",
                        type: "neutral",
                        description: "跟蹤狂被抓了，但 App 的漏洞還在，開發商認為是用戶自己不小心。",
                        image: "ending_arrest.jpg"
                    },
                    "App開發商": {
                        title: "結局 B：演算倫理 (True Ending)",
                        type: "good",
                        description: "輿論迫使開發商修正演算法，隱藏精確位置。這確立了「科技產品設計需考量人身安全」的原則。",
                        image: "ending_tech_safety.jpg"
                    }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "上午", duration: 600, type: "discussion", description: "跟蹤是如何發生的？" },
                            { name: "下午", duration: 600, type: "discussion", description: "平台的責任" },
                            { name: "傍晚", duration: 300, type: "voting", description: "誰是兇手？" }
                        ]
                    }
                ],
                characters: [
                    { name: "受害者", role: "使用者", secret: "只開了一下。", clues: { "上午_1": "你家燈亮了。", "下午_1": "預設開啟。" } },
                    { name: "跟蹤狂", role: "加害者", secret: "三角定位。", clues: { "上午_1": "100公尺內。", "下午_1": "系統告訴我的。" } },
                    { name: "工程師", role: "開發者", secret: "知道風險。", clues: { "上午_1": "配對率高。", "下午_1": "精確度太高。" } },
                    { name: "法務", role: "公司代表", secret: "條款免責。", clues: { "上午_1": "自負風險。", "下午_1": "只是平台。" } },
                    { name: "警官", role: "調查員", secret: "新興犯罪。", clues: { "上午_1": "規範不足。", "下午_1": "設計問題。" } }
                ],
                questions: ["App 設計者是否應該為用戶的安全負責？"]
            }
        ],
        6: [
            {
                id: "adult_6_digital_footprint",
                title: "失控的數位足跡",
                description: "從一張照片到產業鏈。誰是共犯？",
                duration: "45分鐘",
                days: 1,
                difficulty: "進階",
                background: "曉雯的照片被散播，網友肉搜讓她崩潰。",
                specialVotes: [
                    { label: "🕸️ 瓦解共犯結構", value: "共犯結構" }
                ],
                endings: {
                    "前男友": { title: "結局 A：抓小放大 (Normal Ending)", type: "neutral", description: "前男友被抓，但照片依然流傳。", image: "ending_ongoing.jpg" },
                    "共犯結構": { title: "結局 B：數位除罪化 (True Ending)", type: "good", description: "論壇被關閉，轉發者受罰。社會意識到「求車」也是犯罪。", image: "ending_clean_net.jpg" }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "上午", duration: 720, type: "discussion", description: "誰按下了分享鍵？" },
                            { name: "下午", duration: 720, type: "discussion", description: "平台與使用者的責任" },
                            { name: "傍晚", duration: 360, type: "voting", description: "誰責任最大？" }
                        ]
                    }
                ],
                characters: [
                    { name: "陳曉雯", role: "受害者", secret: "朋友也傳。", clues: { "上午_1": "不敢出門。", "下午_1": "求載點。" } },
                    { name: "前男友", role: "始作俑者", secret: "怕坐牢。", clues: { "上午_1": "她自己愛拍。", "下午_1": "我都刪了。" } },
                    { name: "論壇站主", role: "平台", secret: "賺廣告費。", clues: { "上午_1": "免責聲明。", "下午_1": "流量。" } },
                    { name: "網友A", role: "鍵盤俠", secret: "沒什麼。", clues: { "上午_1": "不差我。", "下午_1": "如果是我家人。" } },
                    { name: "警察", role: "調查員", secret: "伺服器在國外。", clues: { "上午_1": "猥褻物品。", "下午_1": "抓不勝抓。" } },
                    { name: "律師", role: "協助者", secret: "推動修法。", clues: { "上午_1": "性暴力。", "下午_1": "告平台。" } }
                ],
                questions: ["轉發私密照為什麼也是性暴力？"]
            },
            {
                id: "adult_6_metaverse",
                title: "虛擬邊界的觸碰",
                description: "元宇宙中的性騷擾案。虛擬的觸碰算犯罪嗎？",
                duration: "45分鐘",
                days: 1,
                difficulty: "專家",
                background: "在一個 VR 社交平台，一名女性玩家的虛擬替身遭到集體圍堵和猥褻動作。雖然肉體沒受傷，但她感到極度創傷。",
                specialVotes: [
                    { label: "⚖️ 建立虛擬權利判例", value: "建立判例" }
                ],
                endings: {
                    "無法可管": {
                        title: "結局 A：法律落後科技 (Bad Ending)",
                        type: "bad",
                        description: "因為沒有實體接觸，現行法律難以定罪。受害者求助無門，退出 VR 世界。",
                        image: "ending_offline.jpg"
                    },
                    "建立判例": {
                        title: "結局 B：虛擬權利 (True Ending)",
                        type: "good",
                        description: "法院認定虛擬替身是人格的延伸，騷擾造成真實心理傷害。平台被迫增加「安全氣泡」功能。",
                        image: "ending_virtual_rights.jpg"
                    }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 480, type: "discussion", description: "這算性騷擾嗎？" },
                            { name: "下午", duration: 480, type: "discussion", description: "虛擬法律的邊界" },
                            { name: "傍晚", duration: 240, type: "voting", description: "如何定罪？" }
                        ]
                    }
                ],
                characters: [
                    { name: "受害者", role: "玩家", secret: "觸覺回饋。", clues: { "早晨_1": "圍住我。", "下午_1": "像真實一樣。" } },
                    { name: "加害者", role: "玩家", secret: "只是玩。", clues: { "早晨_1": "沒碰真人。", "下午_1": "遊戲而已。" } },
                    { name: "平台管理員", role: "官方", secret: "設計疏失。", clues: { "早晨_1": "有靜音。", "下午_1": "用戶互動。" } },
                    { name: "心理學家", role: "專家", secret: "騙過大腦。", clues: { "早晨_1": "沉浸感。", "下午_1": "PTSD。" } },
                    { name: "律師", role: "法律人", secret: "挑戰法律。", clues: { "早晨_1": "公然侮辱。", "下午_1": "數位身體權。" } },
                    { name: "目擊者", role: "路人", secret: "有錄影。", clues: { "早晨_1": "很暴力。", "下午_1": "怕下一個是我。" } }
                ],
                questions: ["如果身體沒有受傷，心理的創傷算犯罪嗎？"]
            }
        ]
    }
};