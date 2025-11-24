// scripts-data.js

export const SCRIPTS = {
    teen: {
        3: [
            {
                id: "teen_3_bullying",
                title: "校園的聲音",
                description: "某中學發生言語霸凌事件，導致女學生轉學。探討旁觀者責任與語言暴力。",
                duration: "20分鐘",
                days: 1,
                difficulty: "入門",
                background: "某中學發生了一起女學生遭受言語霸凌的事件，導致她轉學。學校決定召開會議討論此事。",
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 300, type: "discussion", description: "自由討論時間，分享你的觀察和想法" },
                            { name: "下午", duration: 300, type: "discussion", description: "深入討論事件始末" },
                            { name: "傍晚", duration: 180, type: "voting", description: "投票環節" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "小雨",
                        role: "受害者好友",
                        background: "你是轉學女生的好友，目睹了整個霸凌過程。",
                        secret: "你曾經想阻止但害怕自己也成為目標，所以選擇沉默。",
                        goal: "反思：旁觀者的責任是什麼？沉默是否等於縱容？",
                        portrait: "teen_3_xiaoyu.jpg"
                    },
                    {
                        name: "阿傑",
                        role: "班上同學",
                        background: "你是班上的活躍分子，和大家關係都不錯。",
                        secret: "你曾經無意中傳播了關於受害者的不實謠言，但你不知道這些話會造成這麼大的傷害。",
                        goal: "反思：玩笑和傷害的界線在哪？語言暴力的影響有多深？",
                        portrait: "teen_3_ajie.jpg"
                    },
                    {
                        name: "王老師",
                        role: "班導師",
                        background: "你是這個班級的導師，事發後才知道霸凌情況。",
                        secret: "其實有學生曾向你暗示過班上氛圍不好，但你當時沒有重視。",
                        goal: "反思：教育者如何及早發現並介入霸凌？制度該如何改善？",
                        portrait: "teen_3_teacher.jpg"
                    }
                ],
                questions: [
                    "為什麼旁觀者選擇沉默？如何鼓勵學生站出來？",
                    "言語霸凌為何常被忽視？它的傷害性在哪？",
                    "學校和老師應該採取什麼措施預防霸凌？",
                    "我們每個人可以做些什麼來創造更友善的環境？"
                ],
                villain: "霸凌的施暴者（NPC）- 班上的小團體領袖，因嫉妒而散播謠言"
            },
            {
                id: "teen_3_consent",
                title: "那些不能說的秘密",
                description: "校園情侶間的感情糾紛，涉及情感操控與界線議題。",
                duration: "25分鐘",
                days: 1,
                difficulty: "入門",
                music: "teen_serious",
                finalImage: "teen_3_consent_final.jpg",
                background: "高中情侶阿明和小芳分手後，阿明在社群媒體上散播對小芳不利的言論，甚至暗示她「不檢點」。輔導老師介入調查。",
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 360, type: "discussion", description: "了解分手經過" },
                            { name: "下午", duration: 360, type: "discussion", description: "討論情感關係的界線" },
                            { name: "傍晚", duration: 180, type: "voting", description: "投票環節" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "小芳",
                        role: "當事人",
                        background: "你和阿明交往一年後分手，但他開始在網路上抹黑你。",
                        secret: "阿明曾經逼迫你做你不願意的事，你因為害怕和不好意思而沒有告訴任何人。",
                        goal: "反思：感情中的界線在哪？如何辨識情感操控？",
                        portrait: "teen_3_xiaofang.jpg"
                    },
                    {
                        name: "阿明",
                        role: "當事人",
                        background: "你是小芳的前男友，因為分手很不甘心。",
                        secret: "你認為「交往了就應該什麼都答應」，不理解為什麼小芳要分手。你覺得在網路發文沒什麼大不了。",
                        goal: "反思：尊重與佔有的差別？分手後如何好好道別？",
                        portrait: "teen_3_aming.jpg"
                    },
                    {
                        name: "輔導老師",
                        role: "學校輔導老師",
                        background: "你負責處理這起校園糾紛。",
                        secret: "你發現很多青少年不理解「同意」的概念，也不知道情感操控的警訊。",
                        goal: "反思：如何教育青少年建立健康的情感關係？",
                        portrait: "teen_3_counselor.jpg"
                    }
                ],
                questions: [
                    "交往中的「同意」是什麼意思？可以隨時改變心意嗎？",
                    "什麼是情感操控？如何辨識？",
                    "分手後散播不實言論算是霸凌嗎？",
                    "如何建立健康、平等的情感關係？"
                ],
                villain: "阿明的行為（情感操控與網路霸凌），以及社會對青少年感情教育的缺乏"
            }
        ],
        4: [
            {
                id: "teen_4_photo",
                title: "社團的秘密",
                description: "學校攝影社發生偷拍事件，女學生照片被未經同意拍攝傳播。探討肖像權與旁觀者責任。",
                duration: "25分鐘",
                days: 1,
                difficulty: "入門",
                music: "teen_serious",
                finalImage: "teen_4_photo_final.jpg",
                background: "學校攝影社發生了偷拍事件，有女學生的照片被未經同意地拍攝和傳播。",
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 360, type: "discussion", description: "了解事件經過" },
                            { name: "下午", duration: 360, type: "discussion", description: "深入討論責任歸屬" },
                            { name: "傍晚", duration: 180, type: "voting", description: "投票環節" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "小美",
                        role: "受害者",
                        background: "你發現自己的照片被人偷拍並在網路上流傳。",
                        secret: "你感到非常害怕和羞愧，不敢告訴家人，也擔心大家會怪你。",
                        goal: "反思：受害者為何常選擇隱忍？社會對受害者的二次傷害如何避免？",
                        portrait: "teen_4_xiaomei.jpg"
                    },
                    {
                        name: "大明",
                        role: "社團幹部",
                        background: "你是攝影社的幹部，負責管理社團活動。",
                        secret: "你知道是誰做的，但那個人是你的好友，你不知道該不該說出來。",
                        goal: "反思：友情和正義如何取捨？包庇是否也是一種傷害？",
                        portrait: "teen_4_daming.jpg"
                    },
                    {
                        name: "小華",
                        role: "社團成員",
                        background: "你是攝影社的普通成員，經常參與社團活動。",
                        secret: "你曾經看過偷拍者的相機裡有可疑照片，但當時沒想太多。",
                        goal: "反思：如何提高對不當行為的警覺性？發現問題時應該怎麼做？",
                        portrait: "teen_4_xiaohua.jpg"
                    },
                    {
                        name: "輔導老師",
                        role: "學校輔導老師",
                        background: "你是負責處理此事的輔導老師。",
                        secret: "你發現這類事件在校園中可能不只一起，但學校擔心名聲而不願深究。",
                        goal: "反思：學校如何平衡名聲和學生權益？完善的防範機制是什麼？",
                        portrait: "teen_4_teacher.jpg"
                    }
                ],
                questions: [
                    "未經同意拍攝他人照片為何是錯的？肖像權是什麼？",
                    "受害者為何常感到羞愧？我們該如何支持他們？",
                    "旁觀者發現可疑行為時，應該如何處理？",
                    "學校應該建立什麼樣的機制來預防和處理此類事件？"
                ],
                villain: "偷拍者（NPC）- 某位社團成員，因為扭曲的好奇心而偷拍"
            }
        ],
        5: [
            {
                id: "teen_5_uniform",
                title: "制服爭議",
                description: "學校因女學生違反服裝規定給予處分，引發性別雙重標準討論。",
                duration: "30分鐘",
                days: 1,
                difficulty: "進階",
                background: "學校因女學生違反服裝規定（裙子太短）而給予處分，引發學生對於性別雙重標準的討論。",
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 420, type: "discussion", description: "了解事件並分享看法" },
                            { name: "下午", duration: 420, type: "discussion", description: "深入探討性別平權議題" },
                            { name: "傍晚", duration: 180, type: "voting", description: "投票環節" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "小婷",
                        role: "被處分學生",
                        background: "你因為裙子長度被記警告，感到不公平。",
                        secret: "你的裙子其實符合規定長度，只是因為身材比較高挑顯得短。你覺得這是針對女生的外貌歧視。",
                        goal: "反思：服裝規定是否存在性別雙重標準？身體自主權的界線在哪？"
                    },
                    {
                        name: "阿強",
                        role: "班上男同學",
                        background: "你是班上的男同學，對這個處分有不同看法。",
                        secret: "你曾經違反服裝規定但沒被處罰過，開始意識到男女生確實被用不同標準對待。",
                        goal: "反思：男生如何理解並支持性別平權？特權的存在如何被察覺？"
                    },
                    {
                        name: "林主任",
                        role: "訓導主任",
                        background: "你是負責執行校規的訓導主任。",
                        secret: "你認為嚴格的服裝規定是為學生好，但也意識到某些規定可能確實過時了。",
                        goal: "反思：校規的目的是什麼？如何在管理和尊重之間取得平衡？"
                    },
                    {
                        name: "家長代表",
                        role: "學生家長",
                        background: "你是家長會代表，關心校園議題。",
                        secret: "你內心認為女生應該要「保護自己」，穿著保守一點，但你的女兒讓你開始反思這種想法。",
                        goal: "反思：'保護自己'是否在暗示受害者有責任？如何教育下一代？"
                    },
                    {
                        name: "學生會長",
                        role: "學生會會長",
                        background: "你是學生會長，想要推動校規改革。",
                        secret: "你正在收集各方意見，準備向校方提出修改服裝規定的建議書。",
                        goal: "反思：學生如何有效地參與校園民主？改變如何發生？"
                    }
                ],
                questions: [
                    "服裝規定是否對不同性別有不同標準？為什麼？",
                    "'保護自己'的說法是否在將責任歸咎於受害者？",
                    "如何在尊重傳統和追求進步之間取得平衡？",
                    "年輕人如何參與制度改革？對話和行動的策略是什麼？"
                ],
                villain: "過時的制度和刻板印象（非特定人物）"
            }
        ],
        6: [
            {
                id: "teen_6_game",
                title: "線上遊戲的陰影",
                description: "女學生在線上遊戲中遭受性別歧視和性騷擾。探討虛擬世界的真實傷害。",
                duration: "35分鐘",
                days: 1,
                difficulty: "進階",
                background: "某位女學生在線上遊戲中遭受性別歧視和性騷擾，導致她退出遊戲社群。",
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 480, type: "discussion", description: "了解事件經過" },
                            { name: "下午", duration: 480, type: "discussion", description: "討論網路文化與責任" },
                            { name: "傍晚", duration: 240, type: "voting", description: "投票環節" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "小櫻",
                        role: "受害玩家",
                        background: "你熱愛遊戲，但在遊戲中遭受性別歧視和騷擾。",
                        secret: "你曾經嘗試用男性帳號玩遊戲，發現待遇完全不同。你很難過遊戲世界也有性別歧視。",
                        goal: "反思：為何女性在遊戲社群中常被差別對待？虛擬世界的性騷擾一樣嚴重嗎？"
                    },
                    {
                        name: "阿威",
                        role: "遊戲公會會長",
                        background: "你是公會的會長，知道發生了不愉快的事。",
                        secret: "你曾聽到公會成員對女玩家開黃腔，但當時只是笑笑帶過，沒有制止。",
                        goal: "反思：沉默和起鬨有什麼差別？社群領袖的責任是什麼？"
                    },
                    {
                        name: "小杰",
                        role: "遊戲玩家",
                        background: "你是遊戲中的普通玩家。",
                        secret: "你曾經覺得某些玩笑很好笑，但現在開始思考這些玩笑可能傷害了誰。",
                        goal: "反思：什麼樣的玩笑會構成騷擾？界線在哪裡？"
                    },
                    {
                        name: "遊戲版主",
                        role: "論壇版主",
                        background: "你是遊戲論壇的版主，負責維持秩序。",
                        secret: "你收到過很多檢舉，但因為人手不足和不想惹麻煩，很多都草草結案。",
                        goal: "反思：平台方的責任是什麼？如何有效管理社群？"
                    },
                    {
                        name: "老玩家",
                        role: "資深玩家",
                        background: "你玩這個遊戲很多年了，見證了社群文化的變化。",
                        secret: "你以前也覺得遊戲世界就是可以亂講話的地方，但隨著年紀增長開始反思這種文化。",
                        goal: "反思：遊戲社群文化如何形成？老玩家如何帶領正向改變？"
                    },
                    {
                        name: "學校輔導老師",
                        role: "輔導老師",
                        background: "你是小櫻的輔導老師，她向你求助。",
                        secret: "你發現網路霸凌和性騷擾問題越來越嚴重，但不知道該如何幫助學生。",
                        goal: "反思：網路世界的傷害同樣真實嗎？如何教育學生保護自己和尊重他人？"
                    }
                ],
                questions: [
                    "為什麼網路上的性別歧視和現實一樣嚴重？",
                    "虛擬世界的言行是否需要負責？界線在哪？",
                    "如何建立更友善的遊戲社群文化？",
                    "平台、玩家、社會各自應該承擔什麼責任？"
                ],
                villain: "騷擾者（NPC）- 多位不特定的玩家，代表有問題的社群文化"
            }
        ]
    },
    adult: {
        3: [
            {
                id: "adult_3_workplace",
                title: "職場的玻璃天花板",
                description: "科技公司性騷擾事件被掩蓋，女主管最終離職。短篇推理劇本。",
                duration: "30分鐘",
                days: 1,
                difficulty: "入門",
                background: "某科技公司發生性騷擾事件，一位女性主管指控男性同事騷擾，但公司似乎在掩蓋真相。最終該女主管離職，此事引發討論。",
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 420, type: "discussion", description: "了解事件經過，尋找線索" },
                            { name: "下午", duration: 420, type: "discussion", description: "深入推理，質詢各方" },
                            { name: "傍晚", duration: 240, type: "voting", description: "投票找出加害者與幫兇" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "林雅婷",
                        role: "受害者",
                        background: "你是公司的資深主管，遭受性騷擾後向公司檢舉。",
                        secret: "公司高層私下要你撤回檢舉，承諾升職，但你拒絕了。你知道還有其他受害者不敢站出來。",
                        goal: "找出誰在阻撓調查，揭露公司的包庇行為。"
                    },
                    {
                        name: "王大為",
                        role: "被指控者",
                        background: "你是業務部門的主管，被指控性騷擾。",
                        secret: "**你是騷擾者**。你覺得自己只是開玩笑表達友好，不承認這是騷擾。你動用關係讓公司壓下此事。",
                        goal: "保護自己的職位和聲譽，讓此事不了了之。"
                    },
                    {
                        name: "人資總監",
                        role: "人力資源總監",
                        background: "你負責處理公司的人事糾紛。",
                        secret: "**你是幫兇**。你收到高層壓力，沒有公正處理此案。你害怕失去工作，選擇配合高層。",
                        goal: "平息事件，但內心掙扎於正義和生計之間。"
                    }
                ],
                questions: [
                    "為什麼職場性騷擾難以被正視和處理？",
                    "權力結構如何影響性騷擾事件的處理？",
                    "受害者站出來需要付出什麼代價？",
                    "旁觀者和制度在性騷擾中扮演什麼角色？"
                ]
            }
        ],
        4: [
            {
                id: "adult_4_domestic",
                title: "婚姻的囚籠",
                description: "家暴受害者多次報警又撤案，鄰居和社工介入調查。探討家暴循環。",
                duration: "35分鐘",
                days: 1,
                difficulty: "進階",
                background: "一位女性在家暴後報警，但最終又撤銷了報案。鄰居和社工介入調查，發現事情並不單純。",
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 480, type: "discussion", description: "了解案件背景" },
                            { name: "下午", duration: 540, type: "discussion", description: "深入討論家暴循環與責任" },
                            { name: "傍晚", duration: 240, type: "voting", description: "投票環節" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "張小惠",
                        role: "受害者",
                        background: "你是家暴受害者，多次報警後又撤案。",
                        secret: "你在經濟上完全依賴丈夫，害怕離婚後無法養活孩子。丈夫每次道歉後你都選擇原諒，但暴力越來越嚴重。",
                        goal: "在討論中找到勇氣和資源，思考如何脫離暴力關係。"
                    },
                    {
                        name: "張建國",
                        role: "施暴者",
                        background: "你是張小惠的丈夫，被指控家暴。",
                        secret: "**你是施暴者**。你認為打老婆是管教，每次事後都會道歉送禮，認為自己已經改過。你威脅妻子不准離婚，否則就爭奪孩子監護權。",
                        goal: "維持婚姻，認為這是家務事，不該被外人干涉。"
                    },
                    {
                        name: "王社工",
                        role: "社工",
                        background: "你是負責此案的社工，多次訪視。",
                        secret: "你目睹了太多類似案例，知道受害者平均要離開7次才能真正脫離。你想幫忙但制度有限制。",
                        goal: "協助受害者認識資源，理解離開暴力關係的困難。"
                    },
                    {
                        name: "李鄰居",
                        role: "鄰居",
                        background: "你是隔壁鄰居，常聽到爭吵聲。",
                        secret: "你多次聽到家暴聲音但選擇不報警，認為是「人家的家務事」。直到這次看到張小惠被打到住院才報警。",
                        goal: "反思自己的冷漠，理解旁觀者的責任。"
                    }
                ],
                questions: [
                    "為什麼家暴受害者很難離開暴力關係？",
                    "經濟控制如何成為家暴的手段？",
                    "社會對於家暴有哪些迷思？（如：家務事、床頭吵床尾和）",
                    "鄰居和社會可以如何幫助受害者？"
                ]
            }
        ],
        5: [
            {
                id: "adult_5_party_short",
                title: "派對之後（短篇）",
                description: "大學派對後發生性侵案，嫌疑人稱「合意」。快節奏推理劇本。",
                duration: "40分鐘",
                days: 1,
                difficulty: "進階",
                background: "大學校園發生性侵案，受害者在派對後被侵犯，嫌疑人稱是「合意性行為」。此案引發校園討論。",
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "上午", duration: 600, type: "discussion", description: "還原派對當晚情況" },
                            { name: "下午", duration: 600, type: "discussion", description: "質詢與推理" },
                            { name: "傍晚", duration: 300, type: "voting", description: "投票定罪" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "小美",
                        role: "受害者",
                        background: "你在派對後遭到性侵，決定報案。",
                        secret: "你當時喝醉了，記憶模糊，但確定自己說過「不要」。你擔心被質疑「為什麼要喝醉」、「穿著是不是太暴露」。",
                        goal: "獲得支持，揭露性侵犯的行為和「合意」的迷思。"
                    },
                    {
                        name: "阿傑",
                        role: "被控性侵者",
                        background: "你被指控在派對後性侵小美。",
                        secret: "**你是性侵犯**。你認為對方沒有「明確拒絕」，而且當時都在喝酒，所以是「合意」的。你不認為這是性侵。",
                        goal: "辯解自己無罪，強調「沒有明確說不就是同意」。"
                    },
                    {
                        name: "小華",
                        role: "派對在場者",
                        background: "你是派對的參加者，目睹了一些情況。",
                        secret: "你看到阿傑扶著醉倒的小美離開，當時覺得不太對勁，但沒有阻止。現在你很自責。",
                        goal: "反思旁觀者的責任，理解積極同意的重要性。"
                    },
                    {
                        name: "校園諮商師",
                        role: "心理諮商師",
                        background: "你是小美求助的諮商師。",
                        secret: "你發現校園性侵案件通報率很低，很多受害者因為擔心二次傷害而選擇沉默。",
                        goal: "支持受害者，教育大眾關於「積極同意」的概念。"
                    },
                    {
                        name: "學生會長",
                        role: "學生代表",
                        background: "你是學生會會長，關注此案。",
                        secret: "你發現學校為了名聲，傾向私下和解而非公正處理。你想推動校園性平教育改革。",
                        goal: "推動制度改革，挑戰「被害者有罪論」的迷思。"
                    }
                ],
                questions: [
                    "什麼是「積極同意」？為什麼「沒說不」不等於同意？",
                    "酒精在性侵案件中扮演什麼角色？責任歸屬如何判斷？",
                    "為什麼受害者常被質疑（穿著、行為、喝酒）？",
                    "如何建立尊重同意、預防性侵的校園文化？"
                ]
            },
            {
                id: "adult_5_party_long",
                title: "派對之後（進階版）",
                description: "多天深度調查，揭露校園性侵案背後的權力結構與文化。需要更多時間推理。",
                duration: "60分鐘",
                days: 2,
                difficulty: "困難",
                background: "大學派對後發生性侵案。隨著調查深入，發現這不是孤立事件，背後涉及學長姐文化、兄弟會權力結構等問題。",
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "早晨", duration: 600, type: "discussion", description: "案件初步調查" },
                            { name: "下午", duration: 600, type: "discussion", description: "收集證詞與線索" }
                        ],
                        events: [
                            { phase: "下午", content: "另一位學生匿名舉報，聲稱類似事件曾發生過，但被壓下來了。" }
                        ]
                    },
                    {
                        day: 2,
                        phases: [
                            { name: "早晨", duration: 600, type: "discussion", description: "深入調查校園文化問題" },
                            { name: "下午", duration: 600, type: "discussion", description: "對質與推理" },
                            { name: "傍晚", duration: 300, type: "voting", description: "最終投票" }
                        ],
                        events: [
                            { phase: "早晨", content: "調查發現兄弟會內部有「戰績」文化，鼓勵成員追求女生並分享細節。" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "小美",
                        role: "受害者",
                        background: "你在派對後遭到性侵，決定報案。",
                        secret: "第一天：你當時喝醉了，記憶模糊。第二天：你回想起更多細節，記得阿傑的朋友們在旁邊起鬨。",
                        goal: "獲得支持，揭露不只是個人行為，而是有毒的文化問題。"
                    },
                    {
                        name: "阿傑",
                        role: "被控性侵者",
                        background: "你是兄弟會成員，被指控性侵。",
                        secret: "**你是性侵犯**。第一天：你堅稱是合意的。第二天：你承認兄弟會有「競賽」文化，但你認為「大家都這樣」。",
                        goal: "為自己辯護，並將責任推給文化環境。"
                    },
                    {
                        name: "小華",
                        role: "目擊者",
                        background: "你是派對參加者，目睹了一些情況。",
                        secret: "第一天：你看到阿傑扶小美離開。第二天：你想起當時還有其他兄弟會成員在場起鬨。",
                        goal: "反思旁觀者與集體責任。"
                    },
                    {
                        name: "大雄",
                        role: "兄弟會會長",
                        background: "你是兄弟會的會長。",
                        secret: "**你是共犯結構的維護者**。第二天揭露：你知道會內有不當文化，但為了團體聲譽選擇掩蓋。你也曾阻止受害者報案。",
                        goal: "保護兄弟會聲譽，淡化事件嚴重性。"
                    },
                    {
                        name: "校園諮商師",
                        role: "心理諮商師",
                        background: "你是小美求助的諮商師。",
                        secret: "第二天：你揭露過去兩年內接到過多起類似案件，但都因壓力而沒有正式處理。",
                        goal: "推動制度改革，打破沉默文化。"
                    }
                ],
                questions: [
                    "個人犯罪與集體文化的關係是什麼？",
                    "「大家都這樣」能成為開脫的理由嗎？",
                    "權力結構（學長姐制、兄弟會）如何助長性暴力？",
                    "如何從根本改變校園文化？"
                ]
            }
        ],
        6: [
            {
                id: "adult_6_digital_short",
                title: "數位性暴力（快節奏）",
                description: "私密照被散播，快速推理找出加害者與幫兇鏈。",
                duration: "45分鐘",
                days: 1,
                difficulty: "進階",
                background: "一位女性的私密照片被前男友惡意散播到網路上，引發「獵巫」和網路霸凌。警方介入調查。",
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "上午", duration: 720, type: "discussion", description: "追溯照片散播路徑" },
                            { name: "下午", duration: 720, type: "discussion", description: "追究各方責任" },
                            { name: "傍晚", duration: 360, type: "voting", description: "投票定罪" }
                        ]
                    }
                ],
                characters: [
                    {
                        name: "陳曉雯",
                        role: "受害者",
                        background: "你的私密照片被前男友散播，導致你被網路霸凌。",
                        secret: "你因為這件事失去工作、被家人責備，甚至有自殺念頭。你不明白為什麼大家譴責的是你而不是散播者。",
                        goal: "尋求正義，揭露數位性暴力的嚴重性和受害者污名化問題。"
                    },
                    {
                        name: "前男友",
                        role: "散播者",
                        background: "你是陳曉雯的前男友，被指控散播私密照。",
                        secret: "**你是加害者**。分手後你因為不甘心，將照片上傳到論壇報復。你認為「是她自己拍的」，不覺得自己有錯。",
                        goal: "淡化自己的責任，將焦點轉移到「為什麼要拍這種照片」。"
                    },
                    {
                        name: "論壇站主",
                        role: "論壇管理者",
                        background: "你是照片最初被上傳的論壇管理員。",
                        secret: "**你是幫兇**。你知道有人檢舉，但因為照片帶來流量，你刻意拖延刪除。你以「言論自由」為藉口。",
                        goal: "逃避責任，辯稱平台只是中立的傳播管道。"
                    },
                    {
                        name: "網友A",
                        role: "網路鄉民",
                        background: "你是論壇的活躍用戶，參與了討論。",
                        secret: "你轉發了照片，還在留言區批評受害者「不檢點」。現在看到新聞才意識到自己也是加害者之一。",
                        goal: "反思網路霸凌的責任，理解每個轉發都是二次傷害。"
                    },
                    {
                        name: "警察",
                        role: "網路犯罪調查員",
                        background: "你是負責此案的警察。",
                        secret: "你發現很多人不知道散播私密照是犯罪，而且受害者常被問「為什麼要拍」，導致報案率很低。",
                        goal: "依法辦案，同時教育大眾數位性暴力的法律責任。"
                    },
                    {
                        name: "性平專家",
                        role: "性別平權倡議者",
                        background: "你是關注此案的性平倡議者。",
                        secret: "你發現社會對受害者的檢討遠多於對加害者的譴責，這種文化必須改變。",
                        goal: "推動修法和社會教育，挑戰「蕩婦羞辱」文化。"
                    }
                ],
                questions: [
                    "為什麼散播私密影像是犯罪？同意拍攝=同意散播嗎？",
                    "為什麼受害者常被檢討而非加害者？",
                    "網路轉發者、平台、評論者各自的責任是什麼？",
                    "如何建立尊重隱私、反對數位性暴力的網路文化？"
                ]
            },
            {
                id: "adult_6_digital_long",
                title: "數位性暴力（深度版）",
                description: "多天調查，從個案延伸到產業鏈、法律漏洞與社會文化。最複雜的劇本。",
                duration: "75分鐘",
                days: 3,
                difficulty: "專家",
                background: "私密照散播案延燒，調查發現背後有組織化的「復仇式色情」產業鏈，涉及多個平台、付費內容、甚至有人從中牟利。",
                dayPhases: [
                    {
                        day: 1,
                        phases: [
                            { name: "上午", duration: 600, type: "discussion", description: "案件初步調查" },
                            { name: "下午", duration: 600, type: "discussion", description: "追溯照片來源" }
                        ],
                        events: [
                            { phase: "下午", content: "發現照片不只在一個論壇，已經被轉發到多個平台，甚至有付費訂閱網站。" }
                        ]
                    },
                    {
                        day: 2,
                        phases: [
                            { name: "上午", duration: 600, type: "discussion", description: "調查付費網站與產業鏈" },
                            { name: "下午", duration: 600, type: "discussion", description: "追查金流與獲利者" }
                        ],
                        events: [
                            { phase: "上午", content: "發現有人收集這類照片，建立付費網站營利，月收入超過十萬。" },
                            { phase: "下午", content: "警方追查到金流，發現部分平台設在國外，規避台灣法律。" }
                        ]
                    },
                    {
                        day: 3,
                        phases: [
                            { name: "上午", duration: 600, type: "discussion", description: "法律漏洞與社會文化討論" },
                            { name: "下午", duration: 600, type: "discussion", description: "最終對質與辯論" },
                            { name: "傍晚", duration: 360, type: "voting", description: "綜合投票" }
                        ],
                        events: [
                            { phase: "上午", content: "性平團體指出現行法律對數位性暴力的懲罰過輕，且跨國追訴困難。" }
                        ]
                    },
                    // (原檔案中這裡似乎少了一個結尾大括號，我這裡補上)
                ],
                characters: [
                    {
                        name: "陳曉雯",
                        role: "受害者",
                        background: "你的私密照被散播，調查後發現規模遠超想像。",
                        secret: "第一天：你被霸凌。第二天：發現有人用你的照片牟利。第三天：你了解到這是系統性問題，決定站出來推動修法。",
                        goal: "從個人正義延伸到社會改革。"
                    },
                    {
                        name: "前男友",
                        role: "初始散播者",
                        background: "你上傳了照片到論壇。",
                        secret: "**你是源頭**。第二天：你發現照片被轉賣牟利，開始害怕。第三天：你意識到自己造成的傷害無法挽回。",
                        goal: "面對自己的罪責，理解數位足跡永久存在。"
                    },
                    {
                        name: "論壇站主",
                        role: "論壇管理者",
                        background: "你管理論壇，照片最初在此流傳。",
                        secret: "**你是幫兇**。第一天：你拖延刪除。第二天揭露：你其實有從廣告獲利。第三天：你發現自己可能觸犯刑法。",
                        goal: "試圖減輕責任，但逐漸認識到平台方的義務。"
                    },
                    {
                        name: "付費網站經營者",
                        role: "色情網站站長",
                        background: "你經營付費訂閱網站，收集這類內容。",
                        secret: "**你是產業鏈核心**。第二天揭露：你從這些照片獲利數十萬，且知道很多是未經同意的。你認為「供需市場」合理。",
                        goal: "辯稱自己只是商人，責任在上傳者。"
                    },
                    {
                        name: "網友/訂閱者",
                        role: "內容消費者",
                        background: "你是網友，也訂閱了付費內容。",
                        secret: "第一天：你轉發過照片。第二天：你付費訂閱了類似網站。第三天：你意識到自己的消費養活了整個產業鏈。",
                        goal: "從否認到覺醒，理解消費者責任。"
                    },
                    {
                        name: "警察",
                        role: "網路犯罪調查員",
                        background: "你負責調查此案。",
                        secret: "第二天：你發現跨國追訴困難，很多伺服器在國外。第三天：你揭露現行法律漏洞，刑責過輕且舉證困難。",
                        goal: "依法辦案，同時倡議修法。"
                    },
                    {
                        name: "性平律師",
                        role: "性別平權律師",
                        background: "你代表陳曉雯提告。",
                        secret: "第三天：你指出台灣的《性侵害犯罪防治法》對數位性暴力規範不足，應該要有專法。",
                        goal: "推動法律改革，建立更完善的保護機制。"
                    }
                ],
                questions: [
                    "數位性暴力為何特別難以根除？",
                    "產業鏈中每個環節（上傳、平台、消費者）的責任為何？",
                    "跨國網路犯罪該如何追訴？",
                    "現行法律有哪些不足？如何修法？",
                    "如何從根本改變「蕩婦羞辱」文化？"
                ]
            }
        ]
    }
};