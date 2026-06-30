const F_DAY = 18, F_MONTH = 1, F_YEAR = 2025; //First day of the relationship
const B_DAY = 29, B_MONTH = 5, B_YEAR = 2007; //Babe's birthday
const MUSIC_BASE_URL = IMAGE_BASE_URL = LOCATION_BASE_URL = PASSWORD_BASE_URL = TELEGRAM_BOT_URL ="https://oonydghpwdqrl4rm.public.blob.vercel-storage.com/"; //Vercel Blob URL
const ALARM_VOLUME = 1.0;
const WEATHER_API_KEY = "5727a5b43000d171e14dbe2988498460"; //OpenWeatherMap API key;

//-------------------------------------------------------NOTES------------------------------------------------------------------------------------------
const notes = [
    "\"Có em rồi, ngày bình thường cũng thành đặc biệt\"",
    "\"Em là lý do anh mỉm cười nhiều hơn mỗi ngày\"",
    "\"Cảm ơn em đã xuất hiện trong cuộc đời anh\"",
    "\"Hôm nay em trông rất tuyệt vời\"",
    "\"Dù có chuyện gì, anh vẫn luôn ở đây bên em\"",
    "\"Cười nhiều lên nhé, vì nụ cười của em là đẹp nhất!\"",
    "\"Nếu là mèo, anh sẽ dành 9 mạng ở bên em\"",
    "\"Nhìn Đông nhìn Tây không bằng nhìn em một giây\"",
    "\"Tay anh ấm lắm, em muốn nắm không?\"",
    "\"Anh yêu em\"",
    "\"Anh nhớ em\"",
    "\"<3\"",
    // "\"...\"",
];
//======================================================================================================================================================

//-------------------------------------------------------IMAGES-----------------------------------------------------------------------------------------
const memories = [
    { src: "picture/memory/dalat2025.jpg", text: "Đà Lạt (19/01/2025)" },
    { src: "picture/memory/firstdate.jpg", text: "First date (25/02/2026)" },
    // { src: "picture/memory/.jpg", text: "" },
];

const albumPhotos = [
    { src: "picture/album/1.jpg", text: "Đà Lạt", year: 2025 },
    { src: "picture/album/2.jpg", text: "Ngầu", year: 2025 },
    { src: "picture/album/10.jpg", text: "Xinh", year: 2025 },
    { src: "picture/album/3.jpg", text: "Màu đỏ chứng tỏ yêu anh", year: 2025 },
    { src: "picture/album/4.jpg", text: "Cô điều dưỡng", year: 2025 },
    { src: "picture/album/5.jpg", text: "Gái đẹp", year: 2025 },
    { src: "picture/album/7.jpg", text: "Dễ thương", year: 2025 },
    { src: "picture/album/6.jpg", text: "Tỷ tỷ Douyin", year: 2026 },
    { src: "picture/album/8.jpg", text: "Học quốc phòng", year: 2026 },
    { src: "picture/album/9.jpg", text: "Học bài mà ngủ gục", year: 2026 },
    // { src: "picture/album/.jpg", text: "", year: },
];
//======================================================================================================================================================

//-------------------------------------------------------TRACKS-----------------------------------------------------------------------------------------
const vTracks = [
    { name: "Ai ngoài anh - VSTRA, Tyronee", src: "music/VN/Aingoaianh.mp3" },
    { name: "Ấm - sweet liquor", src: "music/VN/Am.mp3" },
    { name: "Ánh sao và bầu trời - T.R.I, Cá", src: "music/VN/Anhsaovabautroi.mp3" },
    { name: "Chẳng giống giáng sinh - Lu, Willistic, datfitzx", src: "music/VN/Changgionggiangsinh.mp3" },
    { name: "Chạy khỏi thế giới này - Da LAB, Phương Ly", src: "music/VN/Chaykhoithegioinay.mp3" },
    { name: "Chạy theo em - Nhã, Mihuman", src: "music/VN/Chaytheoem.mp3" },
    { name: "Chuyện đôi ta - Da LAB, Muộii", src: "music/VN/Chuyendoita.mp3" },
    { name: "Có hay từ bao giờ - Niee, Hast, KEI", src: "music/VN/Cohaytubaogio.mp3" },
    { name: "Cứ chill thôi - Chillies, SUNI, Rhymastic", src: "music/VN/Cuchillthoi.mp3" },
    { name: "Đóa hoa - TeuYungBoy, BIG WIND, DONAL", src: "music/VN/Doahoa.mp3" },
    { name: "Đôi mắt kẻ tình si - GREY D", src: "music/VN/Doimatketinhsi.mp3" },
    { name: "Đưa em về nhà - GREY D, Chillies", src: "music/VN/Duaemvenha.mp3" },
    { name: "Dự báo thời tiết hôm nay mưa - GREY D", src: "music/VN/Dubaothoitiethomnaymua.mp3" },
    { name: "Ghét em đi làm ơn - VSTRA, Tyronee", src: "music/VN/Ghetemdilamon.mp3" },
    { name: "Haydeanhduoccungemdau - SIVAN, Kai Đinh", src: "music/VN/Haydeanhduoccungemdau.mp3" },
    { name: "Hông về tình yêu - Khoi Vu", src: "music/VN/Hongvetinhyeu.mp3" },
    { name: "Hôn vào đây đi - VSTRA, Tyronee, hairan, antransax", src: "music/VN/Honvaodaydi.mp3" },
    { name: "Không buông - Hngle, Ari", src: "music/VN/Khongbuong.mp3" },
    { name: "Lỡ một mai tôi quên tên người - Khiem", src: "music/VN/Lomotmaitoiquentennguoi.mp3" },
    { name: "Love my friend - Shayda", src: "music/VN/Lovemyfriend.mp3" },
    { name: "Nằm bên anh - Minh Đinh, Hà An Huy", src: "music/VN/Nambenanh.mp3" },
    { name: "Nếu lúc đó - Tlinh, 2pillz", src: "music/VN/Neulucdo.mp3" },
    { name: "Ngã tư không đèn - Trang, Khoa Vũ", src: "music/VN/Ngatukhongden.mp3" },
    { name: "Như hoa mùa xuân - Phùng Khánh Linh, Wren Evans", src: "music/VN/Nhuhoamuaxuan.mp3" },
    { name: "Nước mắt em lau bằng tình yêu mới - Da LAB, Tóc Tiên", src: "music/VN/Nuocmatemlaubangtinhyeumoi.mp3" },
    { name: "Phong - VSTRA", src: "music/VN/Phong.mp3" },
    { name: "Sinh ra đã là thứ đối lập nhau - Da LAB, Badbies", src: "music/VN/Sinhradalathudoilapnhau.mp3" },
    { name: "Sống cho hết đời thanh xuân 3 - BCTM, TNS", src: "music/VN/Songchohetdoithanhxuan3.mp3" },
    { name: "Tâm trí lang thang - Ánh Sáng AZA, Negav", src: "music/VN/Tamtrilangthang.mp3" },
    { name: "Tên trộm - Lope Dope", src: "music/VN/Tentrom.mp3" },
    { name: "Thắc mắc (MĐX) - Thịnh Suy", src: "music/VN/Thacmac(MĐX).mp3" },
    { name: "Thằng điên - JustaTee, Phương Ly", src: "music/VN/Thangdien.mp3" },
    { name: "Thanh xuân - Da LAB", src: "music/VN/Thanhxuan.mp3" },
    { name: "Thích quá rùi nà - Tlinh, Trung Trần", src: "music/VN/Thichquaruina.mp3" },
    { name: "Tìm thấy nhau - SIVAN", src: "music/VN/Timthaynhau.mp3" },
    { name: "Tình yêu chậm trễ - MONSTAR", src: "music/VN/Tinhyeuchamtre.mp3" },
    { name: "Tiny love - Thịnh Suy", src: "music/VN/Tinylove.mp3" },
    { name: "To the moon - Hooligan", src: "music/VN/Tothemoon.mp3" },
    { name: "Trafalgar D.Law -  Don Raemo, Bewata", src: "music/VN/Trafalgardlaw.mp3" },
    { name: "Từng là - Vũ Cát Tường", src: "music/VN/Tungla.mp3" },
    { name: "Vaicaunoicokhiennguoithaydoi - GREY D, Tlinh", src: "music/VN/Vaicaunoicokhiennguoithaydoi.mp3" },
    { name: "Vạn vật như muốn ta bên nhau - RIO", src: "music/VN/Vanvatnhumuontabennhau.mp3" },
    { name: "Và thế giới đã mất đi một người cô đơn - Marzuz, Changg", src: "music/VN/Vathegioidamatdimotnguoicodon.mp3" },
    { name: "Wrong times - Dangrangto, Puppy", src: "music/VN/Wrongtimes.mp3" },
    //{ name: "", src: "music/VN/.mp3" },
];

const usukTracks = [
    { name: "A thousand years - Christina Perri", src: "music/US_UK/Athousandyears.mp3" },
    { name: "At my worst - Pink Sweet$", src: "music/US_UK/Atmyworst.mp3" },
    { name: "Beautiful in white - Westlife", src: "music/US_UK/Beautifulinwhite.mp3" },
    { name: "Can't take my eyes off you - Frankie Valli", src: "music/US_UK/Canttakemyeyesoffyou.mp3" },
    { name: "Careless whisper - George Michael", src: "music/US_UK/Carelesswhisper.mp3" },
    { name: "Fall in love alone - Stacey Ryan", src: "music/US_UK/Fallinlovealone.mp3" },
    { name: "From the start - laufey", src: "music/US_UK/Fromthestart.mp3" },
    { name: "Girls like you - Maroon 5", src: "music/US_UK/Girlslikeyou.mp3" },
    { name: "Golden hour - JVKE", src: "music/US_UK/Goldenhour.mp3" },
    { name: "I love you 3000 - Stephanie Poetri", src: "music/US_UK/Iloveyou3000.mp3" },
    { name: "I love you so - The Walters", src: "music/US_UK/Iloveyouso.mp3" },
    { name: "Just the two of us - Grover Washington Jr, Bill Withers", src: "music/US_UK/Justthetwoofus.mp3" },
    { name: "Kiss me more - Doja Cat", src: "music/US_UK/Kissmemore.mp3" },
    { name: "Love is gone - Slander, Dylan Matthew", src: "music/US_UK/Loveisgone.mp3" },
    { name: "Memories - Maroon 5", src: "music/US_UK/Memories.mp3" },
    { name: "Nothing's gonna change my love for you - Geogre Benson", src: "music/US_UK/Nothing'sgonnachangemyloveforyou.mp3" },
    { name: "Perfect - Ed Sheeran", src: "music/US_UK/Perfect.mp3" },
    { name: "Snowman - Sia", src: "music/US_UK/Snowman.mp3" },
    { name: "Tip toe - HYBS", src: "music/US_UK/Tiptoe.mp3" },
    { name: "Until I found you - Stephen Sanchez", src: "music/US_UK/Untilifoundyou.mp3" },
    { name: "Until you - Shayne Ward", src: "music/US_UK/Untilyou.mp3" },
    { name: "We don't talk anymore - Charlie Puth", src: "music/US_UK/Wedon'ttalkanymore.mp3" },
    //{ name: "", src: "music/US_UK/.mp3" },
];

const kTracks = [
    { name: "If you - BigBang", src: "music/K/Ifyou.mp3" },
    { name: "Still with you - Jung Kook", src: "music/K/Stillwithyou.mp3" },
    //{ name: "", src: "music/K/.mp3" },
];

const xmasTracks = [
    { name: "Chẳng giống giáng sinh - Lu, Willistic, datfitzx", src: "music/SPECIAL/XMAS/Changgionggiangsinh.mp3" },
    { name: "Last Christmas - Wham!", src: "music/SPECIAL/XMAS/Lastchristmas.mp3" },
    { name: "Snowman - Sia", src: "music/SPECIAL/XMAS/Snowman.mp3" },
    //{ name: "", src: "music/SPECIAL/XMAS/.mp3" },
];

