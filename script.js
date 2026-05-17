const F_DAY = 18, F_MONTH = 1, F_YEAR = 2025;
const B_DAY = 29, B_MONTH = 5, B_YEAR = 2007;

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

const memories = [
    { src: "picture/memory/dalat2025.jpg", text: "Đà Lạt (19/01/2025)" },
    { src: "picture/memory/firstdate.jpg", text: "First date (25/02/2026)" },
    // { src: "picture/memory/.jpg", text: "" },
];

const vnTracks = [
    { name: "Ai ngoài anh - VSTRA, Tyronee", src: "music/VN/Aingoaianh.mp3" },
    { name: "Ấm - sweet liquor", src: "music/VN/Am.mp3" },
    { name: "Chạy khỏi thế giới này - Da LAB, Phương Ly", src: "music/VN/Chaykhoithegioinay.mp3" },
    { name: "Chạy theo em - Nhã, Mihuman", src: "music/VN/Chaytheoem.mp3" },
    { name: "Chuyện đôi ta - Da LAB, Muộii", src: "music/VN/Chuyendoita.mp3" },
    { name: "Cứ chill thôi - Chillies, SUNI, Rhymastic", src: "music/VN/Cuchillthoi.mp3" },
    { name: "Đóa hoa - TeuYungBoy, BIG WIND, DONAL", src: "music/VN/Doahoa.mp3" },
    { name: "Đôi mắt kẻ tình si - GREY D", src: "music/VN/Doimatketinhsi.mp3" },
    { name: "Đưa em về nhà - GREY D, Chillies", src: "music/VN/Duaemvenha.mp3" },
    { name: "Ghét em đi làm ơn - VSTRA, Tyronee", src: "music/VN/Ghetemdilamon.mp3" },
    { name: "Haydeanhduoccungemdau - SIVAN, Kai Đinh", src: "music/VN/Haydeanhduoccungemdau.mp3" },
    { name: "Hông về tình yêu - Khoi Vu", src: "music/VN/Hongvetinhyeu.mp3" },
    { name: "Hôn vào đây đi - VSTRA, Tyronee, hairan, antransax", src: "music/VN/Honvaodaydi.mp3" },
    { name: "Không buông - Hngle, Ari", src: "music/VN/Khongbuong.mp3" },
    { name: "Love my friend - Shayda", src: "music/VN/Lovemyfriend.mp3" },
    { name: "Nằm bên anh - Minh Đinh, Hà An Huy", src: "music/VN/Nambenanh.mp3" },
    { name: "Nước mắt em lau bằng tình yêu mới - Da LAB, Tóc Tiên", src: "music/VN/Nuocmatemlaubangtinhyeumoi.mp3" },
    { name: "Sinh ra đã là thứ đối lập nhau - Da LAB, Badbies", src: "music/VN/Sinhradalathudoilapnhau.mp3" },
    { name: "Sống cho hết đời thanh xuân 3 - BCTM, TNS", src: "music/VN/Songchohetdoithanhxuan3.mp3" },
    { name: "Tâm trí lang thang - Ánh Sáng AZA, Negav", src: "music/VN/Tamtrilangthang.mp3" },
    { name: "Thắc mắc (MĐX) - Thịnh Suy", src: "music/VN/Thacmac(MĐX).mp3" },
    { name: "Thằng điên - JustaTee, Phương Ly", src: "music/VN/Thangdien.mp3" },
    { name: "Thanh xuân - Da LAB", src: "music/VN/Thanhxuan.mp3" },
    { name: "Thích quá rùi nà - Tlinh, Trung Trần", src: "music/VN/Thichquaruina.mp3" },
    { name: "Tìm thấy nhau - SIVAN", src: "music/VN/Timthaynhau.mp3" },
    { name: "Tiny love - Thịnh Suy", src: "music/VN/Tinylove.mp3" },
    { name: "To the moon - Hooligan", src: "music/VN/Tothemoon.mp3" },
    { name: "Trafalgar D.Law -  Don Raemo, Bewata", src: "music/VN/Trafalgardlaw.mp3" },
    { name: "Vaicaunoicokhiennguoithaydoi - GREY D, Tlinh", src: "music/VN/Vaicaunoicokhiennguoithaydoi.mp3" },
    { name: "Vạn vật như muốn ta bên nhau - RIO", src: "music/VN/Vanvatnhumuontabennhau.mp3" },
    { name: "Và thế giới đã mất đi một người cô đơn - Marzuz, Changg", src: "music/VN/Vathegioidamatdimotnguoicodon.mp3" },
    { name: "Wrong times - Dangrangto, Puppy", src: "music/VN/Wrongtimes.mp3" },
    //{ name: "", src: "music/VN/.mp3" },
];

