// music-config.js
// 所有的音樂檔案都假定存放在專案根目錄下的 /music 資料夾中。

export const MUSIC_CONFIG = {
    // 場景音樂
    home: './music/home.mp3',      // 建議: 輕鬆、輕快的音樂
    lobby: './music/lobby.mp3',    // 建議: 懸疑感較低、等待的音樂
    victory: './music/victory.mp3', // 建議: 勝利、正向的音樂
    sad_ending: './music/sad_ending.mp3', // 新增：用於壞結局或調查失敗 (請確認你的 scripts.js 中有使用到 'sad_ending')
    
    // 劇本專屬音樂
    // 檔名建議統一且具有辨識度，例如: [劇本ID]_[風格].mp3
    scripts: {
        // 未成年劇本
        'teen_3_bullying': './music/teen_bullying_tense.mp3',
        'teen_3_outing': './music/teen_outing_drama.mp3',
        'teen_4_photo': './music/teen_privacy_suspense.mp3',
        'teen_4_catfish': './music/teen_catfish_deception.mp3',
        'teen_5_uniform': './music/teen_uniform_debate.mp3',
        'teen_5_deepfake': './music/teen_deepfake_tech.mp3',
        'teen_6_game': './music/teen_online_harass.mp3',
        'teen_6_anonymous': './music/teen_anonymous_conflict.mp3',
        
        // 成年劇本
        'adult_3_workplace': './music/adult_workplace_tension.mp3',
        'adult_3_smart_control': './music/adult_iot_control.mp3',
        'gender_tech_lab_mystery': './music/adult_lab_mystery.mp3', // 演算法偏見
        'adult_4_domestic': './music/adult_domestic_sad.mp3',
        'adult_5_party': './music/adult_consent_party.mp3',
        'adult_5_dating_app': './music/adult_dating_stalking.mp3',
        'adult_6_digital_footprint': './music/adult_digital_footprint.mp3',
        'adult_6_metaverse': './music/adult_metaverse.mp3',
        
        // 如果你還有其他劇本，請在這裡新增
    }
};

// 取得劇本音樂的函式保持不變
export function getScriptMusic(scriptId) {
    // 如果找不到特定的劇本音樂，則預設播放 lobby 音樂
    return MUSIC_CONFIG.scripts[scriptId] || MUSIC_CONFIG.lobby;
}