const tetTracks = [
    { name: "Chuyện cũ bỏ qua - Bích Phương", src: "music/SPECIAL/TET/Chuyencuboqua.mp3" },
    { name: "Một năm mới bình an - Sơn Tùng MTP", src: "music/SPECIAL/TET/Motnammoibinhan.mp3" },
    { name: "Năm qua đã làm gì - Bùi Công Nam", src: "music/SPECIAL/TET/Namquadalamgi.mp3" },
    { name: "Như hoa mùa xuân - Phùng Khánh Linh, Wren Evans", src: "music/SPECIAL/TET/Nhuhoamuaxuan.mp3" },
    { name: "Tết đong đầy - KHOA, Kay Tran, Duck V", src: "music/SPECIAL/TET/Tetdongday.mp3" },
    //{ name: "", src: "music/SPECIAL/TET/.mp3" },
];

const HguitarTracks = [
    { name: "Cho em - H_guitar", src: "music/SPECIAL/H_guitar/Choem.mp3" },
    { name: "Tulip-Two lips - H_guitar", src: "music/SPECIAL/H_guitar/Tuliptwolips.mp3" },
    // { name: "", src: "music/SPECIAL/H.mp3" }
];

const playlistsData = [
    { name: "Tất cả", tracks: [...vTracks, ...usukTracks, ...kTracks] },
    { name: "Nhạc Việt", tracks: vTracks },
    { name: "Nhạc US-UK", tracks: usukTracks },
    { name: "Nhạc Hàn", tracks:  kTracks},
    { name: "H_guitar🔒︎", tracks: HguitarTracks, isLocked: true, isUnlocked: false },
];
//======================================================================================================================================================

const todayForSeason = new Date();
const currentSeasonMonth = todayForSeason.getMonth() + 1;
const currentSeasonDay = todayForSeason.getDate();

if (currentSeasonMonth === 12) {
    playlistsData.unshift({
        name: "─────🎄─────\n❄️Merry Christmas❄️\n─────🎄─────",
        tracks: xmasTracks,
        activeBg: "#ffffff",
        activeColor: "#000000e0",
        theme: "xmas"
    });
}

if (currentSeasonMonth === 1 || (currentSeasonMonth === 2 && currentSeasonDay <= 15)) {
    playlistsData.unshift({
        name: "─────🏵️─────\n🧧\tHappy New Year\t🧧\n─────🏵️─────",
        tracks: tetTracks,
        activeBg: "#d41515c2",
        activeColor: "#ffbb00",
        theme: "tet"
    });
}

let currentPlaylistDataIndex = 0;
let playlist = playlistsData[currentPlaylistDataIndex].tracks;

function getLunarDate(date) {
    try {
        const formatter = new Intl.DateTimeFormat('en-US', {
            calendar: 'chinese',
            day: 'numeric',
            month: 'numeric'
        });
        const parts = formatter.formatToParts(date);
        const day = parseInt(parts.find(p => p.type === 'day').value, 10);
        const month = parseInt(parts.find(p => p.type === 'month').value, 10);
        return { day, month };
    } catch (e) {
        return { day: -1, month: -1 };
    }
}

function updateCounter() {
    const now = new Date();
    const startDate = new Date(F_YEAR, F_MONTH - 1, F_DAY);
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    
    const diffTime = Math.abs(now - startDate);
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    let y = now.getFullYear() - F_YEAR;
    let m = (now.getMonth() + 1) - F_MONTH;
    let d = now.getDate() - F_DAY;

    if (d < 0) {
        m--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        d += prevMonth;
    }
    if (m < 0) {
        y--;
        m += 12;
    }

    document.getElementById('today-date').innerText = 
        `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    
    document.getElementById('in-love-time').innerText = 
        `Bên nhau: ${y} năm ${m} tháng ${d} ngày`;
    
    document.getElementById('total-days').innerText = 
        `{${totalDays} ngày}`;
    document.getElementById('live-clock').innerText = 
        `${hh} : ${mm} : ${ss}`;
    
    const lunarDate = getLunarDate(now);

    let wishes = [];
    if (now.getDate() === B_DAY && (now.getMonth() + 1) === B_MONTH) {
        wishes.push(`🎂 Chúc mừng sinh nhật em yêu (${now.getFullYear() - B_YEAR} tuổi) 🎂`);
    }
    if (now.getDate() === 14 && (now.getMonth() + 1) === 2) {
        wishes.push("❤️ Chúc mừng ngày Valentine ❤️");
    }
    if (now.getDate() === 8 && (now.getMonth() + 1) === 3) {
        wishes.push("🌹 Chúc mừng ngày Quốc Tế Phụ Nữ 8/3 🌹");
    }
    if (now.getDate() === 1 && (now.getMonth() + 1) === 6) {
        wishes.push("🫧 Chúc mừng ngày Quốc Tế Thiếu Nhi 1/6 🫧");
    }
    if (now.getDate() === 20 && (now.getMonth() + 1) === 10) {
        wishes.push("💐 Chúc mừng ngày Phụ Nữ Việt Nam 20/10 💐");
    }
    if (lunarDate.day === 15 && lunarDate.month === 8) {
        wishes.push("🏮 Chúc mừng ngày Tết Trung Thu 15/8 ÂL🏮");
    }
    if ((now.getMonth() + 1) === 12) {
        wishes.push("🎄 Merry Christmas 🎄");
    }
    if ((now.getMonth() + 1) === 1 || ((now.getMonth() + 1) === 2 && now.getDate() <= 15)) {
        wishes.push("🧧 Happy New Year 🧧");
    }
    if (d === 0 && m === 0 && y > 0) {
        wishes.push(`❤️ Chúc mừng kỷ niệm ${y} năm bên nhau ❤️`);
    }
    document.getElementById('special-wish').innerText = wishes.join('\n');
}

function changeNote() {
    const noteElement = document.getElementById('random-note');
    const randomIndex = Math.floor(Math.random() * notes.length);
    
    noteElement.style.opacity = 0;
    setTimeout(() => {
        noteElement.innerText = notes[randomIndex];
        noteElement.style.opacity = 1;
        noteElement.style.transition = "opacity 0.5s";
    }, 500);
}

let currentTrackIndex = 0;
let isShuffle = false;
let unplayedTracks = [];
let trackHistory = [];
const audio = document.getElementById("myAudio");
audio.crossOrigin = "anonymous";
const playPauseBtn = document.getElementById("playPauseBtn");
const trackName = document.getElementById("track-name");
const seekBar = document.getElementById("seek-bar");
const currentTimeEl = document.getElementById("current-time");
const durationTimeEl = document.getElementById("duration-time");
const volumeBar = document.getElementById("volume-bar");

let audioCtx;
let analyser;
let source;
let dataArray;
let canvasCtx;
let visualizerCanvas;

function initVisualizer() {
    if (audioCtx) return;

    visualizerCanvas = document.getElementById('audio-visualizer');
    if (!visualizerCanvas) return;
    
    visualizerCanvas.style.opacity = '0';
    visualizerCanvas.style.transition = 'opacity 0.5s ease';
    void visualizerCanvas.offsetWidth;

    canvasCtx = visualizerCanvas.getContext('2d');
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    
    source = audioCtx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    
    analyser.fftSize = 256;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
    
    function resize() {
        visualizerCanvas.width = window.innerWidth;
        visualizerCanvas.height = 150;
    }
    window.addEventListener('resize', resize);
    resize();
    
    drawVisualizer();
}

function drawVisualizer() {
    requestAnimationFrame(drawVisualizer);
    
    canvasCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
    
    if (!audioCtx || audio.paused) return;
    
    analyser.getByteFrequencyData(dataArray);
    
    const bufferLength = analyser.frequencyBinCount;
    const barWidth = visualizerCanvas.width / bufferLength;
    let barHeight;
    let x = 0;
    
    for (let i = 0; i < bufferLength; i++) {
        barHeight = (dataArray[i] / 255) * visualizerCanvas.height;
        
        const r = 255;
        const g = 133 + (dataArray[i] / 2);
        const b = 162 + (dataArray[i] / 3);
        
        canvasCtx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.8)`;
        canvasCtx.fillRect(x, visualizerCanvas.height - barHeight, barWidth - 1, barHeight);
        
        x += barWidth;
    }
}

function loadTrack(index) {
    const track = playlist[index];
    
    if (track.src.startsWith("http")) {
        audio.src = track.src;
    } else {
        audio.src = MUSIC_BASE_URL + track.src;
    }
    trackName.innerText = track.name;
    seekBar.value = 0;
    currentTimeEl.innerText = "00:00";
    if (typeof renderPlaylist === 'function') renderPlaylist();
}

let fadeInterval;
let alarmFadeInterval = null;

function playMusic() {
    if (visualizerCanvas) visualizerCanvas.style.opacity = '1';
    clearInterval(fadeInterval);
    const targetVolume = volumeBar.value / 100;
    
    if (targetVolume === 0) {
        audio.volume = 0;
        audio.play();
        return;
    }

    let currentVol = audio.volume;
    if (audio.paused) {
        currentVol = 0;
        audio.volume = 0;
    }
    
    audio.play();
    const fadeStep = targetVolume / 20;
    
    fadeInterval = setInterval(() => {
        currentVol += fadeStep;
        if (currentVol >= targetVolume) {
            audio.volume = targetVolume;
            clearInterval(fadeInterval);
        } else {
            audio.volume = currentVol;
        }
    }, 25);
}

function pauseMusic() {
    if (visualizerCanvas) visualizerCanvas.style.opacity = '0';
    clearInterval(fadeInterval);
    const targetVolume = volumeBar.value / 100;
    let currentVol = audio.volume;
    
    if (currentVol <= 0) {
        audio.pause();
        return;
    }

    const fadeStep = currentVol / 20;
    
    fadeInterval = setInterval(() => {
        currentVol -= fadeStep;
        if (currentVol <= 0) {
            audio.volume = 0;
            audio.pause();
            audio.volume = targetVolume;
            clearInterval(fadeInterval);
        } else {
            audio.volume = currentVol;
        }
    }, 25); 
}

playPauseBtn.addEventListener("click", () => {
    initVisualizer();
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    if (audio.paused) {
        playMusic();
        playPauseBtn.innerText = "❚❚";
    } else {
        pauseMusic();
        playPauseBtn.innerText = "▶︎";
    }
});

window.addEventListener("keydown", (e) => {
    if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) {
        return;
    }
    if (e.code === "Space") {
        e.preventDefault();
        playPauseBtn.click();
    } else if (e.code === "ArrowRight") {
        e.preventDefault();
        if (!isNaN(audio.duration)) {
            audio.currentTime = Math.min(audio.currentTime + 5, audio.duration);
        }
    } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        audio.currentTime = Math.max(audio.currentTime - 5, 0);
    } else if (e.code === "ArrowUp") {
        e.preventDefault();
        volumeBar.value = Math.min(parseInt(volumeBar.value, 10) + 10, 100);
        volumeBar.dispatchEvent(new Event("input"));
    } else if (e.code === "ArrowDown") {
        e.preventDefault();
        volumeBar.value = Math.max(parseInt(volumeBar.value, 10) - 10, 0);
        volumeBar.dispatchEvent(new Event("input"));
    }
});

document.getElementById("nextBtn").addEventListener("click", () => {
    if (playlist.length === 0) return;
    if (!isShuffle) {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    } else {
        if (unplayedTracks.length === 0) {
            unplayedTracks = Array.from({length: playlist.length}, (_, i) => i);
            if (playlist.length > 1) {
                unplayedTracks = unplayedTracks.filter(i => i !== currentTrackIndex);
            }
        }
        const randomIndex = Math.floor(Math.random() * unplayedTracks.length);
        currentTrackIndex = unplayedTracks[randomIndex];
        unplayedTracks.splice(randomIndex, 1);
        trackHistory.push(currentTrackIndex);
    }
    loadTrack(currentTrackIndex);
    initVisualizer();
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    playMusic();
    playPauseBtn.innerText = "❚❚";
});

document.getElementById("prevBtn").addEventListener("click", () => {
    if (playlist.length === 0) return;
    if (!isShuffle) {
        currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    } else {
        if (trackHistory.length > 1) {
            let removedTrack = trackHistory.pop();
            if (!unplayedTracks.includes(removedTrack)) {
                unplayedTracks.push(removedTrack);
            }
            currentTrackIndex = trackHistory[trackHistory.length - 1];
        } else {
            audio.currentTime = 0;
            return;
        }
    }
    loadTrack(currentTrackIndex);
    initVisualizer();
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    playMusic();
    playPauseBtn.innerText = "❚❚";
});

