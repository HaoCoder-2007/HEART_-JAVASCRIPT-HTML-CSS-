const F_DAY = 18, F_MONTH = 1, F_YEAR = 2025;
const B_DAY = 29, B_MONTH = 5, B_YEAR = 2007;

const notes = [
    "\"Có em rồi, những ngày bình thường cũng thành đặc biệt\"",
    "\"Em là lý do anh mỉm cười nhiều hơn mỗi ngày\"",
    "\"Cảm ơn em đã xuất hiện trong cuộc đời anh\"",
    "\"Hôm nay em trông rất tuyệt vời, anh chắc chắn thế!\"",
    "\"Dù có chuyện gì, anh vẫn luôn ở đây bên cạnh em\"",
    "\"Cười lên nhé, vì nụ cười của em là đẹp nhất!\"",
    "\"Nếu là mèo, anh sẽ dành 9 mạng ở bên em\"",
    "\"Nhìn Đông nhìn Tây không bằng nhìn em một giây\"",
    "\"Anh yêu em\"",
    "\"Tay anh ấm lắm, em muốn nắm không?\"",
    "\"<3\""
];

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

const playlist = [
    { name: "Ai ngoài anh - VSTRA, Tyronee", src: "music/Aingoaianh.mp3" },
    { name: "Chạy theo em - Nhã, Mihuman", src: "music/Chaytheoem.mp3" },
    { name: "Đóa hoa - TeuYungBoy, BIG WIND, DONAL", src: "music/Doahoa.mp3" },
    { name: "Đôi mắt kẻ tình si - GREY D", src: "music/Doimatketinhsi.mp3" },
    { name: "Đưa em về nhà - GREY D, Chillies", src: "music/Duaemvenha.mp3" },
    { name: "Ghét em đi làm ơn - VSTRA, Tyronee", src: "music/Ghetemdilamon.mp3" },
    { name: "Hông về tình yêu - Khoi Vu", src: "music/Hongvetinhyeu.mp3" },
    { name: "Hôn vào đây đi - VSTRA, Tyronee, hairan, antransax", src: "music/Honvaodaydi.mp3" },
    { name: "Love my friend - Shayda", src: "music/Lovemyfriend.mp3" },
    { name: "Ngã tư không đèn - TRANG, KHOA VŨ", src: "music/Ngatukhongden.mp3" },
    { name: "Sống cho hết đời thanh xuân 3 - BCTM, TNS", src: "music/Songchohetdoithanhxuan3.mp3" },
    { name: "Tâm trí lang thang - Ánh Sáng AZA, Negav", src: "music/Tamtrilangthang.mp3" },
    { name: "Thắc mắc (MĐX) - Thịnh Suy", src: "music/Thacmac(MĐX).mp3" },
    { name: "Thích quá rùi nà - Tlinh, Trung Trần", src: "music/Thichquaruina.mp3" },
    { name: "Tìm thấy nhau - SIVAN", src: "music/Timthaynhau.mp3" },
    { name: "Tiny love - Thịnh Suy", src: "music/Tinylove.mp3" },
    { name: "Trafalgar D.Law -  Don Raemo, Bewata", src: "music/Trafalgardlaw.mp3" },
    { name: "Vaicaunoicokhiennguoithaydoi - GREY D, Tlinh", src: "music/Vaicaunoicokhiennguoithaydoi.mp3" },
    { name: "Vạn vật như muốn ta bên nhau - RIO", src: "music/Vanvatnhumuontabennhau.mp3" },
    { name: "Và thế giới đã mất đi một người cô đơn - Marzuz, Changg", src: "music/Vathegioidamatdimotnguoicodon.mp3" },
];

let currentTrackIndex = 0;
const audio = document.getElementById("myAudio");
const playPauseBtn = document.getElementById("playPauseBtn");
const trackName = document.getElementById("track-name");
const seekBar = document.getElementById("seek-bar");
const currentTimeEl = document.getElementById("current-time");
const durationTimeEl = document.getElementById("duration-time");
const volumeBar = document.getElementById("volume-bar");

function loadTrack(index) {
    const track = playlist[index];
    audio.src = track.src;
    trackName.innerText = track.name;
    seekBar.value = 0;
    currentTimeEl.innerText = "00:00";
    if (typeof renderPlaylist === 'function') renderPlaylist();
}

playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerText = "❚❚";
    } else {
        audio.pause();
        playPauseBtn.innerText = "▶︎";
    }
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseBtn.innerText = "❚❚";
});

document.getElementById("prevBtn").addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseBtn.innerText = "❚❚";
});

audio.onended = () => {
    document.getElementById("nextBtn").click();
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
    audio.volume = volumeBar.value / 100;
    const volIcon = document.getElementById("vol-icon");
    volIcon.innerText = audio.volume === 0 ? "🕪×" : (audio.volume < 0.5 ? "🔉" : "🕪×");
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
const playlistBtn = document.createElement("button");
playlistBtn.className = "nav-btn";
playlistBtn.id = "playlist-btn";
playlistBtn.innerHTML = "☰";
nextBtn.parentNode.insertBefore(playlistBtn, nextBtn.nextSibling);

const playlistUI = document.createElement('div');
playlistUI.className = 'playlist-ui';
document.body.appendChild(playlistUI);

let playlistHideTimeout;

function renderPlaylist() {
    playlistUI.innerHTML = '';
    playlist.forEach((track, index) => {
        const item = document.createElement('div');
        item.className = `playlist-item ${index === currentTrackIndex ? 'playing' : ''}`;
        item.innerText = `${index + 1}. ${track.name}`;
        item.onclick = (e) => {
            e.stopPropagation();
            currentTrackIndex = index;
            loadTrack(currentTrackIndex);
            audio.play();
            playPauseBtn.innerText = "❚❚";
            showPlaylistUI();
        };
        playlistUI.appendChild(item);
    });
    
    const activeItem = playlistUI.querySelector('.playing');
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
setInterval(createLeaf, 500);
setInterval(changeNote, 8000);
setInterval(updateCounter, 1000);
loadTrack(currentTrackIndex);