// 音樂配置 - 每個劇本有專屬音樂
export const MUSIC_CONFIG = {
    // 場景音樂
    home: 'https://cdn.pixabay.com/audio/2022/03/10/audio_2c84830d98.mp3',
    lobby: 'https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3',
    victory: 'https://cdn.pixabay.com/audio/2021/08/04/audio_bb630cc098.mp3',
    
    // 劇本專屬音樂
    scripts: {
        // 未成年劇本
        'teen_3_bullying': 'https://cdn.pixabay.com/audio/2021/08/04/audio_0625c1539c.mp3',
        'teen_3_consent': 'https://cdn.pixabay.com/audio/2022/03/24/audio_c8a7d5d141.mp3',
        'teen_4_photo': 'https://cdn.pixabay.com/audio/2021/08/04/audio_0625c1539c.mp3',
        'teen_5_uniform': 'https://cdn.pixabay.com/audio/2022/05/11/audio_3f3c8685f1.mp3',
        'teen_6_game': 'https://cdn.pixabay.com/audio/2022/03/20/audio_998319e8bc.mp3',
        
        // 成年劇本
        'adult_3_workplace': 'https://cdn.pixabay.com/audio/2022/05/11/audio_3f3c8685f1.mp3',
        'adult_4_domestic': 'https://cdn.pixabay.com/audio/2022/03/20/audio_998319e8bc.mp3',
        'adult_5_party_short': 'https://cdn.pixabay.com/audio/2022/05/11/audio_3f3c8685f1.mp3',
        'adult_5_party_long': 'https://cdn.pixabay.com/audio/2022/03/20/audio_998319e8bc.mp3',
        'adult_6_digital_short': 'https://cdn.pixabay.com/audio/2022/03/20/audio_998319e8bc.mp3',
        'adult_6_digital_long': 'https://cdn.pixabay.com/audio/2022/03/20/audio_998319e8bc.mp3'
    }
};

// 取得劇本音樂
export function getScriptMusic(scriptId) {
    return MUSIC_CONFIG.scripts[scriptId] || MUSIC_CONFIG.lobby;
}