audio.onended = () => {
    if (playlist.length > 0) document.getElementById("nextBtn").click();
};

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

audio.addEventListener("timeupdate", () => {
    if (!isNaN(audio.duration)) {
        seekBar.max = audio.duration;
        seekBar.value = audio.currentTime;
        currentTimeEl.innerText = formatTime(audio.currentTime);
        durationTimeEl.innerText = formatTime(audio.duration);
    }
});

seekBar.addEventListener("input", () => {
    audio.currentTime = seekBar.value;
});

volumeBar.addEventListener("input", () => {
    clearInterval(fadeInterval);
    audio.volume = volumeBar.value / 100;
});

window.addEventListener('load', () => {
    const player = document.querySelector('.spotify-player');
    player.style.animationDelay = "1.5s"; 
});

const player = document.querySelector('.spotify-player');
let hideTimeout;

function showPlayer() {
    player.style.animation = "none"; 
    player.classList.add('active');
    
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
        player.classList.remove('active');
    }, 5000);
}

player.addEventListener('click', showPlayer);
player.addEventListener('mouseenter', showPlayer);

const inputs = player.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('input', () => clearTimeout(hideTimeout));
});

player.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
        player.classList.remove('active');
    }, 2000);
});

function createLeaf() {
    const container = document.getElementById('leaf-container');
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    
    const currentTheme = playlistsData[currentPlaylistDataIndex].theme;

    if (currentTheme === 'xmas') {
        leaf.innerHTML = '❄';
        leaf.style.color = '#ffffff';
        leaf.style.background = 'none';
        leaf.style.fontSize = Math.random() * 10 + 15 + 'px';
        leaf.style.display = 'flex';
        leaf.style.alignItems = 'center';
        leaf.style.justifyContent = 'center';
        leaf.style.textShadow = '0 0 5px rgba(255, 255, 255, 0.8)';
    } else if (currentTheme === 'tet') {
        leaf.innerHTML = '❀';
        const size = Math.random() * 10 + 10 + 'px';
        leaf.style.color = '#fbff00';
        leaf.style.background = 'none';
        leaf.style.fontSize = Math.random() * 10 + 15 + 'px';
        leaf.style.display = 'flex';
        leaf.style.alignItems = 'center';
        leaf.style.justifyContent = 'center';
        leaf.style.textShadow = '0 0 5px rgba(255, 255, 255, 0.8)';
    } else {
        const size = Math.random() * 10 + 5 + 'px';
        leaf.style.width = size;
        leaf.style.height = size;
    }

    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.animationDuration = Math.random() * 5 + 5 + 's';
    leaf.style.opacity = Math.random();

    container.appendChild(leaf);

    setTimeout(() => { leaf.remove(); }, 10000);
}

let polaroidInterval;
let currentMemoryIndex = -1;

function showNextPolaroid() {
    if (typeof memories === 'undefined' || memories.length === 0) return;

    document.querySelectorAll('.polaroid-card').forEach(p => {
        p.style.opacity = '0';
        p.style.transform = 'scale(0.8) rotate(5deg)';
        p.style.pointerEvents = 'none'; 
        setTimeout(() => p.remove(), 500);
    });

    currentMemoryIndex = (currentMemoryIndex + 1) % memories.length;
    const memory = memories[currentMemoryIndex];

    const polaroid = document.createElement('div');
    polaroid.className = 'polaroid-card';
    
    polaroid.style.opacity = '0';
    polaroid.style.transform = `scale(0.8) rotate(-10deg)`;

    const inner = document.createElement('div');
    inner.className = 'polaroid-inner';
    
    const front = document.createElement('div');
    front.className = 'polaroid-front';
    
    const img = document.createElement('img');
    if (memory.src.startsWith("http")) {
        img.src = memory.src;
    } else {
        img.src = IMAGE_BASE_URL + memory.src;
    }
    img.draggable = false;
    img.onerror = () => { img.src = 'https://via.placeholder.com/200x200/ffe4e1/ff69b4?text=Kỷ+niệm+❤️'; };
    
    const pin = document.createElement('div');
    pin.className = 'polaroid-pin';
    pin.innerHTML = '📌';
    
    const textFront = document.createElement('div');
    textFront.className = 'polaroid-text-front';
    textFront.innerText = memory.text;
    
    front.appendChild(pin);
    front.appendChild(img);
    front.appendChild(textFront);

    inner.appendChild(front);
    polaroid.appendChild(inner);
    document.body.appendChild(polaroid);

    setTimeout(() => {
        polaroid.style.opacity = '1';
        polaroid.style.transform = `scale(1) rotate(-3deg)`;
    }, 50);

    polaroid.addEventListener('click', (e) => {
        showNextPolaroid();
    });

    clearInterval(polaroidInterval);
    polaroidInterval = setInterval(showNextPolaroid, 30000);
}

window.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 800);
});

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const playlistBtn = document.createElement("button");
playlistBtn.className = "nav-btn";
playlistBtn.id = "playlist-btn";
playlistBtn.innerHTML = "☰";
playlistBtn.title = "Playlist";
nextBtn.parentNode.insertBefore(playlistBtn, nextBtn.nextSibling);

const shuffleBtn = document.createElement("button");
shuffleBtn.className = "nav-btn";
shuffleBtn.id = "shuffle-btn";
shuffleBtn.innerHTML = "⇆";
shuffleBtn.title = "Linear";
shuffleBtn.style.color = "white";
nextBtn.parentNode.insertBefore(shuffleBtn, playlistBtn);

shuffleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (playlist.length === 0) return;
    isShuffle = !isShuffle;
    shuffleBtn.title = isShuffle ? "Shuffle" : "Linear";
    shuffleBtn.style.color = isShuffle ? "#d45b79" : "white";
    if (isShuffle) {
        unplayedTracks = Array.from({length: playlist.length}, (_, i) => i).filter(i => i !== currentTrackIndex);
        trackHistory = [currentTrackIndex];
    }
});

const playlistUI = document.createElement('div');
playlistUI.className = 'playlist-ui';
document.body.appendChild(playlistUI);

let playlistHideTimeout;

const playlistStyle = document.createElement('style');
playlistStyle.innerHTML = `
    .playlist-tabs {
        display: block;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        padding: 10px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        scrollbar-width: none;
        -ms-overflow-style: none;
        width: 100%;
        box-sizing: border-box;
        flex-shrink: 0;
    }
    .playlist-tabs::-webkit-scrollbar {
        display: none;
    }
    .playlist-tab {
        display: inline-block;
        background: rgba(0, 0, 0, 0.3);
        color: #fff;
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 20px;
        padding: 8px 18px;
        margin-right: 10px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.3s;
        box-sizing: border-box;
        vertical-align: middle;
    }
    .playlist-tab.active, .playlist-tab:hover {
        background: #d45b79;
        color: #fff;
        border-color: #d45b79;
        opacity: 1;
    }
    .playlist-tab.locked {
        background: rgba(0, 0, 0, 0.5);
        opacity: 0.7;
    }
    .playlist-tab.locked:hover:not(.active) {
        opacity: 0.9;
        background: rgba(0, 0, 0, 0.6);
    }
    .playlist-tracks {
        max-height: calc(100% - 60px);
        overflow-y: auto;
        overflow-x: hidden;
        width: 100%;
        box-sizing: border-box;
    }
`;
document.head.appendChild(playlistStyle);

function showCustomModal(message, isPrompt, callback) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0'; overlay.style.left = '0';
    overlay.style.width = '100vw'; overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '999999';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s ease';

    const box = document.createElement('div');
    box.style.background = 'white';
    box.style.padding = '20px';
    box.style.borderRadius = '12px';
    box.style.textAlign = 'center';
    box.style.minWidth = '260px';
    box.style.maxWidth = '80%';
    box.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
    box.style.transform = 'scale(0.8)';
    box.style.transition = 'transform 0.3s ease';
    box.style.fontFamily = 'inherit';

    const title = document.createElement('p');
    title.innerText = message;
    title.style.color = '#333';
    title.style.margin = '0 0 15px 0';
    title.style.fontWeight = 'bold';
    title.style.fontSize = '16px';

    let input;
    if (isPrompt) {
        input = document.createElement('input');
        input.type = 'text';
        input.style.width = '100%';
        input.style.padding = '10px';
        input.style.border = '1px solid #ccc';
        input.style.borderRadius = '6px';
        input.style.marginBottom = '15px';
        input.style.boxSizing = 'border-box';
        input.style.outline = 'none';
        input.style.fontSize = '16px';
        box.appendChild(title);
        box.appendChild(input);
    } else {
        box.appendChild(title);
    }

    const btnRow = document.createElement('div');
    btnRow.style.display = 'flex';
    btnRow.style.gap = '10px';

    if (isPrompt) {
        const btnCancel = document.createElement('button');
        btnCancel.innerText = 'Hủy';
        btnCancel.style.flex = '1';
        btnCancel.style.padding = '10px';
        btnCancel.style.border = 'none';
        btnCancel.style.borderRadius = '6px';
        btnCancel.style.background = '#ccc';
        btnCancel.style.cursor = 'pointer';
        btnCancel.style.fontWeight = 'bold';
        btnCancel.onclick = () => close(null);
        btnRow.appendChild(btnCancel);
    }

    const btnOk = document.createElement('button');
    btnOk.innerText = 'OK';
    btnOk.style.flex = '1';
    btnOk.style.padding = '10px';
    btnOk.style.border = 'none';
    btnOk.style.borderRadius = '6px';
    btnOk.style.background = '#d45b79';
    btnOk.style.color = '#fff';
    btnOk.style.cursor = 'pointer';
    btnOk.style.fontWeight = 'bold';
    btnOk.onclick = () => close(isPrompt ? input.value : true);
    
    btnRow.appendChild(btnOk);
    box.appendChild(btnRow);
    overlay.appendChild(box);
    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.style.opacity = '1';
        box.style.transform = 'scale(1)';
        if (isPrompt) input.focus();
    }, 10);

    function close(val) {
        overlay.style.opacity = '0';
        box.style.transform = 'scale(0.8)';
        setTimeout(() => {
            document.body.removeChild(overlay);
            if (callback) callback(val);
        }, 300);
    }

    if (isPrompt) {
        input.onkeydown = (e) => {
            if (e.key === 'Enter') close(input.value);
        };
    }
}

function changePlaylist(index) {
    if (currentPlaylistDataIndex === index) return;
    currentPlaylistDataIndex = index;
    playlist = playlistsData[currentPlaylistDataIndex].tracks;
    currentTrackIndex = 0;

    if (playlist.length === 0) {
        audio.pause();
        audio.src = "";
        trackName.innerText = "...";
        currentTimeEl.innerText = "00:00";
        if (durationTimeEl) durationTimeEl.innerText = "00:00";
        playPauseBtn.innerText = "▶︎";
        unplayedTracks = [];
        trackHistory = [];
        renderPlaylist();
        return;
    }

    if (isShuffle) {
        unplayedTracks = Array.from({length: playlist.length}, (_, i) => i);
        const randomIndex = Math.floor(Math.random() * unplayedTracks.length);
        currentTrackIndex = unplayedTracks[randomIndex];
        unplayedTracks.splice(randomIndex, 1);
        trackHistory = [currentTrackIndex];
    } else {
        trackHistory = [];
    }

    loadTrack(currentTrackIndex);
    initVisualizer();
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    playMusic();
    playPauseBtn.innerText = "❚❚";
    renderPlaylist();
}

