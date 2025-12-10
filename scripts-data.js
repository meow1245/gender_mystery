// scripts-data.js

export const SCRIPTS = {
    teen: {
        3: [
            {
                id: "teen_3_bullying",
                title: "沉默的共犯",
                description: "那一天，早自習的鐘聲響起，但原本該坐在第三排窗邊的小雨卻沒有出現。她的座位空蕩蕩的，桌上還殘留著昨天沒擦乾淨的粉筆灰，空氣中瀰漫著一股令人窒息的消毒水味——那是昨天用來清洗被潑濕地板的味道。每個人都低著頭滑手機，班級群組卻熱鬧得異常詭異。這不只是兩個人的恩怨，而是整個教室的空氣都「生病」了。",
                duration: "25分鐘",
                days: 1,
                difficulty: "入門",
                background: "新轉來的同學小雨，因為來自鄉下、操著濃厚的口音，加上家境清寒穿著樸素，很快成為了班上話題的中心。霸凌不是一天形成的，一開始只是模仿她的口音，後來演變成「不小心」踢翻她的便當、在群組發起「誰最想讓她消失」的投票。昨天放學，她在廁所被潑了一桶髒水，全身濕透地跑回家。今早家長打來電話，哭訴小雨把自己鎖在房間不敢出門。面對空蕩蕩的座位，班導師王老師被迫在第一節課召開緊急班會，但大家心裡都知道，兇手不只一個人...",
                specialVotes: [
                    { label: "😶 檢討班級冷漠文化", value: "班級冷漠文化" }
                ],
                endings: {
                    "阿傑": {
                        title: "結局 A：抓出壞蘋果 (Normal Ending)",
                        type: "neutral",
                        description: "在幾位同學的指證下，阿傑被認定為罪魁禍首，記了大過並被要求在全校面前公開道歉。霸凌行為看似停止了，但班上的氣氛變得更加詭異且充滿防備。大家學會了「不要做得太明顯」，霸凌轉入了更私密的地下群組。每個人都害怕成為下一個阿傑，或是下一個小雨，卻沒有人真正學會什麼是「尊重」。",
                        image: "ending_punish.jpg"
                    },
                    "小雨": {
                        title: "結局 B：檢討受害者 (Bad Ending)",
                        type: "bad",
                        description: "討論的風向逐漸走偏，變成了「小雨自己也太開不起玩笑」、「她如果不那麼孤僻、合群一點就好了」。最終小雨不堪壓力轉學了，班級恢復了往日的吵鬧與歡笑，彷彿她從未來過。但那種「排擠異己」的潛規則，已經深深烙印在每個人的心裡，成為這群孩子長大後待人處事的扭曲準則。",
                        image: "ending_victim_blame.jpg"
                    },
                    "班級冷漠文化": {
                        title: "結局 C：打破沉默 (True Ending)",
                        type: "good",
                        description: "你們痛定思痛，承認阿傑只是點燃火苗的人，真正讓火燒成森林大火的，是每一個選擇沈默、甚至跟著起鬨的旁觀者。班級共同制定了「反霸凌公約」，約定在下次看到不公義時，不再當沈默的共犯。小雨雖然最後還是選擇轉學重新開始，但她在離開前收到了一疊寫滿全班道歉與祝福的卡片，那天的陽光終於照進了這間教室。",
                        image: "ending_solidarity.jpg"
                    }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 360, type: "discussion", description: "還原現場：昨天放學後的廁所，究竟發生了什麼事？那桶水是誰潑的？" },
                            { name: "下午", duration: 360, type: "discussion", description: "深層動機：為什麼長達一個月的時間，沒有任何一個人願意站出來阻止？" },
                            { name: "傍晚", duration: 200, type: "voting", description: "表態：這場悲劇的責任歸屬，我們該如何定義？" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "小敏",
                        portrait: "char_bullying_rain.jpg",
                        role: "受害者好友",
                        background: "你是小雨剛轉來時，唯一願意跟她說話的人。你們曾經一起在操場邊吃午餐，聽她講家鄉的故事。但隨著霸凌加劇，你開始害怕跟她走得太近會被牽連，於是你慢慢疏遠了她。",
                        secret: "其實你心裡充滿了濃烈的愧疚感，甚至比霸凌者更難受。上週阿傑在班級群組發起「全班最討厭的人」匿名投票時，你為了不讓自己顯得「不合群」，也為了確認自己沒有被討厭，你顫抖著手，跟著大家投給了小雨。你最害怕的，其實是如果伸出援手，下一個被全班孤立的就是你自己。",
                        clues: {
                            "早晨_1": "昨天放學我去上廁所，聽到最後一間隔間傳來巨大的水聲，接著是小雨的尖叫聲和一群人的嘲笑聲。我認得那個帶頭笑的聲音是阿傑，還有幾個跟班。當時我嚇得躲在隔壁間，摀住嘴巴不敢發出一點聲音，直到他們離開...",
                            "下午_1": "其實三天前，小雨有傳 LINE 給我，問我：『我是不是做錯了什麼？為什麼大家都要這樣對我？』我看著那條訊息跳出來，手指懸在螢幕上很久，最後還是選擇了已讀不回。因為那時候，阿傑正站在我座位後面，探頭看我在跟誰聊天。"
                        }
                    },
                    {
                        name: "阿傑",
                        portrait: "char_bullying_jay.jpg",
                        role: "帶頭者",
                        background: "班上的風雲人物，體育好、說話幽默，總是能逗得大家哈哈大笑。你享受成為焦點的感覺，覺得自己只是在「活絡班級氣氛」，那些玩笑無傷大雅。",
                        secret: "事實上，你內心深處非常自卑且嫉妒小雨。上次數學段考，那個連國語都講不標準的鄉下女生竟然拿了滿分，而你不及格被老師拿來比較。你發現只要帶頭嘲笑她的口音和穿著，大家就會跟著你笑，那種掌控全班情緒的快感，能讓你忘記成績不如人的焦慮。",
                        clues: {
                            "早晨_1": "拜託喔，昨天在廁所大家都在笑啊，又不是只有我！而且黑板上那個畫豬的圖，旁邊又沒寫名字，是她自己要對號入座覺得在畫她吧？這也能怪我？",
                            "下午_1": "好啦，我承認我有傳那個「小雨病毒」的迷因圖到群組，但我只是轉發耶！那張圖是隔壁班傳過來的，我覺得好笑就轉發一下而已。做圖的人又不是我，為什麼現在出事了全都怪到我頭上？"
                        }
                    },
                    {
                        name: "王老師",
                        portrait: "char_bullying_teacher.jpg",
                        role: "班導師",
                        background: "這學期剛接手這個被稱為「全校最難管」的班級，每天被行政工作壓得喘不過氣，只想著平安度過這學期，不想惹事生非。",
                        secret: "其實你早就發現班級氣氛不對勁了。好幾次走進教室，空氣突然安靜，小雨眼眶紅紅的低著頭，班級日誌也有風紀股長隱晦的紀錄。但你選擇告訴自己「那只是小孩子在玩鬧」，因為處理霸凌太麻煩了，要通報學校、要面對恐龍家長，你真的太累了，選擇了睜一隻眼閉一隻眼。",
                        clues: {
                            "早晨_1": "我在翻閱過去一個月的班級日誌時，發現有好幾次風紀股長用鉛筆寫了「有人把小雨的課本丟到垃圾桶」，但我當時覺得這可能是他們在玩，就把那些紀錄劃掉，沒有往上通報。",
                            "下午_1": "剛剛小雨的媽媽傳來了小雨的手機對話紀錄截圖...我看了手都在抖。這不是單一事件，而是一個長達一個月、有組織的集體網路霸凌群組。裡面甚至有我平常認為很乖、成績很好的學生，也在裡面跟著罵『滾回鄉下』。"
                        }
                    }
                ],
                questions: ["「只是開玩笑」和「霸凌」的界線在哪裡？", "當你看見霸凌卻選擇沈默，算不算是一種暴力？"]
            },
            {
                id: "teen_3_outing",
                title: "被公開的秘密",
                description: "那是只發給「摯友」的綠色圈圈限動，卻在一夜之間傳遍全校。當隱私被當作流量，這是八卦還是暴力？",
                duration: "25分鐘",
                days: 1,
                difficulty: "入門",
                background: "週一早晨，班級 LINE 群組突然炸鍋。一張阿凱參加遊行、披著彩虹旗的截圖被瘋狂轉發。問題是，那原本是阿凱 IG 上鎖、僅限 3 位摯友可見的限時動態。現在，阿凱站在教室門口，不敢走進去...",
                specialVotes: [
                    { label: "🌈 建立數位界線與尊重", value: "尊重隱私" }
                ],
                endings: {
                    "小琳": {
                        title: "結局 A：流量的代價 (Normal Ending)",
                        type: "neutral",
                        description: "雖然小琳道歉了，但她堅持「我又沒說謊，這是事實，網路上本來就沒有隱私」。阿凱受到了傷害，關閉了所有社群帳號，變得更加封閉。",
                        image: "ending_gossip.jpg"
                    },
                    "尊重隱私": {
                        title: "結局 B：擁抱多元 (True Ending)",
                        type: "good",
                        description: "班級經過激辯，意識到「強制出櫃」即使內容是真實的，也是一種嚴重的暴力。大家約定不再轉發，並承諾尊重每個人的步調。阿凱在班長的陪伴下，終於走進了教室。",
                        image: "ending_rainbow.jpg"
                    }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 300, type: "discussion", description: "那個綠色圈圈是誰截的圖？" },
                            { name: "下午", duration: 300, type: "discussion", description: "「我只是轉發」有錯嗎？" },
                            { name: "傍晚", duration: 180, type: "voting", description: "誰該為這場風暴負責？" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "阿凱",
                        portrait: "char_outing_kai.jpg",
                        role: "當事人",
                        background: "班上安靜的男生，有個鎖起來的小帳，那是你唯一的避風港。",
                        secret: "你來自傳統家庭，如果這張截圖傳到你爸媽眼裡，後果不堪設想。你現在感到赤裸、憤怒，且極度恐慌。",
                        clues: {
                            "早晨_1": "我的摯友名單只有三個人，截圖一定就是從他們之中流出去的！我把他們當最好的朋友...",
                            "下午_1": "這不是誠不誠實的問題！我有權利決定什麼時候、跟誰說這件事。現在全毀了。"
                        }
                    },
                    {
                        name: "小琳",
                        portrait: "char_outing_lin.jpg",
                        role: "截圖者",
                        background: "班上的情報中心，經營一個兩千人追蹤的網美帳號，覺得「分享」是網路世代的本能。",
                        secret: "其實是那天跟另一個朋友借手機看照片時，你順手截圖的。你覺得這張照片很酷、很勁爆，大家一定會瘋狂按讚。",
                        clues: {
                            "早晨_1": "哎唷，我只是覺得大家有權利知道真相啊。而且他也沒在照片上寫「禁止轉載」嘛。",
                            "下午_1": "你們看，這篇貼文觸及率超高耶！大家都在討論他，他應該感謝我幫他紅了吧？"
                        }
                    },
                    {
                        name: "班長",
                        portrait: "char_outing_leader.jpg",
                        role: "協調者",
                        background: "責任感強，想維持班級秩序，但常常不知道界線在哪。",
                        secret: "其實國中時你也曾跟著大家嘲笑過陰柔氣質的男生，那份愧疚感讓你現在特別想彌補，但又怕公親變事主。",
                        clues: {
                            "早晨_1": "老師要我調查這件事，但我看阿凱的臉色都發白了...這已經不是一般的惡作劇了。",
                            "下午_1": "把別人的隱私當作八卦話題，這跟拿刀刺人有什麼兩樣？我們不能再當旁觀者了。"
                        }
                    }
                ],
                questions: ["如果內容是「事實」，公開它還算是一種傷害嗎？"]
            }
        ],
        4: [
            {
                id: "teen_4_photo",
                title: "鏡頭下的秘密",
                description: "原本是用來存檔社團活動紀錄的雲端硬碟，卻在深夜突然彈出了一個更新通知。有人上傳了一個名為「隱藏福利」的資料夾，裡面不是風景照，而是女社員們在更衣室、休息區毫無防備的身影。當信任的鏡頭變成了偷窺的眼睛，這不僅是隱私的喪失，更是一場關於「兄弟義氣」與「基本人權」的靈魂拷問。",
                duration: "30分鐘",
                days: 1,
                difficulty: "入門",
                background: "學校的攝影社一直是校內的金字招牌，社長大明帶領社團拿下了全國比賽冠軍，社員們感情好得像一家人——至少表面上是這樣。直到昨晚，一個匿名帳號在學校的黑特版（Hate版）發文：「攝影社表面光鮮亮麗，私底下卻拿社員的私密照當福利？」雖然貼文在十分鐘內就被檢舉下架，但恐懼已經像病毒一樣蔓延。雲端硬碟裡的那個資料夾雖然被緊急刪除，但大家都看見了。今天放學後，社長大明將核心幹部與相關人員留在社辦，試圖在教官與家長介入之前，「內部解決」這場風暴。",
                specialVotes: [
                    { label: "⚖️ 尋求學校正式管道", value: "偷拍者" }
                ],
                endings: {
                    "大明": {
                        title: "結局 A：沉默的螺旋 (Bad Ending)",
                        type: "bad",
                        description: "在社長的情緒勒索與保證下，你們選擇了相信這只是「誤傳」或「駭客入侵」。大明迅速清空了所有數位足跡，偷拍者沒有受到任何懲罰，甚至還在背後嘲笑受害者「大驚小怪」。三個月後，那些以為被刪除的照片，開始流傳在付費的色情論壇上。受害者的夢魘沒有結束，而是才剛剛開始。",
                        image: "ending_secret.jpg"
                    },
                    "偷拍者": {
                        title: "結局 B：曝光的勇氣 (Good Ending)",
                        type: "good",
                        description: "在小華拿出關鍵證據與輔導老師的堅持下，偷拍者——也就是副社長，終於無話可說被送交性平會與警方處理。雖然攝影社因此停社整頓，大明也因此記過，但學校藉此機會推動了全校性的「數位身體隱私權」教育，讓大家明白：不經過同意的拍攝與散布，就是一種暴力。受害者終於能安心地走在校園裡。",
                        image: "ending_justice.jpg"
                    }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 360, type: "discussion", description: "雲端裡的「福利區」：是誰有權限上傳這些照片？照片裡的視角隱藏著什麼秘密？" },
                            { name: "下午", duration: 360, type: "discussion", description: "義氣還是共犯：當社長試圖「河蟹」這件事時，我們該保護社團的名聲，還是保護受害者的靈魂？" },
                            { name: "傍晚", duration: 200, type: "voting", description: "關鍵決策：這是一場為了「正義」的投票，是私下和解，還是通報學校？" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "小美",
                        portrait: "char_photo_mei.jpg",
                        role: "受害者",
                        background: "你是這學期剛加入攝影社的高一新生，熱愛攝影，原本以為這裡是可以揮灑熱情的地方。那個「福利」資料夾出現時，你點開了第一張圖，發現那是你在社辦後方臨時更衣室換衣服的背影，那一瞬間，你的血液都凍結了。",
                        secret: "其實你已經收到匿名私訊騷擾好幾天了。對方用一個空白頭貼的帳號，傳了你更衣的局部截圖給你，威脅你：「學妹身材不錯喔，如果不想要這張照片傳遍全校，今晚來器材室找我。」你不敢說出來，因為你聽到有學長在背後議論：「誰叫她平常穿那麼短，根本是引誘犯罪。」這些話讓你深陷自我懷疑，不敢求救。",
                        clues: {
                            "早晨_1": "我鼓起勇氣仔細看了那幾張照片...拍攝的角度非常低，而且畫面邊緣有黑影，很像是把小型攝影機藏在包包或是架子縫隙裡偷拍的。其中幾張照片的時間點是寒訓那幾天，那時候社辦只有幹部和我們幾個負責打掃的新生在場！",
                            "下午_1": "就在剛剛，那個匿名帳號又傳訊息給我了，他說：『妳以為社長會幫妳嗎？別傻了。如果妳敢把事情鬧大，我就把影片發到外面的論壇去，讓妳紅一輩子。』我真的好害怕，我只是想學攝影，為什麼會變成這樣？"
                        }
                    },
                    {
                        name: "大明",
                        portrait: "char_photo_ming.jpg",
                        role: "社長",
                        background: "你是校園風雲人物，將攝影社從倒社邊緣救回來，經營得有聲有色。對你來說，社團就像你的孩子，也是你申請大學最重要的履歷。你不允許任何醜聞毀了這個你一手建立的王國。",
                        secret: "其實你一早就知道偷拍者是誰了——是副社長，那個跟你一起打拼三年的好兄弟。昨天深夜他哭著打給你求救，說他只是「一時好奇」、「壓力大」。你現在腦子裡只有一個念頭：先把照片刪掉、把紀錄洗掉，只要沒有證據，學校就不能拿你們怎麼樣。你不斷告訴自己，你這是在展現「領導力」，是為了保護大家的努力不被抹殺。",
                        clues: {
                            "早晨_1": "哎呀，大家先冷靜一點！這可能只是有人誤傳啦，或者是網路上隨便抓的圖，被駭客惡作劇放進來的。我們是一個大家庭，不要互相猜忌。我們先把資料夾關閉，不要讓外人看到，這件事我們自己內部調查就好，不用驚動老師。",
                            "下午_1": "你們知道如果這件事報給學校，後果是什麼嗎？攝影社一定會被強制廢社，我們準備了一整年的成發會也就泡湯了！大家付出的心血，難道要為了「這一點小事」全毀嗎？給副社長一個機會改過自新不好嗎？"
                        }
                    },
                    {
                        name: "小華",
                        portrait: "char_photo_hua.jpg",
                        role: "社員",
                        background: "你是社團裡的器材長，平常話不多，默默做事。你性格正直，早就看不慣社團裡某些學長那種「物化女性」、把女生當花瓶的玩笑話，但為了合群一直忍耐著。",
                        secret: "你是雲端硬碟的共同管理員之一。昨晚事情爆發後，你立刻登入後台查看了「活動紀錄」（Log）。你發現上傳那些照片的 IP 位置，和副社長平常上傳成發檔案的 IP 完全一致！而且，就在班會開始前五分鐘，你親眼看到大明正在電腦前，瘋狂地點擊「永久刪除」和「清除存取日誌」。",
                        clues: {
                            "早晨_1": "這些照片的拍攝時間我都對過了，全部都是在社團活動的午休時間，那時候器材室是上鎖的，只有擁有鑰匙的社長和副社長可以自由進出。這絕對不是駭客，是熟人做的。",
                            "下午_1": "社長，你不要再演了。你剛剛為什麼要把雲端硬碟的「操作紀錄」清空？如果心裡沒鬼，為什麼要急著滅證？你現在是在保護社團，還是在保護罪犯？你知不知道這是在幫兇？"
                        }
                    },
                    {
                        name: "輔導老師",
                        portrait: "char_photo_counselor.jpg",
                        role: "協助者",
                        background: "學校新來的輔導老師，對於性平事件有極高的敏感度。你接獲匿名檢舉介入調查，但你發現學生們似乎被下了「封口令」，都不敢多說。",
                        secret: "這已經不是違反校規那麼簡單了，這是觸犯了刑法《妨害秘密罪》與《散布猥褻物品罪》。你知道學校高層可能會因為怕影響校譽而想息事寧人，但你的職業道德告訴你，絕不能讓學生再次受傷。你口袋裡放著性平通報的表單，只要有一個學生願意指證，你就會啟動流程。",
                        clues: {
                            "早晨_1": "同學們，請看著我的眼睛。這不是什麼「惡作劇」，這涉及了嚴重的刑事犯罪。持有、散布甚至拍攝他人私密部位，都是違法的。無論是誰威脅你們，法律都會保護受害者，而不是加害者。",
                            "下午_1": "大明，你口中的「大局」是什麼？在這個房間裡，受害者的意願和安全才是最重要的。如果你們今天選擇隱瞞，就是在告訴受害者：『妳的痛苦比不上社團的名聲重要』。這種二度傷害，會成為她一輩子走不出來的陰影。你們真的承擔得起嗎？"
                        }
                    }
                ],
                questions: ["為了保護朋友而隱瞞犯罪，是義氣還是共犯？", "當你知道朋友犯罪時，大義滅親是一種背叛嗎？"]
            },
            {
                id: "teen_4_catfish",
                title: "假面騎士",
                description: "在虛擬的網路世界裡，那個每天對你噓寒問暖、長相甜美的「女友」，竟然是隔壁班男同學假扮的？這不僅是一場荒謬的惡作劇，更是一場關於信任、隱私與法律責任的殘酷遊戲。當「玩笑」越過了界線，誰能全身而退？",
                duration: "30分鐘",
                days: 1,
                difficulty: "入門",
                background: "個性內向的小剛最近在網路上交了一個名為「Angel」的女友，對方溫柔體貼，還常常傳來生活照。小剛深陷其中，甚至為了表達愛意，在對方慫恿下傳了自己的私密自拍照。然而，昨天他在學校走廊上，無意間看到隔壁班的小雅手機裡，竟然有跟「Angel」一模一樣的照片！他驚覺自己可能被騙了。消息傳開後，全校都在議論紛紛，這場網戀風暴即將席捲而來。",
                specialVotes: [
                    { label: "🚫 譴責盜圖與欺騙", value: "惡作劇者" }
                ],
                endings: {
                    "惡作劇者": {
                        title: "結局 A：玩笑開過頭 (Good Ending)",
                        type: "good",
                        description: "阿強終於承認這一切都只是他為了「好玩」而創立的假帳號。在老師的介入與法律的警示下，大家意識到盜圖、欺騙感情以及誘騙私密照，不僅嚴重違反道德，更可能構成刑法犯罪。阿強公開道歉並刪除了所有資料，雖然信任難以重建，但至少阻止了傷害擴大。",
                        image: "ending_reveal.jpg"
                    },
                    "小剛": {
                        title: "結局 B：受傷的信任 (Bad Ending)",
                        type: "bad",
                        description: "討論失焦，大家紛紛嘲笑小剛「太蠢才會被騙」、「癩蛤蟆想吃天鵝肉」。沒有人檢討盜圖者的惡意，甚至有人開始在群組轉發小剛的私密照。這場惡作劇演變成了嚴重的網路霸凌，小剛因此罹患了社交恐懼症，再也不敢相信任何人。",
                        image: "ending_mockery.jpg"
                    }
                },
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 360, type: "discussion", description: "虛擬的愛人：那個叫 Angel 的帳號，背後到底是誰？" },
                            { name: "下午", duration: 360, type: "discussion", description: "盜圖的代價：當玩笑變成了犯罪，誰該負責？" },
                            { name: "傍晚", duration: 180, type: "voting", description: "關鍵指認：誰是那隻躲在鍵盤後面的黑手？" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "小剛",
                        portrait: "char_catfish_gang.jpg",
                        role: "被騙者",
                        background: "你是班上不起眼的男生，從來沒有交過女朋友。直到一個月前，「Angel」主動加你好友，你們每晚通話（雖然她都說麥克風壞了只能打字），她是你生活的重心。",
                        secret: "你現在極度恐慌，因為上週「Angel」說想看你的身材，你一時沖動傳了一張只穿內褲的照片給她。現在你知道她是假的，你最怕的不是失戀，而是那張照片會不會明天就被貼在學校公佈欄上。",
                        clues: {
                            "早晨_1": "我覺得很奇怪，每次我說想開視訊，她就說她住在國外訊號不好，或者鏡頭壞了。但她傳給我的生活照背景，明明看起來就像是在我們學校附近的咖啡廳啊！",
                            "下午_1": "我剛剛鼓起勇氣去問隔壁班的小雅，她看到我手機裡的照片嚇了一大跳，說那張照片是她鎖起來的 IG 貼文，根本沒有公開過！"
                        }
                    },
                    {
                        name: "阿強",
                        portrait: "char_catfish_qiang.jpg",
                        role: "假扮者",
                        background: "你是班上的開心果，平常最喜歡惡作劇。你覺得小剛那種認真談戀愛的樣子很好笑，想說創個假帳號逗逗他，沒想到他真的上鉤了。",
                        secret: "就是你創立了「Angel」這個帳號。你利用小雅不公開的 IG 照片來打造這個虛擬美女。你原本只是想騙騙小剛的感情，看他出糗，但當你收到小剛的私密照時，你突然意識到事情好像鬧大了，現在你只想趕快把帳號刪掉裝沒事。",
                        clues: {
                            "早晨_1": "拜託，網路上本來就很多假人啊，玩遊戲都有人練女號了，交友軟體上有幾個假帳號有什麼好大驚小怪的？是小剛自己太單純好騙吧。",
                            "下午_1": "我...我只是隨便在網路上抓圖而已，誰知道那是小雅的照片啊？而且我也沒騙錢啊，只是聊聊天而已，這不犯法吧？"
                        }
                    },
                    {
                        name: "小雅",
                        portrait: "char_catfish_ya.jpg",
                        role: "被盜圖者",
                        background: "你是隔壁班的氣質女生，平常很注重隱私，IG 帳號都是設不公開。最近總覺得有人在背後對你指指點點，讓你很不舒服。",
                        secret: "今天早上有陌生的男同學跑來問我是不是在跟小剛交往，我簡直莫名其妙！後來看到小剛手機裡的照片，那是我跟家人去吃飯的私密照，到底是誰偷了我的照片？我覺得好噁心，好像被人監視了一樣。",
                        clues: {
                            "早晨_1": "我根本不認識小剛，連一句話都沒說過！我的照片只會分享給熟識的朋友看，我的追蹤名單裡一定有內鬼！",
                            "下午_1": "盜用我的照片去騙人，這已經嚴重侵犯我的肖像權了！而且如果有不明真相的人以為我真的在做這種事，我的名聲要怎麼辦？"
                        }
                    },
                    {
                        name: "老師",
                        portrait: "char_catfish_teacher.jpg",
                        role: "調解者",
                        background: "你是這個班級的導師，也是學校性平委員會的成員。你接獲通報後，立刻意識到這不僅僅是同學間的糾紛。",
                        secret: "這起事件涉及多重法律問題：盜用照片涉及《肖像權》侵害與《個資法》；假冒身分騙取私密照可能涉及《刑法》詐欺罪與兒少性剝削防制條例。你必須讓學生明白，網路上的行為在現實中是要負全責的。",
                        clues: {
                            "早晨_1": "同學們，這不是好玩。在網路上假冒他人身分，如果造成對方損害，是可以提告的。更何況如果涉及誘騙私密影像，那就是公訴罪，警察會直接介入調查。",
                            "下午_1": "網路傷害是真實的。小剛的信任被踐踏，小雅的隱私被侵犯。躲在螢幕後面的人，不要以為刪除帳號就抓不到你，數位足跡凡走過必留下痕跡。"
                        }
                    }
                ],
                questions: ["在網路上假扮他人有什麼法律責任？", "當「玩笑」造成他人心理創傷時，還能稱之為玩笑嗎？"]
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
                        portrait: "char_uniform_ting.jpg",
                        role: "抗議學生",
                        secret: "主任說「女生穿這樣會引人犯罪」。",
                        clues: { "早晨_1": "我長高了所以裙子變短。", "下午_1": "男生穿短褲就是陽光？" }
                    },
                    {
                        name: "林主任",
                        portrait: "char_uniform_director.jpg",
                        role: "訓導主任",
                        secret: "覺得規定過時但怕家長。",
                        clues: { "早晨_1": "為了保護女生。", "下午_1": "開放會亂。" }
                    },
                    {
                        name: "阿強",
                        portrait: "char_uniform_qiang.jpg",
                        role: "男同學",
                        secret: "發現自己有性別特權。",
                        clues: { "早晨_1": "我覺得她穿很普通。", "下午_1": "應該教男生尊重。" }
                    },
                    {
                        name: "學生會長",
                        portrait: "char_uniform_president.jpg",
                        role: "改革者",
                        secret: "處分可能違法。",
                        clues: { "早晨_1": "教育部有規定。", "下午_1": "討論身體自主權。" }
                    },
                    {
                        name: "家長會長",
                        portrait: "char_uniform_parent.jpg",
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
                    { name: "小慧", portrait: "char_deepfake_hui.jpg", role: "受害者", secret: "覺得被玷污。", clues: { "早晨_1": "我沒穿那件衣服。", "下午_1": "這是盜用身分。" } },
                    { name: "阿光", portrait: "char_deepfake_guang.jpg", role: "製作者", secret: "想試新App。", clues: { "早晨_1": "AI 很強。", "下午_1": "只是合成而已。" } },
                    { name: "小明", portrait: "char_deepfake_ming.jpg", role: "轉發者", secret: "轉到別班群組。", clues: { "早晨_1": "大家都在傳。", "下午_1": "以為是真的。" } },
                    { name: "老師", portrait: "char_deepfake_teacher.jpg", role: "調查者", secret: "涉及散播猥褻物品。", clues: { "早晨_1": "造成極大傷害。", "下午_1": "製作有刑責。" } },
                    { name: "科技小老師", portrait: "char_deepfake_tech.jpg", role: "鑑識者", secret: "看出破綻。", clues: { "早晨_1": "邊緣模糊。", "下午_1": "查手機就知道。" } }
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
                    { name: "小櫻", portrait: "char_game_sakura.jpg", role: "受害者", secret: "有錄音檔。", clues: { "早晨_1": "玩輸出被罵。", "下午_1": "這是錄音檔。" } },
                    { name: "阿威", portrait: "char_game_wei.jpg", role: "會長", secret: "騷擾者是主力。", clues: { "早晨_1": "遊戲圈講話衝。", "下午_1": "踢了會輸公會戰。" } },
                    { name: "小杰", portrait: "char_game_jie.jpg", role: "旁觀玩家", secret: "跟著笑很後悔。", clues: { "早晨_1": "氣氛很嗨。", "下午_1": "真的很過分。" } },
                    { name: "版主", portrait: "char_game_admin.jpg", role: "管理者", secret: "很少執行規範。", clues: { "早晨_1": "可以封鎖帳號。", "下午_1": "不能成為法外之地。" } },
                    { name: "騷擾者", portrait: "char_game_harasser.jpg", role: "加害者", secret: "現實很自卑。", clues: { "早晨_1": "幹嘛認真？", "下午_1": "是她自己開麥。" } },
                    { name: "老玩家", portrait: "char_game_veteran.jpg", role: "觀察者", secret: "以前也遇過。", clues: { "早晨_1": "到處都有。", "下午_1": "該改變文化了。" } }
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
                    { name: "小編", portrait: "char_anon_editor.jpg", role: "管理者", secret: "為了流量放行。", clues: { "早晨_1": "看不完投稿。", "下午_1": "越吵流量越高。" } },
                    { name: "女權隊長", portrait: "char_anon_feminist.jpg", role: "抗議者", secret: "也投稿罵男生。", clues: { "早晨_1": "這是性騷擾。", "下午_1": "不能容忍厭女。" } },
                    { name: "酸民代表", portrait: "char_anon_hater.jpg", role: "投稿者", secret: "被女生拒絕。", clues: { "早晨_1": "言論自由。", "下午_1": "我說的是事實。" } },
                    { name: "和事佬", portrait: "char_anon_peace.jpg", role: "調解者", secret: "知道是誰。", clues: { "早晨_1": "不要激動。", "下午_1": "大家誤會了。" } },
                    { name: "吃瓜群眾", portrait: "char_anon_watcher.jpg", role: "旁觀者", secret: "每篇都按讚。", clues: { "早晨_1": "好精彩。", "下午_1": "按讚不犯法。" } },
                    { name: "資訊社", portrait: "char_anon_it.jpg", role: "技術支援", secret: "來自同IP。", clues: { "早晨_1": "像是分身。", "下午_1": "可以查學校WiFi。" } }
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
                    { name: "林雅婷", portrait: "char_work_lin.jpg", role: "檢舉人", secret: "人資暗示閉嘴。", clues: { "早晨_1": "開會时不舒服接觸。", "下午_1": "錄音：大局為重。" } },
                    { name: "王大為", portrait: "char_work_wang.jpg", role: "嫌疑人", secret: "公司會保你。", clues: { "早晨_1": "只是鼓勵。", "下午_1": "老闆看重我。" } },
                    { name: "人資總監", portrait: "char_work_hr.jpg", role: "公司代表", secret: "高層施壓。", clues: { "早晨_1": "她壓力大。", "下午_1": "影響股價。" } }
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
                    { name: "小安", portrait: "char_smart_ann.jpg", role: "妻子", secret: "門鎖紀錄被監控。", clues: { "早晨_1": "他知道我幾點回家。", "下午_1": "手機發燙。" } },
                    { name: "丈夫", portrait: "char_smart_husband.jpg", role: "控制者", secret: "裝了定位App。", clues: { "早晨_1": "關心安全。", "下午_1": "智慧家電有紀錄。" } },
                    { name: "閨蜜", portrait: "char_smart_friend.jpg", role: "協助者", secret: "對話被竊聽。", clues: { "早晨_1": "他知道我們喝咖啡。", "下午_1": "數位監獄。" } }
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
                    { name: "Alex", portrait: "char_lab_alex.jpg", role: "受害者", secret: "試圖修正演算法。", clues: { "上午_1": "主管叫錯名字。", "下午_2": "影片語氣像 Sam。" } },
                    { name: "Chris", portrait: "char_lab_chris.jpg", role: "經理", secret: "包庇 Sam。", clues: { "上午_1": "Alex 影響士氣。", "下午_2": "照片是假的。" } },
                    { name: "Sam", portrait: "char_lab_sam.jpg", role: "工程師", secret: "私用數據。", clues: { "上午_1": "代碼註解。", "上午_2": "深夜上傳數據。" } },
                    { name: "Taylor", portrait: "char_lab_taylor.jpg", role: "旁觀者", secret: "有 Log 備份。", clues: { "下午_1": "IP 來自內部。", "下午_2": "我有備份。" } }
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
                    { name: "張小惠", portrait: "char_domestic_hui.jpg", role: "受害者", secret: "沒錢不敢走。", clues: { "早晨_1": "他求我原諒。", "下午_1": "威脅帶走孩子。" } },
                    { name: "張建國", portrait: "char_domestic_husband.jpg", role: "丈夫", secret: "控制慾強。", clues: { "早晨_1": "她精神不穩。", "下午_1": "乖乖聽話就好。" } },
                    { name: "王社工", portrait: "char_domestic_worker.jpg", role: "協助者", secret: "經濟控制。", clues: { "早晨_1": "每個月都有意外。", "下午_1": "精神虐待。" } },
                    { name: "李鄰居", portrait: "char_domestic_neighbor.jpg", role: "旁觀者", secret: "以前覺得是家務事。", clues: { "早晨_1": "聽到大吼。", "下午_1": "穿長袖遮傷。" } }
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
                    { name: "小美", portrait: "char_party_mei.jpg", role: "控訴者", secret: "自責喝醉。", clues: { "上午_1": "想回家。", "下午_1": "沒印象點頭。" } },
                    { name: "阿傑", portrait: "char_party_jay.jpg", role: "被告", secret: "沒說不就是好。", clues: { "上午_1": "沒推開。", "下午_1": "跟我去房間。" } },
                    { name: "小華", portrait: "char_party_hua.jpg", role: "目擊者", secret: "像屍體。", clues: { "上午_1": "站不穩。", "下午_1": "撿屍。" } },
                    { name: "諮商師", portrait: "char_party_therapist.jpg", role: "專家", secret: "不是個案。", clues: { "上午_1": "積極同意。", "下午_1": "無法同意。" } },
                    { name: "會長", portrait: "char_party_president.jpg", role: "學生代表", secret: "學校想壓。", clues: { "上午_1": "怕影響校譽。", "下午_1": "性平教育。" } }
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
                    { name: "受害者", portrait: "char_dating_victim.jpg", role: "使用者", secret: "只開了一下。", clues: { "上午_1": "你家燈亮了。", "下午_1": "預設開啟。" } },
                    { name: "跟蹤狂", portrait: "char_dating_stalker.jpg", role: "加害者", secret: "三角定位。", clues: { "上午_1": "100公尺內。", "下午_1": "系統告訴我的。" } },
                    { name: "工程師", portrait: "char_dating_dev.jpg", role: "開發者", secret: "知道風險。", clues: { "上午_1": "配對率高。", "下午_1": "精確度太高。" } },
                    { name: "法務", portrait: "char_dating_legal.jpg", role: "公司代表", secret: "條款免責。", clues: { "上午_1": "自負風險。", "下午_1": "只是平台。" } },
                    { name: "警官", portrait: "char_dating_police.jpg", role: "調查員", secret: "新興犯罪。", clues: { "上午_1": "規範不足。", "下午_1": "設計問題。" } }
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
                    { name: "陳曉雯", portrait: "char_footprint_wen.jpg", role: "受害者", secret: "朋友也傳。", clues: { "上午_1": "不敢出門。", "下午_1": "求載點。" } },
                    { name: "前男友", portrait: "char_footprint_ex.jpg", role: "始作俑者", secret: "怕坐牢。", clues: { "上午_1": "她自己愛拍。", "下午_1": "我都刪了。" } },
                    { name: "論壇站主", portrait: "char_footprint_admin.jpg", role: "平台", secret: "賺廣告費。", clues: { "上午_1": "免責聲明。", "下午_1": "流量。" } },
                    { name: "網友A", portrait: "char_footprint_netizen.jpg", role: "鍵盤俠", secret: "沒什麼。", clues: { "上午_1": "不差我。", "下午_1": "如果是我家人。" } },
                    { name: "警察", portrait: "char_footprint_police.jpg", role: "調查員", secret: "伺服器在國外。", clues: { "上午_1": "猥褻物品。", "下午_1": "抓不勝抓。" } },
                    { name: "律師", portrait: "char_footprint_lawyer.jpg", role: "協助者", secret: "推動修法。", clues: { "上午_1": "性暴力。", "下午_1": "告平台。" } }
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
                    { name: "受害者", portrait: "char_meta_victim.jpg", role: "玩家", secret: "觸覺回饋。", clues: { "早晨_1": "圍住我。", "下午_1": "像真實一樣。" } },
                    { name: "加害者", portrait: "char_meta_attacker.jpg", role: "玩家", secret: "只是玩。", clues: { "早晨_1": "沒碰真人。", "下午_1": "遊戲而已。" } },
                    { name: "平台管理員", portrait: "char_meta_admin.jpg", role: "官方", secret: "設計疏失。", clues: { "早晨_1": "有靜音。", "下午_1": "用戶互動。" } },
                    { name: "心理學家", portrait: "char_meta_psych.jpg", role: "專家", secret: "騙過大腦。", clues: { "早晨_1": "沉浸感。", "下午_1": "PTSD。" } },
                    { name: "律師", portrait: "char_meta_lawyer.jpg", role: "法律人", secret: "挑戰法律。", clues: { "早晨_1": "公然侮辱。", "下午_1": "數位身體權。" } },
                    { name: "目擊者", portrait: "char_meta_witness.jpg", role: "路人", secret: "有錄影。", clues: { "早晨_1": "很暴力。", "下午_1": "怕下一個是我。" } }
                ],
                questions: ["如果身體沒有受傷，心理的創傷算犯罪嗎？"]
            }
        ]
    }
};