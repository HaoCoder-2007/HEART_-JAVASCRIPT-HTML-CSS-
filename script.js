document.addEventListener('click', function(e) {
    // Vòng lặp tạo 15 trái tim nhỏ mỗi lần click (Giống for (int i=0; i<15; i++))
    for (let i = 0; i < 15; i++) {
        createParticle(e.clientX, e.clientY);
    }
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    // Tính toán hướng bay ngẫu nhiên
    const destinationX = x + (Math.random() - 0.5) * 300;
    const destinationY = y + (Math.random() - 0.5) * 300;
    const rotation = Math.random() * 360;
    const delay = Math.random() * 200;

    // Hiệu ứng bay bằng Web Animations API
    const animation = particle.animate([
        { // Điểm bắt đầu (vị trí click)
            transform: `translate(${x}px, ${y}px) rotate(-45deg) scale(1)`,
            opacity: 1
        },
        { // Điểm kết thúc
            transform: `translate(${destinationX}px, ${destinationY}px) rotate(${rotation}deg) scale(0)`,
            opacity: 0
        }
    ], {
        duration: 1000 + Math.random() * 1000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: delay
    });

    // Xóa object sau khi diễn xong để tránh tràn bộ nhớ (giống như Garbage Collection)
    animation.onfinish = () => {
        particle.remove();
    };
}