function renderPlaylist() {
    playlistUI.innerHTML = '';
    
    const header = document.createElement('div');
    header.className = 'playlist-tabs';
    
    header.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            header.scrollLeft += e.deltaY * 0.5;
        }
    }, { passive: false });
    
    playlistsData.forEach((pl, idx) => {
        const tab = document.createElement('button');
        
        let classNames = ['playlist-tab'];
        if (idx === currentPlaylistDataIndex) classNames.push('active');
        if (pl.isLocked && !pl.isUnlocked) classNames.push('locked');
        tab.className = classNames.join(' ');

        tab.innerText = (pl.isLocked && pl.isUnlocked) ? pl.name.replace('H_guitar🔒︎', 'H_guitar') : pl.name;
        
        if (idx === currentPlaylistDataIndex) {
            if (pl.activeBg) {
                tab.style.backgroundColor = pl.activeBg;
                tab.style.borderColor = pl.activeBg;
            }
            if (pl.activeColor) tab.style.color = pl.activeColor;
        }

        tab.onclick = (e) => {
            e.stopPropagation();
            if (pl.isLocked && !pl.isUnlocked) {
                showCustomModal("Anh thích gì nhất?", true, async (pass) => {
                    if (pass === null || pass === "") return;
                    try {
                        const response = await fetch(PASSWORD_BASE_URL + "password.txt", { cache: "no-store" });
                        if (!response.ok) throw new Error("Không thể tải mật khẩu");
                        const correctPassText = await response.text();
                        const validPasswords = correctPassText.split(/\r?\n|,/).map(p => p.trim().toLowerCase()).filter(p => p.length > 0);
                        const userPass = pass.trim().toLowerCase();
                        
                        if (validPasswords.includes(userPass)) {
                            showCustomModal("Mở khóa thành công!", false, () => {
                                pl.isUnlocked = true;
                                changePlaylist(idx);
                                showPlaylistUI();
                            });
                        } else {
                            showCustomModal("Chưa chính xác!", false);
                        }
                    } catch (error) {
                        console.error(error);
                        showCustomModal("Lỗi kiểm tra mật khẩu.", false);
                    }
                });
            } else {
                changePlaylist(idx);
                showPlaylistUI();
            }
        };
        header.appendChild(tab);
    });
    playlistUI.appendChild(header);

    const trackList = document.createElement('div');
    trackList.className = 'playlist-tracks';

    if (playlist.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.style.padding = '20px';
        emptyMsg.style.textAlign = 'center';
        emptyMsg.style.color = '#ccc';
        emptyMsg.innerText = 'Chưa có bài hát nào.';
        trackList.appendChild(emptyMsg);
    } else {
        playlist.forEach((track, index) => {
            const item = document.createElement('div');
            item.className = `playlist-item ${index === currentTrackIndex ? 'playing' : ''}`;
            item.innerText = `${index + 1}. ${track.name}`;
            item.onclick = (e) => {
                e.stopPropagation();
                currentTrackIndex = index;
                if (isShuffle) {
                    const unplayedIndex = unplayedTracks.indexOf(currentTrackIndex);
                    if (unplayedIndex > -1) {
                        unplayedTracks.splice(unplayedIndex, 1);
                    }
                    if (trackHistory[trackHistory.length - 1] !== currentTrackIndex) {
                        trackHistory.push(currentTrackIndex);
                    }
                }
                loadTrack(currentTrackIndex);
                initVisualizer();
                if (audioCtx && audioCtx.state === 'suspended') {
                    audioCtx.resume();
                }
                playMusic();
                playPauseBtn.innerText = "❚❚";
                showPlaylistUI();
            };
            trackList.appendChild(item);
        });
    }
    
    playlistUI.appendChild(trackList);

    const activeItem = trackList.querySelector('.playing');
    if (activeItem) {
        activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function showPlaylistUI() {
    playlistUI.classList.add('active');
    clearTimeout(playlistHideTimeout);
    playlistHideTimeout = setTimeout(() => {
        playlistUI.classList.remove('active');
    }, 5000);
}

playlistBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (playlistUI.classList.contains('active')) {
        playlistUI.classList.remove('active');
    } else {
        renderPlaylist();
        showPlaylistUI();
    }
});

playlistUI.addEventListener('mouseenter', showPlaylistUI);
playlistUI.addEventListener('mouseleave', () => {
    playlistHideTimeout = setTimeout(() => {
        playlistUI.classList.remove('active');
    }, 2000);
});

playlistUI.addEventListener('wheel', showPlaylistUI, { passive: true });
playlistUI.addEventListener('touchstart', showPlaylistUI, { passive: true });
playlistUI.addEventListener('touchmove', showPlaylistUI, { passive: true });

if (playlist.length > 0) {
    loadTrack(currentTrackIndex);
}

