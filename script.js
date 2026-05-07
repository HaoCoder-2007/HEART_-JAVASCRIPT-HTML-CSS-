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

updateCounter();
changeNote();
setInterval(changeNote, 8000);
setInterval(updateCounter, 1000);