const usukTracks = [
    { name: "Beautiful in white - Westlife", src: "music/US_UK/Beautifulinwhite.mp3" },
    { name: "Hate you - Poylow, BAUWZ", src: "music/US_UK/Hateyou.mp3" },
    { name: "I love you 3000 - Stephanie Poetri", src: "music/US_UK/Iloveyou3000.mp3" },
    { name: "Perfect - Ed Sheeran", src: "music/US_UK/Perfect.mp3" },
    { name: "Save me - Đeamn", src: "music/US_UK/Saveme.mp3" },
    //{ name: "", src: "music/US_UK/.mp3" },
];

const edmTracks = [
    { name: "Masked Heroes - Vexento", src: "music/EDM/Maskedheroes.mp3" },
    { name: "Frisbee - Ahxello", src: "music/EDM/Frisbee.mp3" },
    //{ name: "", src: "music/EDM/.mp3" },
];

const playlistsData = [
    { name: "Tất cả", tracks: [...vnTracks, ...usukTracks] },
    { name: "Nhạc Việt", tracks: vnTracks },
    { name: "Nhạc US-UK", tracks: usukTracks },
    { name: "Nhạc EDM", tracks: edmTracks },
    //{ name: "", tracks:  },
];

let currentPlaylistDataIndex = 0;
let playlist = playlistsData[currentPlaylistDataIndex].tracks;

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
    
    let wish = "";
    if (now.getDate() === B_DAY && (now.getMonth() + 1) === B_MONTH) {
        wish = `🎂 Chúc mừng sinh nhật em yêu (${now.getFullYear() - B_YEAR} tuổi) 🎂`;
    } else if (now.getDate() === 8 && (now.getMonth() + 1) === 3) {
        wish = "🌹 Chúc mừng ngày Quốc Tế Phụ Nữ 8/3 🌹";
    } else if (now.getDate() === 20 && (now.getMonth() + 1) === 10) {
        wish = "💐 Chúc mừng ngày Phụ Nữ Việt Nam 20/10 💐";
    } else if (d === 0 && m === 0 && y > 0) {
        wish = `❤️ Chúc mừng kỷ niệm ${y} năm bên nhau ❤️`;
    }
    document.getElementById('special-wish').innerText = wish;
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
    audio.src = track.src;
    trackName.innerText = track.name;
    seekBar.value = 0;
    currentTimeEl.innerText = "00:00";
    if (typeof renderPlaylist === 'function') renderPlaylist();
}

let fadeInterval;

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
    
    const size = Math.random() * 10 + 5 + 'px';
    leaf.style.width = size;
    leaf.style.height = size;
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
    img.src = memory.src;
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
        tab.className = `playlist-tab ${idx === currentPlaylistDataIndex ? 'active' : ''}`;
        tab.innerText = pl.name;
        tab.onclick = (e) => {
            e.stopPropagation();
            changePlaylist(idx);
            showPlaylistUI();
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

updateCounter();
changeNote();
showPlayer();
showNextPolaroid();
setInterval(createLeaf, 500);
setInterval(changeNote, 8000);
setInterval(updateCounter, 1000);
if (playlist.length > 0) {
    loadTrack(currentTrackIndex);
}