function initBirthdayRecorder() {
    const now = new Date();
    if (now.getDate() === B_DAY && (now.getMonth() + 1) === B_MONTH) {
        
        const style = document.createElement('style');
        style.innerHTML = `
            #bday-recorder {
                position: fixed;
                top: 30px;
                left: 50%;
                margin-left: -40px;
                width: 80px;
                height: 120px;
                background: rgba(255, 51, 102, 0.05);
                border: 1px solid rgba(255, 51, 102, 0.3);
                border-radius: 12px;
                box-shadow: inset 0 0 10px rgba(255, 51, 102, 0.1);
                cursor: grab;
                z-index: 10000;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                padding: 15px 0;
                box-sizing: border-box;
                user-select: none;
                touch-action: none;
                transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s;
                animation: dropIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            }
            @keyframes dropIn {
                0% { transform: translateY(-200px) rotate(-15deg); opacity: 0; }
                100% { transform: translateY(0) rotate(0deg); opacity: 1; }
            }
            #bday-recorder:active {
                cursor: grabbing;
            }
            #bday-recorder.dragging {
                transform: scale(1.15) rotate(8deg);
                box-shadow: 0 20px 30px rgba(255, 51, 102, 0.3);
                transition: transform 0.1s, box-shadow 0.1s;
            }
            .recorder-tape {
                width: 60px;
                height: 25px;
                background: rgba(255, 51, 102, 0.05);
                border-radius: 5px;
                border: 1px solid rgba(255, 51, 102, 0.3);
                display: flex;
                align-items: center;
                justify-content: space-around;
                padding: 0 5px;
                box-sizing: border-box;
            }
            .tape-wheel {
                width: 15px;
                height: 15px;
                background: #ffffff;
                border-radius: 50%;
                position: relative;
            }
            .tape-wheel::after {
                content: '';
                position: absolute;
                top: 50%; left: 50%;
                transform: translate(-50%, -50%);
                width: 5px;
                height: 5px;
                background: #000000;
                border-radius: 50%;
            }
            .recorder-label {
                font-size: 10px;
                color: #ffffff;
                font-weight: bold;
                text-align: center;
                margin-top: -5px;
                text-shadow: 0 1px 2px rgba(0,0,0,0.3);
            }
            .recorder-btn {
                width: 35px;
                height: 35px;
                border-radius: 50%;
                background: rgba(255, 51, 102, 0.05);
                display: flex;
                align-items: center;
                justify-content: center;
                color: #ffffff;
                font-size: 16px;
                box-shadow: 0 3px 6px rgba(0,0,0,0.2);
                transition: all 0.2s;
            }
            .recorder-btn.playing {
                animation: pulse-gold 1.5s infinite;
                color: #ffffff;
                border-color: #ff3b3b;
            }
            .playing .tape-wheel {
                animation: spin 2s linear infinite;
            }
            @keyframes pulse-gold {
                0% { box-shadow: 0 0 0 0 rgb(255, 255, 255); }
                70% { box-shadow: 0 0 0 15px rgba(218, 165, 32, 0); }
                100% { box-shadow: 0 0 0 0 rgba(218, 165, 32, 0); }
            }
            @keyframes spin {
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);

        const recorder = document.createElement('div');
        recorder.id = 'bday-recorder';
        recorder.title = 'Nhấn để nghe lời chúc nhé!';

        const tape = document.createElement('div');
        tape.className = 'recorder-tape';
        tape.innerHTML = '<div class="tape-wheel"></div><div class="tape-wheel"></div>';

        const label = document.createElement('div');
        label.className = 'recorder-label';
        label.innerText = '00:00';

        const btn = document.createElement('div');
        btn.className = 'recorder-btn';
        btn.innerHTML = '▶';

        recorder.appendChild(tape);
        recorder.appendChild(label);
        recorder.appendChild(btn);
        document.body.appendChild(recorder);

        const voiceAudioSrc = 'music/SPECIAL/birthday_voice_message.mp3';
        const voiceAudioUrl = voiceAudioSrc.startsWith('http') ? voiceAudioSrc : MUSIC_BASE_URL + voiceAudioSrc;
        const voiceAudio = new Audio(voiceAudioUrl); 
        
        voiceAudio.addEventListener('loadedmetadata', () => {
            if (!isNaN(voiceAudio.duration)) {
                label.innerText = formatTime(voiceAudio.duration);
            }
        });

        voiceAudio.addEventListener('timeupdate', () => {
            if (!isNaN(voiceAudio.duration)) {
                const remaining = Math.max(0, voiceAudio.duration - voiceAudio.currentTime);
                label.innerText = formatTime(remaining);
            }
        });

        let isDragging = false;
        let startX, startY, initialLeft, initialTop;
        let originalVolume = null;
        const DUCK_VOLUME = 0.30;
        
        function onPointerDown(e) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;

            startX = clientX;
            startY = clientY;

            const rect = recorder.getBoundingClientRect();
            initialLeft = rect.left;
            initialTop = rect.top;

            recorder.style.left = initialLeft + 'px';
            recorder.style.top = initialTop + 'px';
            recorder.style.right = 'auto';
            
            isDragging = false;

            document.addEventListener('mousemove', onPointerMove);
            document.addEventListener('mouseup', onPointerUp);
            document.addEventListener('touchmove', onPointerMove, { passive: false });
            document.addEventListener('touchend', onPointerUp);
        }

        function onPointerMove(e) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;

            const dx = clientX - startX;
            const dy = clientY - startY;

            if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                if (!isDragging) {
                    isDragging = true;
                    recorder.classList.add('dragging');
                }
                e.preventDefault();
                
                let newLeft = initialLeft + dx;
                let newTop = initialTop + dy;
                
                const maxX = window.innerWidth - recorder.offsetWidth;
                const maxY = window.innerHeight - recorder.offsetHeight;
                
                newLeft = Math.max(0, Math.min(newLeft, maxX));
                newTop = Math.max(0, Math.min(newTop, maxY));

                recorder.style.left = newLeft + 'px';
                recorder.style.top = newTop + 'px';
            }
        }

        function onPointerUp(e) {
            document.removeEventListener('mousemove', onPointerMove);
            document.removeEventListener('mouseup', onPointerUp);
            document.removeEventListener('touchmove', onPointerMove);
            document.removeEventListener('touchend', onPointerUp);

            if (isDragging) {
                recorder.classList.remove('dragging');
            } else {
                togglePlay();
            }
            isDragging = false;
        }

        function togglePlay() {
            if (voiceAudio.paused) {
                voiceAudio.currentTime = 0;
                
                if (audio && !audio.paused) {
                    originalVolume = audio.volume;
                    if (originalVolume > DUCK_VOLUME) {
                        audio.volume = DUCK_VOLUME;
                    }
                } else {
                    originalVolume = null;
                }
                voiceAudio.play().catch(err => console.log("Lỗi phát audio:", err));
                btn.innerHTML = '❚❚';
                recorder.classList.add('playing');
                btn.classList.add('playing');
            } else {
                voiceAudio.pause();
                voiceAudio.currentTime = 0; 
                if (!isNaN(voiceAudio.duration)) {
                    label.innerText = formatTime(voiceAudio.duration);
                }
                btn.innerHTML = '▶';
                recorder.classList.remove('playing');
                btn.classList.remove('playing');
                if (originalVolume !== null && audio && !audio.paused) {
                    audio.volume = originalVolume;
                    originalVolume = null;
                }
            }
        }

        voiceAudio.addEventListener('ended', () => {
            if (!isNaN(voiceAudio.duration)) {
                label.innerText = formatTime(voiceAudio.duration);
            }
            btn.innerHTML = '▶';
            recorder.classList.remove('playing');
            btn.classList.remove('playing');
            if (originalVolume !== null && audio && !audio.paused) {
                audio.volume = originalVolume;
                originalVolume = null;
            }
        });

        recorder.addEventListener('mousedown', onPointerDown);
        recorder.addEventListener('touchstart', onPointerDown, { passive: false });
    }
}

function initAlbum() {
    const style = document.createElement('style');
    style.innerHTML = `
        #album-btn {
            position: fixed;
            top: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 1000;
            font-size: 26px;
            transition: all 0.3s ease;
            backdrop-filter: blur(5px);
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
        #album-btn:hover {
            background: #d45b79;
            border-color: #d45b79;
            transform: scale(1.1);
        }
        #album-hover-text {
            position: fixed;
            top: 41px;
            right: 90px;
            color: #d45b79;
            padding: 6px 14px;
            border-radius: 15px;
            font-size: 15px;
            font-weight: bold;
            letter-spacing: 1px;
            white-space: nowrap;
            opacity: 0;
            transform: translateX(30px);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            pointer-events: none;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            z-index: 999;
        }
        #album-btn:hover + #album-hover-text {
            opacity: 1;
            transform: translateX(0);
        }
        #album-modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.8);
            width: 85vw;
            height: 85vh;
            max-width: 1200px;
            background: rgba(20, 20, 20, 0.95);
            border: 2px solid rgba(255, 255, 255, 0.15);
            border-radius: 20px;
            z-index: 999999;
            display: flex;
            flex-direction: column;
            opacity: 0;
            pointer-events: none;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 15px 40px rgba(0,0,0,0.6);
            backdrop-filter: blur(15px);
        }
        #album-modal.active {
            opacity: 1;
            pointer-events: auto;
            transform: translate(-50%, -50%) scale(1);
        }
        #album-close {
            position: absolute;
            top: 20px;
            right: 25px;
            font-size: 24px;
            color: #fff;
            cursor: pointer;
            transition: 0.3s;
            z-index: 10;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
        }
        #album-close:hover {
            background: #d45b79;
            transform: scale(1.3);
        }
        .album-header {
            text-align: center;
            padding: 25px;
            font-size: 26px;
            color: #fff;
            font-weight: bold;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            letter-spacing: 1px;
        }
        .album-content {
            flex: 1;
            overflow-y: auto;
            padding: 30px;
            scrollbar-width: thin;
            scrollbar-color: #d45b79 rgba(0,0,0,0.2);
        }
        .album-content::-webkit-scrollbar {
            width: 8px;
        }
        .album-content::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.2);
            border-radius: 10px;
        }
        .album-content::-webkit-scrollbar-thumb {
            background: #d45b79;
            border-radius: 10px;
        }
        .timeline-year-section {
            margin-bottom: 40px;
        }
        .timeline-year-header {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 20px;
            position: relative;
        }
        .timeline-year-line {
            flex: 1;
            height: 2px;
            background: linear-gradient(90deg, #d45b79, transparent);
        }
        .timeline-year-text {
            font-size: 28px;
            font-weight: bold;
            color: #d45b79;
            text-shadow: 0 0 10px rgba(212, 91, 121, 0.5);
            white-space: nowrap;
        }
        .timeline-photos {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            padding: 0 10px;
        }
        .timeline-photo-item {
            position: relative;
            aspect-ratio: 1;
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.3s, box-shadow 0.3s;
            background: #fff;
            box-shadow: 0 6px 15px rgba(0,0,0,0.3);
        }
        .timeline-photo-item:hover {
            transform: translateY(-8px) scale(1.03) rotate(1deg);
            box-shadow: 0 12px 25px rgba(0,0,0,0.4);
            z-index: 2;
        }
        .timeline-photo-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s;
        }
        .timeline-photo-item:hover img {
            transform: scale(1.1);
        }
        .timeline-photo-caption {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 10px;
            background: linear-gradient(transparent, rgba(0,0,0,0.8));
            color: #fff;
            font-size: 14px;
            text-align: center;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .timeline-photo-item:hover .timeline-photo-caption {
            opacity: 1;
        }
        #album-lightbox {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(10, 10, 10, 0.85);
            backdrop-filter: blur(12px);
            border-radius: 18px;
            z-index: 100;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s ease;
        }
        #album-lightbox.active {
            opacity: 1;
            pointer-events: auto;
        }
        #album-lightbox-img {
            max-width: 85%;
            max-height: 70%;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            transform: scale(0.8);
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            object-fit: contain;
        }
        #album-lightbox.active #album-lightbox-img {
            transform: scale(1);
        }
        #album-lightbox-caption {
            color: #fff;
            font-size: 20px;
            margin-top: 25px;
            font-weight: 600;
            letter-spacing: 0.5px;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s;
            text-align: center;
            padding: 0 20px;
            text-shadow: 0 2px 5px rgba(0,0,0,0.8);
        }
        #album-lightbox.active #album-lightbox-caption {
            opacity: 1;
            transform: translateY(0);
        }
        #album-lightbox-close {
            position: absolute;
            top: 20px; right: 25px;
            color: #fff; font-size: 24px; cursor: pointer;
            transition: 0.3s;
            z-index: 110;
            width: 30px; height: 30px;
            display: flex; align-items: center; justify-content: center;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
        }
        #album-lightbox-close:hover {
            background: #d45b79;
            transform: rotate(90deg);
        }
        @media (max-width: 768px) {
            .timeline-photos {
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                gap: 15px;
            }
            .timeline-year-text {
                font-size: 22px;
            }
        }
    `;
    document.head.appendChild(style);

    const btn = document.createElement('div');
    btn.id = 'album-btn';
    btn.innerHTML = '📓';
    document.body.appendChild(btn);

    const hoverText = document.createElement('div');
    hoverText.id = 'album-hover-text';
    hoverText.innerText = 'ALBUM ẢNH';
    document.body.appendChild(hoverText);

    const modal = document.createElement('div');
    modal.id = 'album-modal';

    const closeBtn = document.createElement('div');
    closeBtn.id = 'album-close';
    closeBtn.innerHTML = '✖';
    
    const header = document.createElement('div');
    header.className = 'album-header';
    header.innerText = 'ALBUM ẢNH';

    const content = document.createElement('div');
    content.className = 'album-content';

    const lightbox = document.createElement('div');
    lightbox.id = 'album-lightbox';

    const lbClose = document.createElement('div');
    lbClose.id = 'album-lightbox-close';
    lbClose.innerHTML = '✖';

    const lbImg = document.createElement('img');
    lbImg.id = 'album-lightbox-img';
    lbImg.draggable = false;

    const lbCaption = document.createElement('div');
    lbCaption.id = 'album-lightbox-caption';

    lightbox.appendChild(lbClose);
    lightbox.appendChild(lbImg);
    lightbox.appendChild(lbCaption);

    function groupPhotosByYear(photos) {
        const grouped = {};
        photos.forEach(photo => {
            const year = photo.year || 'Khác';
            if (!grouped[year]) {
                grouped[year] = [];
            }
            grouped[year].push(photo);
        });

        const sortedYears = Object.keys(grouped).sort((a, b) => {
            if (a === 'Khác') return 1;
            if (b === 'Khác') return -1;
            return b.localeCompare(a);
        });

        return sortedYears.map(year => ({
            year: year,
            photos: grouped[year]
        }));
    }

    const timelineData = groupPhotosByYear(albumPhotos);

    timelineData.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'timeline-year-section';

        const headerDiv = document.createElement('div');
        headerDiv.className = 'timeline-year-header';
        headerDiv.innerHTML = `
            <div class="timeline-year-line" style="transform: rotate(180deg);"></div>
            <div class="timeline-year-text">${section.year}</div>
            <div class="timeline-year-line"></div>
        `;
        sectionDiv.appendChild(headerDiv);

        const photosGrid = document.createElement('div');
        photosGrid.className = 'timeline-photos';

        section.photos.forEach(photo => {
            const photoItem = document.createElement('div');
            photoItem.className = 'timeline-photo-item';

            const img = document.createElement('img');
            img.src = photo.src.startsWith("http") ? photo.src : IMAGE_BASE_URL + photo.src;
            img.draggable = false;
            img.loading = "lazy";
            img.onerror = () => { img.src = 'https://via.placeholder.com/200x200/ffe4e1/ff69b4?text=Kỷ+niệm+❤️'; };

            const caption = document.createElement('div');
            caption.className = 'timeline-photo-caption';
            caption.innerText = photo.text;

            photoItem.appendChild(img);
            photoItem.appendChild(caption);

            photoItem.addEventListener('click', () => {
                lbImg.src = img.src;
                lbCaption.innerText = photo.text;
                lightbox.classList.add('active');
            });

            photosGrid.appendChild(photoItem);
        });

        sectionDiv.appendChild(photosGrid);
        content.appendChild(sectionDiv);
    });

    modal.appendChild(closeBtn);
    modal.appendChild(header);
    modal.appendChild(content);
    modal.appendChild(lightbox);
    document.body.appendChild(modal);

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('active');
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.remove('active');
    });
    
    lbClose.addEventListener('click', (e) => {
        e.stopPropagation();
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

function getZodiacSign(day, month) {
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Bạch Dương ♈︎";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Kim Ngưu ♉︎";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) return "Song Tử ♊︎";
    if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) return "Cự Giải ♋︎";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Sư Tử ♌︎";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Xử Nữ ♍︎";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Thiên Bình ♎︎";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Bọ Cạp ♏︎";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Nhân Mã ♐︎";
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Ma Kết ♑︎";
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Bảo Bình ♒︎";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Song Ngư ♓︎";
    return "Không xác định";
}

function initResume() {
    const profiles = {
        huyen: {
            title: "Lê Đặng Thanh Huyền",
            avatar: "picture/album/avatar_huyen.jpg", 
            details: [
                { label: "Biệt danh", value: "Bum" },
                { label: "Ngày sinh", value: "29/05/2007" },
                { label: "Cung hoàng đạo", value: getZodiacSign(29, 5) },
                { label: "Nhóm máu", value: "O+" },
            ]
        },
        me: {
            title: "Trần Gia Hạo",
            avatar: "picture/album/avatar_hao.jpg", 
            details: [
                { label: "Biệt danh", value: "Gia Heo" },
                { label: "Ngày sinh", value: "07/05/2007" },
                { label: "Cung hoàng đạo", value: getZodiacSign(7, 5) },
                { label: "Nhóm máu", value: "A+" },
            ]
        },
    };

    const style = document.createElement('style');
    style.innerHTML = `
        #resume-btn {
            position: fixed;
            top: 100px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 1000;
            font-size: 26px;
            transition: all 0.3s ease;
            backdrop-filter: blur(5px);
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
        #resume-btn:hover {
            background: #d45b79;
            border-color: #d45b79;
            transform: scale(1.1);
        }
        #resume-hover-text {
            position: fixed;
            top: 111px;
            right: 90px;
            color: #d45b79;
            padding: 6px 14px;
            border-radius: 15px;
            font-size: 15px;
            font-weight: bold;
            letter-spacing: 1px;
            white-space: nowrap;
            opacity: 0;
            transform: translateX(30px);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            pointer-events: none;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            z-index: 999;
        }
        #resume-btn:hover + #resume-hover-text {
            opacity: 1;
            transform: translateX(0);
        }
        #resume-modal {
            position: fixed;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%) scale(0.8);
            width: 85vw; height: 85vh;
            max-width: 1000px;
            background: rgba(20, 20, 20, 0.95);
            border: 2px solid rgba(255, 255, 255, 0.15);
            border-radius: 20px;
            z-index: 999999;
            display: flex; flex-direction: column;
            opacity: 0; pointer-events: none;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 15px 40px rgba(0,0,0,0.6);
            backdrop-filter: blur(15px);
        }
        #resume-modal.active {
            opacity: 1; pointer-events: auto;
            transform: translate(-50%, -50%) scale(1);
        }
        #resume-close {
            position: absolute; top: 20px; right: 25px;
            font-size: 24px; color: #fff; cursor: pointer;
            transition: 0.3s; z-index: 10;
            width: 30px; height: 30px;
            display: flex; align-items: center; justify-content: center;
            background: rgba(255, 255, 255, 0.1); border-radius: 50%;
        }
        #resume-close:hover {
            background: #d45b79; transform: scale(1.3);
        }
        .resume-header {
            text-align: center; padding: 25px; font-size: 26px;
            color: #fff; font-weight: bold;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            letter-spacing: 1px; flex-shrink: 0;
        }
        .resume-content {
            display: flex; flex-direction: row; gap: 20px;
            padding: 25px; height: calc(100% - 85px);
            box-sizing: border-box; overflow: hidden;
        }
        .profile-card {
            flex: 1;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px; padding: 25px;
            display: flex; flex-direction: column; align-items: center;
            overflow-y: auto; scrollbar-width: thin;
            scrollbar-color: #d45b79 rgba(0,0,0,0.2);
        }
        .profile-card::-webkit-scrollbar { width: 6px; }
        .profile-card::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); border-radius: 10px; }
        .profile-card::-webkit-scrollbar-thumb { background: #d45b79; border-radius: 10px; }
        
        .profile-avatar {
            width: 140px; height: 140px; border-radius: 50%;
            object-fit: cover; border: 4px solid #d45b79;
            margin-bottom: 15px; box-shadow: 0 4px 15px rgba(212, 91, 121, 0.4);
            flex-shrink: 0;
        }
        .profile-title {
            font-size: 22px; font-weight: bold; color: #d45b79;
            margin-bottom: 25px; text-transform: uppercase; letter-spacing: 1px;
        }
        .profile-details {
            width: 100%; display: flex; flex-direction: column; gap: 12px;
        }
        .profile-item {
            background: rgba(0, 0, 0, 0.4); border-radius: 10px;
            padding: 12px 15px; border-left: 4px solid #d45b79;
            transition: transform 0.2s;
        }
        .profile-item:hover { transform: translateX(5px); }
        .profile-label {
            font-size: 12px; color: #ffb6c1; margin-bottom: 4px;
            text-transform: uppercase; letter-spacing: 0.5px;
        }
        .profile-value {
            font-size: 16px; color: #fff; font-weight: 500; line-height: 1.4;
        }
        @media (max-width: 768px) {
            .resume-content { flex-direction: column; overflow-y: auto; gap: 20px;}
            .profile-card { overflow-y: visible; }
            #resume-modal { height: 90vh; width: 95vw; }
        }
    `;
    document.head.appendChild(style);

    const btn = document.createElement('div');
    btn.id = 'resume-btn';
    btn.innerHTML = '📝';
    document.body.appendChild(btn);

    const hoverText = document.createElement('div');
    hoverText.id = 'resume-hover-text';
    hoverText.innerText = 'SƠ YẾU LÍ LỊCH';
    document.body.appendChild(hoverText);

    const modal = document.createElement('div');
    modal.id = 'resume-modal';

    const closeBtn = document.createElement('div');
    closeBtn.id = 'resume-close';
    closeBtn.innerHTML = '✖';
    
    const header = document.createElement('div');
    header.className = 'resume-header';
    header.innerText = 'SƠ YẾU LÍ LỊCH';

    const content = document.createElement('div');
    content.className = 'resume-content';

    function createProfileCard(data) {
        const card = document.createElement('div');
        card.className = 'profile-card';

        card.innerHTML = `
            <img class="profile-avatar" src="${data.avatar.startsWith('http') ? data.avatar : `${IMAGE_BASE_URL}${data.avatar}?v=${new Date().getTime()}`}" 
                 draggable="false" onerror="this.src='https://via.placeholder.com/150/ffe4e1/ff69b4?text=Avatar'">
            <div class="profile-title">${data.title}</div>
            <div class="profile-details">
                ${data.details.map(item => `
                    <div class="profile-item">
                        <div class="profile-label">${item.label}</div>
                        <div class="profile-value">${item.value}</div>
                    </div>
                `).join('')}
            </div>
        `;
        return card;
    }

    content.appendChild(createProfileCard(profiles.huyen));
    content.appendChild(createProfileCard(profiles.me));

    modal.append(closeBtn, header, content);
    document.body.appendChild(modal);

    btn.addEventListener('click', (e) => { e.stopPropagation(); modal.classList.add('active'); });
    closeBtn.addEventListener('click', (e) => { e.stopPropagation(); modal.classList.remove('active'); });
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
}

function scheduleMidnightReload() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
    const msUntilMidnight = tomorrow - now;
    
    setTimeout(() => {
        window.location.reload();
    }, msUntilMidnight + 1000);
}

let wakeLock = null;

async function requestWakeLock() {
    try {
        if ('wakeLock' in navigator) {
            wakeLock = await navigator.wakeLock.request('screen');
            wakeLock.addEventListener('release', () => {
                console.log('Screen Wake Lock được giải phóng');
            });
        }
    } catch (err) {
        console.error(`Lỗi Wake Lock: ${err.name}, ${err.message}`);
    }
}

function initWakeLock() {
    requestWakeLock();
    setInterval(requestWakeLock, 60000);
}

window.addEventListener('click', initWakeLock, { once: true });

function initDistanceMap() {
    const style = document.createElement('style');
    style.innerHTML = `
        #distance-btn {
            position: fixed;
            top: 170px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 1000;
            font-size: 26px;
            transition: all 0.3s ease;
            backdrop-filter: blur(5px);
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
        #distance-btn:hover {
            background: #d45b79;
            border-color: #d45b79;
            transform: scale(1.1);
        }
        #distance-hover-text {
            position: fixed;
            top: 181px;
            right: 90px;
            color: #d45b79;
            padding: 6px 14px;
            border-radius: 15px;
            font-size: 15px;
            font-weight: bold;
            letter-spacing: 1px;
            white-space: nowrap;
            opacity: 0;
            transform: translateX(30px);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            pointer-events: none;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            z-index: 999;
        }
        #distance-btn:hover + #distance-hover-text {
            opacity: 1;
            transform: translateX(0);
        }
        #map-modal {
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.8);
            width: 85vw; height: 85vh; max-width: 1000px; background: rgba(20, 20, 20, 0.95);
            border: 2px solid rgba(255, 255, 255, 0.15); border-radius: 20px; z-index: 999999;
            display: flex; flex-direction: column; opacity: 0; pointer-events: none;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 15px 40px rgba(0,0,0,0.6); backdrop-filter: blur(15px); overflow: hidden;
        }
        #map-modal.active { opacity: 1; pointer-events: auto; transform: translate(-50%, -50%) scale(1); }
        #map-close {
            position: absolute; top: 20px; right: 25px; font-size: 24px; color: #fff; cursor: pointer;
            transition: 0.3s; z-index: 10; width: 30px; height: 30px; display: flex;
            align-items: center; justify-content: center; background: rgba(0, 0, 0, 0.5); border-radius: 50%;
        }
        #map-close:hover { background: #d45b79; transform: scale(1.3); }
        .map-header {
            text-align: center; padding: 20px; font-size: 22px; color: #fff; font-weight: bold;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1); letter-spacing: 1px; flex-shrink: 0;
            background: rgba(0, 0, 0, 0.3);
        }
        .map-content { 
            flex: 1; width: 100%; position: relative; background: #222; 
            display: flex; align-items: center; justify-content: center; color: #fff; font-size: 16px;
        }
        .map-iframe { 
            width: 100%; height: 100%; border: none; position: absolute; 
            top: 0; left: 0; opacity: 0; transition: opacity 0.5s;
        }
        .map-controls {
            display: flex; flex-direction: column; gap: 10px; padding: 15px;
            background: rgba(0, 0, 0, 0.4); border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .map-controls-row {
            display: flex; gap: 10px;
        }
        .map-input, .map-select, .map-btn {
            padding: 10px; border: none; border-radius: 8px; font-size: 14px; outline: none;
            box-sizing: border-box;
        }
        .map-input {
            flex: 1; background: rgba(255, 255, 255, 0.9); color: #333; font-weight: bold;
        }
        .map-select {
            background: rgba(255, 255, 255, 0.9); color: #333; cursor: pointer; font-weight: bold;
        }
        .map-btn {
            background: #d45b79; color: #fff; font-weight: bold; cursor: pointer; transition: 0.2s;
            text-align: center; width: 100%;
        }
        .map-btn:hover { background: #c54c6a; transform: scale(1.02); }
        @media (max-width: 480px) {
            .map-controls-row { flex-direction: column; }
        }
    `;
    document.head.appendChild(style);

    const btn = document.createElement('div');
    btn.id = 'distance-btn';
    btn.innerHTML = '📍';
    document.body.appendChild(btn);

    const hoverText = document.createElement('div');
    hoverText.id = 'distance-hover-text';
    hoverText.innerText = 'BẢN ĐỒ';
    document.body.appendChild(hoverText);

    const modal = document.createElement('div');
    modal.id = 'map-modal';

    const closeBtn = document.createElement('div');
    closeBtn.id = 'map-close';
    closeBtn.innerHTML = '✖';

    const header = document.createElement('div');
    header.className = 'map-header';
    header.innerText = 'BẢN ĐỒ';

    const controls = document.createElement('div');
    controls.className = 'map-controls';
    controls.innerHTML = `
        <div class="map-controls-row">
            <input type="text" id="map-origin-input" class="map-input" placeholder="Nhập điểm xuất phát...">
        </div>
        <div class="map-controls-row">
            <input type="text" id="map-dest-input" class="map-input" placeholder="Nhập điểm đến...">
        </div>
        <div class="map-controls-row">
            <select id="map-mode-select" class="map-select">
                <option value="bicycling">Xe máy</option>
                <option value="driving">Xe ô tô</option>
                <option value="walking">Đi bộ</option>
                <option value="transit">Xe công cộng</option>
            </select>
            <button id="map-update-preview" class="map-btn">XEM TRƯỚC</button>
        </div>
        <button id="map-start-nav" class="map-btn">DẪN ĐƯỜNG</button>
    `;

    const content = document.createElement('div');
    content.className = 'map-content';
    content.innerHTML = '<span id="map-status">Đang thu thập định vị GPS...</span>';

    const iframe = document.createElement('iframe');
    iframe.className = 'map-iframe';
    iframe.allowFullscreen = true;
    content.appendChild(iframe);
    iframe.onload = () => { iframe.style.opacity = 1; };

    modal.appendChild(closeBtn);
    modal.appendChild(header);
    modal.appendChild(controls);
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    let currentUserLat = null;
    let currentUserLon = null;

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('active');
        
        const destInput = document.getElementById('map-dest-input');
        const modeSelect = document.getElementById('map-mode-select');
        const navBtn = document.getElementById('map-start-nav');
        const statusSpan = document.getElementById('map-status');
        const originInput = document.getElementById('map-origin-input');
        const previewBtn = document.getElementById('map-update-preview');

        const getOrigin = () => {
            const originValue = originInput.value.trim();
            if (originValue) return originValue;
            if (currentUserLat && currentUserLon) return `${currentUserLat},${currentUserLon}`;
            return null;
        };

        const getDestination = () => {
            const destValue = destInput.value.trim();
            if (destValue) return destValue;
            return null;
        };

        const updatePreview = () => {
            const origin = getOrigin();
            const dest = getDestination();

            if (!origin && !dest) {
                showCustomModal("Nhập điểm xuất phát hoặc điểm đến để xem trước", false);
                return;
            }
            
            if(statusSpan) statusSpan.style.display = 'none';
            iframe.style.opacity = 0;

            let mapUrl = '';

            if (origin && dest) {
                let dirflg = 'd';
                if (modeSelect.value === 'walking') dirflg = 'w';
                if (modeSelect.value === 'transit') dirflg = 'r';
                if (modeSelect.value === 'bicycling') dirflg = 'b';
                mapUrl = `https://maps.google.com/maps?f=d&saddr=${encodeURIComponent(origin)}&daddr=${encodeURIComponent(dest)}&dirflg=${dirflg}&hl=vi&ie=UTF8&t=m&z=14&output=embed`;
            } else {
                const query = origin || dest;
                mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&hl=vi&ie=UTF8&t=m&z=14&output=embed`;
            }
            iframe.src = mapUrl;
        };

        if (statusSpan) statusSpan.style.display = 'block';
        iframe.style.opacity = 0;

        iframe.src = `https://maps.google.com/maps?q=Vietnam&hl=vi&ie=UTF8&t=m&z=6&output=embed`;

        if ("geolocation" in navigator) {
            statusSpan.innerText = "Đang lấy vị trí của bạn...";
            navigator.geolocation.getCurrentPosition((position) => {
                currentUserLat = position.coords.latitude;
                currentUserLon = position.coords.longitude;
                statusSpan.innerText = "Đã lấy được vị trí của bạn!";
                originInput.placeholder = "Vị trí hiện tại của bạn";
                iframe.src = `https://maps.google.com/maps?q=${currentUserLat},${currentUserLon}&hl=vi&ie=UTF8&t=m&z=14&output=embed`;
            }, () => {
                statusSpan.innerText = "Không lấy được vị trí. Hãy nhập thủ công.";
                originInput.placeholder = "Nhập điểm xuất phát...";
            }, { enableHighAccuracy: true });
        } else {
            statusSpan.innerText = "Trình duyệt không hỗ trợ GPS.";
        }

        const newPreviewBtn = previewBtn.cloneNode(true);
        previewBtn.parentNode.replaceChild(newPreviewBtn, previewBtn);
        newPreviewBtn.addEventListener('click', updatePreview);

        const newNavBtn = navBtn.cloneNode(true);
        navBtn.parentNode.replaceChild(newNavBtn, navBtn);
        newNavBtn.addEventListener('click', () => {
            const origin = getOrigin();
            const dest = getDestination();

            if (!origin && !dest) {
                showCustomModal("Vui lòng nhập đầy đủ thông tin!", false);
                return;
            }
            if (!origin) {
                showCustomModal("Vui lòng nhập điểm xuất phát!", false);
                return;
            }
            if (!dest) {
                showCustomModal("Vui lòng nhập điểm đến!", false);
                return;
            }

            let mode = modeSelect.value;
            const googleMapsAppUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(dest)}&travelmode=${mode}`;
            window.open(googleMapsAppUrl, '_blank');
        });
    });

    closeBtn.addEventListener('click', (e) => { e.stopPropagation(); modal.classList.remove('active'); });
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
}

function initDragSelectionPrevention() {
    const style = document.createElement('style');
    style.innerHTML = `
        body.drawing {
            -webkit-user-select: none; /* Safari */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* IE/Edge */
            user-select: none; /* Standard */
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('mousedown', (e) => {
        document.body.classList.add('drawing');
    });

    window.addEventListener('mouseup', () => {
        document.body.classList.remove('drawing');
    });
}

let countdownInterval = null;
let countdownTotalSeconds = 0;
let countdownRemaining = 0;
let isTimerRunning = false;
let isTimerAlerting = false;
let originalMusicVolume = null;
const DUCK_VOLUME = 0.20;
let timerAlarmAudio = null;

function initCountdownTimer() {
    const elTimerDisplayBtn = document.createElement('div');
    elTimerDisplayBtn.id = 'timer-btn';
    elTimerDisplayBtn.innerHTML = '00:00:00';
    elTimerDisplayBtn.style.position = 'fixed';
    elTimerDisplayBtn.style.top = 'auto';
    elTimerDisplayBtn.style.bottom = '680px';
    elTimerDisplayBtn.style.right = '30px';
    elTimerDisplayBtn.style.zIndex = '10005';
    document.body.appendChild(elTimerDisplayBtn);
    
    const timerHoverText = document.createElement('div');
    timerHoverText.id = 'timer-hover-text';
    timerHoverText.innerText = 'BỘ ĐẾM NGƯỢC';
    timerHoverText.style.position = 'fixed';
    timerHoverText.style.top = 'auto';
    timerHoverText.style.bottom = '691px';
    timerHoverText.style.right = '175px';
    timerHoverText.style.zIndex = '10005';
    timerHoverText.style.color = '#d45b79';
    timerHoverText.style.padding = '6px 14px';
    timerHoverText.style.borderRadius = '15px';
    timerHoverText.style.fontSize = '15px';
    timerHoverText.style.fontWeight = 'bold';
    timerHoverText.style.letterSpacing = '1px';
    timerHoverText.style.whiteSpace = 'nowrap';
    timerHoverText.style.opacity = '0';
    timerHoverText.style.transform = 'translateX(20px)';
    timerHoverText.style.transition = 'all 0.2s ease';
    timerHoverText.style.pointerEvents = 'none';
    document.body.appendChild(timerHoverText);

    const timerStopHint = document.createElement('div');
    timerStopHint.id = 'timer-stop-hint';
    timerStopHint.innerText = 'Nhấn để dừng';
    timerStopHint.style.position = 'fixed';
    timerStopHint.style.top = 'auto';
    timerStopHint.style.bottom = '630px';
    timerStopHint.style.right = '55px';
    timerStopHint.style.zIndex = '10005';
    document.body.appendChild(timerStopHint);

    const timerModal = document.createElement('div');
    timerModal.id = 'timer-modal';

    const style = document.createElement('style');
    style.innerHTML = `
        #timer-stop-hint {
            color: #ff3366;
            font-size: 13px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            text-shadow: 0 0 8px rgba(255, 51, 102, 0.6);
            pointer-events: none;
            text-align: center;
            width: 90px;
            display: none;
        }
        #timer-stop-hint.active {
            display: block !important;
            animation: bounceAlert 0.6s infinite alternate ease-in-out;
        }
        @keyframes bounceAlert {
            from { transform: translateY(0); opacity: 0.7; }
            to { transform: translateY(6px); opacity: 1; text-shadow: 0 0 15px #ff3366; }
        }
    `;
    document.head.appendChild(style);

    timerModal.innerHTML = `
        <div id="timer-close">✖</div>
        <h3>HẸN GIỜ</h3>
        <div class="timer-inputs">
            <div class="timer-input-group">
                <label>Giờ</label>
                <input type="number" id="timer-hours" min="0" max="99" value="0">
            </div>
            <span class="timer-separator">:</span>
            <div class="timer-input-group">
                <label>Phút</label>
                <input type="number" id="timer-minutes" min="0" max="59" value="0">
            </div>
            <span class="timer-separator">:</span>
            <div class="timer-input-group">
                <label>Giây</label>
                <input type="number" id="timer-seconds" min="0" max="59" value="0">
            </div>
        </div>
        <div class="timer-buttons">
            <button class="timer-btn secondary" id="timer-cancel">Hủy</button>
            <button class="timer-btn primary" id="timer-start">Bắt đầu</button>
        </div>
    `;

    document.body.appendChild(timerModal);

    elTimerDisplayBtn.addEventListener('mouseenter', () => {
        timerHoverText.style.opacity = '1';
        timerHoverText.style.transform = 'translateX(0)';
    });

    elTimerDisplayBtn.addEventListener('mouseleave', () => {
        timerHoverText.style.opacity = '0';
        timerHoverText.style.transform = 'translateX(20px)';
    });

    function toggleTimer() {
        if (isTimerAlerting) {
            stopAlarm();
        } else if (isTimerRunning) {
            cancelTimer();
        } else {
            showTimerModal();
        }
    }

    function showTimerModal() {
        timerModal.classList.add('active');
        document.getElementById('timer-hours').value = '0';
        document.getElementById('timer-minutes').value = '0';
        document.getElementById('timer-seconds').value = '0';
    }

    function hideTimerModal() {
        timerModal.classList.remove('active');
    }

    function startTimer() {
        const hours = parseInt(document.getElementById('timer-hours').value) || 0;
        const minutes = parseInt(document.getElementById('timer-minutes').value) || 0;
        const seconds = parseInt(document.getElementById('timer-seconds').value) || 0;

        countdownTotalSeconds = hours * 3600 + minutes * 60 + seconds;

        if (countdownTotalSeconds <= 0) {
            showCustomModal('Vui lòng nhập thời gian hợp lệ!', false);
            return;
        }

        countdownRemaining = countdownTotalSeconds;
        isTimerRunning = true;
        hideTimerModal();
        updateTimerDisplay();
        startCountdown();
    }

    function startCountdown() {
        if (countdownInterval) clearInterval(countdownInterval);

        countdownInterval = setInterval(() => {
            countdownRemaining--;

            if (countdownRemaining <= 0) {
                countdownRemaining = 0;
                updateTimerDisplay();
                stopCountdown();
                triggerAlarm();
            } else {
                updateTimerDisplay();
            }
        }, 1000);
    }

    function stopCountdown() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
        isTimerRunning = false;
    }

    function cancelTimer() {
        stopCountdown();
        stopAlarm();
        countdownRemaining = 0;
        updateTimerDisplay();
    }

    function updateTimerDisplay() {
        const hours = Math.floor(countdownRemaining / 3600);
        const minutes = Math.floor((countdownRemaining % 3600) / 60);
        const seconds = countdownRemaining % 60;

        const timeStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        elTimerDisplayBtn.innerHTML = `${timeStr}`;
    }

    function triggerAlarm() {
        isTimerAlerting = true;
        elTimerDisplayBtn.classList.add('alert');
        timerHoverText.style.opacity = '0';

        if (audio && !audio.paused) {
            if (audio.volume > DUCK_VOLUME) {
                originalMusicVolume = audio.volume;
                clearInterval(alarmFadeInterval);
                const fadeStep = originalMusicVolume / 20;
                let currentVol = originalMusicVolume;
                alarmFadeInterval = setInterval(() => {
                    currentVol -= fadeStep;
                    if (currentVol <= DUCK_VOLUME) {
                        audio.volume = DUCK_VOLUME;
                        clearInterval(alarmFadeInterval);
                    } else {
                        audio.volume = currentVol;
                    }
                }, 25);
            } else {
                originalMusicVolume = null;
            }
        }

        if (!timerAlarmAudio) {
            timerAlarmAudio = new Audio();
            timerAlarmAudio.loop = true;
        }
        
        if (timerStopHint) timerStopHint.classList.add('active');
        const alarmSrc = 'music/SPECIAL/Alarm.mp3';
        timerAlarmAudio.src = alarmSrc.startsWith('http') ? alarmSrc : MUSIC_BASE_URL + alarmSrc;
        timerAlarmAudio.volume = ALARM_VOLUME;
        timerAlarmAudio.play().catch(err => console.log("Lỗi phát báo thức:", err));
    }

    function stopAlarm() {
        isTimerAlerting = false;
        elTimerDisplayBtn.classList.remove('alert');

        if (timerAlarmAudio && !timerAlarmAudio.paused) {
            timerAlarmAudio.pause();
            timerAlarmAudio.currentTime = 0;
        }

        if (originalMusicVolume !== null && audio && !audio.paused) {
            clearInterval(alarmFadeInterval);
            clearInterval(fadeInterval);

            if (volumeBar) {
                volumeBar.value = originalMusicVolume * 100;
            }
            const fadeStep = (originalMusicVolume - DUCK_VOLUME) / 20;
            let currentVol = DUCK_VOLUME;
            alarmFadeInterval = setInterval(() => {
                currentVol += fadeStep;
                if (currentVol >= originalMusicVolume) {
                    audio.volume = originalMusicVolume;
                    clearInterval(alarmFadeInterval);
                    originalMusicVolume = null; 
                } else {
                    audio.volume = currentVol;
                }
            }, 25);
        } else {
            originalMusicVolume = null;
        }

        if (timerStopHint) timerStopHint.classList.remove('active');
    }

    elTimerDisplayBtn.addEventListener('click', toggleTimer);

    document.getElementById('timer-start').addEventListener('click', startTimer);
    document.getElementById('timer-cancel').addEventListener('click', hideTimerModal);
    document.getElementById('timer-close').addEventListener('click', hideTimerModal);

    timerModal.addEventListener('click', (e) => {
        if (e.target === timerModal) hideTimerModal();
    });
}

function initWeather() {
    const style = document.createElement('style');
    style.innerHTML = `
        #weather-btn {
            position: fixed;
            top: 240px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 1000;
            font-size: 26px;
            transition: all 0.3s ease;
            backdrop-filter: blur(5px);
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
        #weather-btn:hover {
            transform: scale(1.1) !important;
        }
        #weather-hover-text {
            position: fixed;
            top: 251px;
            right: 90px;
            color: #d45b79;
            padding: 6px 14px;
            border-radius: 15px;
            font-size: 15px;
            font-weight: bold;
            letter-spacing: 1px;
            white-space: nowrap;
            opacity: 0;
            transform: translateX(30px);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            pointer-events: none;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            z-index: 999;
        }
        #weather-btn:hover + #weather-hover-text {
            opacity: 1;
            transform: translateX(0);
        }
        #weather-modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.8);
            background: rgba(20, 20, 20, 0.95);
            border: 2px solid rgba(255, 255, 255, 0.15);
            border-radius: 20px;
            z-index: 999999;
            padding: 30px;
            min-width: 320px;
            opacity: 0;
            pointer-events: none;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 15px 40px rgba(0,0,0,0.6);
            backdrop-filter: blur(15px);
        }
        #weather-modal.active {
            opacity: 1;
            pointer-events: auto;
            transform: translate(-50%, -50%) scale(1);
        }
        #weather-close {
            position: absolute;
            top: 15px;
            right: 20px;
            color: #fff;
            font-size: 24px;
            cursor: pointer;
            transition: 0.3s;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
        }
        #weather-close:hover {
            background: #d45b79;
            transform: scale(1.2);
        }
        .weather-header {
            text-align: center;
            padding: 20px;
            font-size: 22px;
            color: #fff;
            font-weight: bold;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            letter-spacing: 1px;
            margin-bottom: 20px;
        }
        .weather-content {
            text-align: center;
            padding: 20px;
        }
        .weather-main-icon {
            font-size: 80px;
            margin-bottom: 20px;
            line-height: 1;
        }
        .weather-temp-large {
            font-size: 48px;
            font-weight: bold;
            color: #fff;
            font-family: 'Courier New', Courier, monospace;
            margin-bottom: 10px;
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
        .weather-description {
            font-size: 18px;
            color: #ffffff;
            text-transform: capitalize;
            margin-bottom: 20px;
        }
        .weather-details {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            margin-top: 20px;
        }
        .weather-detail-item {
            background: rgba(5, 5, 5, 0.4);
            padding: 12px 20px;
            border-radius: 10px;
            min-width: 120px;
        }
        .weather-detail-label {
            font-size: 12px;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .weather-detail-value {
            font-size: 18px;
            color: #fff;
            font-weight: bold;
            font-family: 'Courier New', Courier, monospace;
        }
    `;
    document.head.appendChild(style);

    const btn = document.createElement('div');
    btn.id = 'weather-btn';
    btn.innerHTML = '🌡️';
    document.body.appendChild(btn);

    const hoverText = document.createElement('div');
    hoverText.id = 'weather-hover-text';
    hoverText.innerText = 'THỜI TIẾT';
    document.body.appendChild(hoverText);

    const modal = document.createElement('div');
    modal.id = 'weather-modal';

    const closeBtn = document.createElement('div');
    closeBtn.id = 'weather-close';
    closeBtn.innerHTML = '✖';

    const header = document.createElement('div');
    header.className = 'weather-header';
    header.innerText = 'THỜI TIẾT';

    const content = document.createElement('div');
    content.className = 'weather-content';

    const mainIcon = document.createElement('div');
    mainIcon.className = 'weather-main-icon';
    mainIcon.textContent = '🌡️';

    const tempLarge = document.createElement('div');
    tempLarge.className = 'weather-temp-large';
    tempLarge.textContent = '--°C';

    const description = document.createElement('div');
    description.className = 'weather-description';
    description.textContent = 'Đang tải...';

    const details = document.createElement('div');
    details.className = 'weather-details';

    const detailItems = [
        { label: 'Cảm giác', value: '--°C', id: 'weather-feels' },
        { label: 'Chỉ số UV', value: '--', id: 'weather-uv-index' },
    ];

    detailItems.forEach(item => {
        const detailDiv = document.createElement('div');
        detailDiv.className = 'weather-detail-item';
        detailDiv.innerHTML = `
            <div class="weather-detail-label">${item.label}</div>
            <div class="weather-detail-value" id="${item.id}">${item.value}</div>
        `;
        details.appendChild(detailDiv);
    });

    content.appendChild(mainIcon);
    content.appendChild(tempLarge);
    content.appendChild(description);
    content.appendChild(details);

    modal.appendChild(closeBtn);
    modal.appendChild(header);
    modal.appendChild(content);
    document.body.appendChild(modal);

    btn.addEventListener('mouseenter', () => {
        const currentColor = btn.style.borderColor || 'rgba(255, 255, 255, 0.3)';
        btn.style.background = currentColor;
        btn.style.borderColor = currentColor;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.background = 'rgba(0, 0, 0, 0.4)';
        btn.style.borderColor = btn.dataset.tempColor || 'rgba(255, 255, 255, 0.3)';
    });

    function getWeatherIcon(weatherMain, weatherIconCode) {
        const iconMap = {
            'Clear': '☀️',
            'Clouds': '☁️',
            'Rain': '🌧️',
            'Drizzle': '🌦️',
            'Thunderstorm': '⛈️',
            'Snow': '❄️',
            'Mist': '🌫️',
            'Fog': '🌫️',
            'Haze': '🌫️',
            'Dust': '🌫️',
            'Sand': '🌫️',
            'Ash': '🌫️',
            'Squall': '💨',
            'Tornado': '🌪️'
        };

        if (iconMap[weatherMain]) return iconMap[weatherMain];

        if (weatherIconCode) {
            const code = parseInt(weatherIconCode.substring(0, 2));
            if (code === 1) return '☀️';
            if (code === 2) return '⛅';
            if (code === 3) return '☁️';
            if (code === 4) return '☁️';
            if (code >= 9 && code <= 10) return '🌧️';
            if (code === 11) return '⛈️';
            if (code === 13) return '❄️';
            if (code === 50) return '🌫️';
        }

        return '🌡️';
    }

    function getTempColor(temp) {
        if (temp >= 35) return '#ff3333';
        if (temp >= 30) return '#ff6633';
        if (temp >= 25) return '#ff9933';
        if (temp >= 20) return '#ffcc33';
        if (temp >= 15) return '#ffff33';
        if (temp >= 10) return '#99ff33';
        if (temp >= 5) return '#33ccff';
        if (temp >= 0) return '#3399ff';
        if (temp >= -5) return '#3366ff';
        return '#3333ff';
    }

    function getUvColor(uv) {
        if (uv >= 11) return '#9933ff';
        if (uv >= 8) return '#ff3333';
        if (uv >= 6) return '#ff9933';
        if (uv >= 3) return '#ffcc33';
        if (uv >= 0) return '#99ff33';
        return '#ffffff';
    }

    async function fetchWeather(lat, lon) {
        const WEATHER_CITY = "Ho Chi Minh City";
        let weatherUrl;
        let uvUrl;

        if (lat && lon) {
            weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=vi`;
            uvUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${WEATHER_API_KEY}`;
        } else {
            weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${WEATHER_CITY}&appid=${WEATHER_API_KEY}&units=metric&lang=vi`;
        }

        try {
            const weatherResponse = await fetch(weatherUrl);
            if (!weatherResponse.ok) throw new Error('Lỗi API thời tiết');
            const data = await weatherResponse.json();

            const locationName = data.name || WEATHER_CITY;
            const temp = Math.round(data.main.temp);
            const feelsLike = Math.round(data.main.feels_like);
            const weatherMain = data.weather[0].main;
            const weatherIconCode = data.weather[0].icon;
            const descriptionText = data.weather[0].description;

            let uvIndex = '--';
            if (!uvUrl) {
                const cityLat = data.coord.lat;
                const cityLon = data.coord.lon;
                uvUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${cityLat}&lon=${cityLon}&exclude=minutely,hourly,daily,alerts&appid=${WEATHER_API_KEY}`;
            }

            try {
                const uvResponse = await fetch(uvUrl);
                if (uvResponse.ok) {
                    const uvData = await uvResponse.json();
                    uvIndex = uvData.current.uvi.toFixed(1);
                }
            } catch (uvError) {
                console.error('Lỗi lấy chỉ số UV:', uvError);
            }

            const icon = getWeatherIcon(weatherMain, weatherIconCode);
            const tempColor = getTempColor(temp);

            if (weatherIconCode.includes('n')) {
                uvIndex = '0.0';
            }

            const uvColor = getUvColor(parseFloat(uvIndex));

            header.innerText = `THỜI TIẾT \n\n <${locationName.toUpperCase()}>`;
            btn.innerHTML = icon;
            btn.style.borderColor = tempColor;
            btn.dataset.tempColor = tempColor;
            btn.style.boxShadow = `0 4px 10px rgba(0,0,0,0.3), 0 0 15px ${tempColor}33`;

            mainIcon.textContent = icon;
            tempLarge.textContent = `${temp}°C`;
            tempLarge.style.color = tempColor;
            description.textContent = descriptionText;

            document.getElementById('weather-feels').textContent = `${feelsLike}°C`;
            document.getElementById('weather-feels').style.color = tempColor;
            document.getElementById('weather-uv-index').textContent = `${uvIndex}`;
            document.getElementById('weather-uv-index').style.color = uvColor;

        } catch (error) {
            console.error('Lỗi lấy thời tiết:', error);
            header.innerText = 'THỜI TIẾT';
            btn.innerHTML = '🌡️';
            btn.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            btn.dataset.tempColor = 'rgba(255, 255, 255, 0.3)';
            btn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
            mainIcon.textContent = '🌡️';
            tempLarge.textContent = '--°C';
            tempLarge.style.color = '#fff';
            document.getElementById('weather-feels').style.color = '#fff';
            document.getElementById('weather-uv-index').style.color = '#fff';
            description.textContent = 'Không thể tải thời tiết';
        }
    }

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => fetchWeather(position.coords.latitude, position.coords.longitude),
            () => fetchWeather(),
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    } else {
        fetchWeather();
    }

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('active');
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
}

