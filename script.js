const container = document.querySelector('.container');

document.addEventListener('click', function(e) {
    // 1. Tính toán tọa độ của container
    const containerRect = container.getBoundingClientRect();
    
    // 2. Tính toán tọa độ click tương đối với container
    // Điều này đảm bảo particles nằm đúng vị trí trong container, không bị lệch
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;

    // 3. Tạo 15 trái tim con (giống for loop trong Java)
    for (let i = 0; i < 15; i++) {
        createParticle(x, y);
    }
});

function createParticle(x, y) {
    // 1. Khởi tạo "đối tượng" particle
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // 2. Thiết lập vị trí ban đầu
    // CSS sẽ tự động căn chỉnh tâm nhờ translate(-50%, -50%)
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    // 3. Đưa particle vào container (Thay vì body để quản lý context tốt hơn)
    container.appendChild(particle);

    // 4. Tính toán hướng và thời gian ngẫu nhiên
    const destinationX = (Math.random() - 0.5) * 300;
    const destinationY = (Math.random() - 0.5) * 300;
    const duration = 1000 + Math.random() * 1000;
    const rotation = Math.random() * 360;

    // 5. Hiệu ứng bay bằng Web Animations API
    particle.animate([
        { // Điểm bắt đầu
            transform: 'translate(-50%, -50%) rotate(-45deg) scale(1)',
            opacity: 1
        },
        { // Điểm kết thúc
            transform: `translate(-50%, -50%) translate(${destinationX}px, ${destinationY}px) rotate(${rotation}deg) scale(0)`,
            opacity: 0
        }
    ], {
        duration: duration,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: Math.random() * 200
    });

    // 6. Xóa object sau khi diễn xong (Garbage Collection thủ công)
    setTimeout(() => {
        particle.remove();
    }, duration + 200);
}