async function getSimplifiedDeviceInfo() {
    const ua = navigator.userAgent;
    let os = 'Không rõ';
    let deviceType = 'Máy tính';
    let model = '';

    if (navigator.userAgentData) {
        deviceType = navigator.userAgentData.mobile ? 'Điện thoại' : 'Máy tính';
        os = navigator.userAgentData.platform;
    } else {
        if (/Windows/i.test(ua)) os = 'Windows';
        else if (/Macintosh|Mac OS X/i.test(ua)) os = 'macOS';
        else if (/Android/i.test(ua)) os = 'Android';
        else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS';
        else if (/Linux/i.test(ua)) os = 'Linux';

        if (/Mobi|Android|iPhone/i.test(ua)) deviceType = 'Điện thoại';
        else if (/iPad/i.test(ua)) deviceType = 'Máy tính bảng';
    }

    if (navigator.userAgentData) {
        try {
            const uaData = await navigator.userAgentData.getHighEntropyValues(["model"]);
            if (uaData.model) model = uaData.model;
        } catch (error) {
        }
    }
    
    if (!model && /Android/i.test(ua)) {
        const match = ua.match(/;\s?([^;]+?)\s?(Build|;|\))/);
        if (match && match[1]) model = match[1];
    }

    return `${deviceType} (${os})${model ? ` - ${model}` : ''}`;
}

async function sendVisitNotification() {
    let botToken, chatId;
    try {
        const configUrl = TELEGRAM_BOT_URL + "telegram_bot.txt";
        const configResponse = await fetch(configUrl, { cache: "no-store" });
        if (!configResponse.ok) throw new Error("Không thể tải tệp cấu hình bot Telegram.");
        
        const configText = await configResponse.text();
        [botToken, chatId] = configText.split(/\r?\n/).map(line => line.trim());

        if (!botToken || !chatId) throw new Error("Tệp cấu hình bot không hợp lệ.");

        const deviceInfo = await getSimplifiedDeviceInfo();
        const visitorDetails = `Thiết bị: ${deviceInfo}`;

        const message = `❤️ Ai đó vừa ghé thăm HEART! ❤️\n\n${visitorDetails}\n\n[${new Date().toLocaleString('vi-VN')}]`;
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text: message }),
        });
    } catch (error) {
        console.error("Lỗi nghiêm trọng khi gửi thông báo:", error);
        if (botToken && chatId) {
            const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
            await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: chatId, text: `⚠️ Lỗi gửi thông báo: ${error.message}` }),
            });
        }
    }
}

updateCounter();
changeNote();
showPlayer();
showNextPolaroid();
setInterval(createLeaf, 500);
setInterval(changeNote, 8000);
setInterval(updateCounter, 1000);
initWeather();
initBirthdayRecorder();
initAlbum();
initResume();
initDistanceMap();
initDragSelectionPrevention();
initCountdownTimer();
scheduleMidnightReload();
sendVisitNotification();