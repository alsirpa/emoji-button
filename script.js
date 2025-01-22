const button = document.querySelector('.fun-button');
const delightfulEmojis = ['✨', '🎉', '🌈', '💖', '⭐', '🦄', '🎨', '🌸', '🍭', '🎪'];

button.addEventListener('click', handleClick);

function handleClick() {
    createEmojis();
    // Redirect after a short delay to see the emojis
    setTimeout(() => {
        window.location.href = 'dancing-bear.html';
    }, 1000);
}

function createEmojis() {
    // ... existing code ...
    for (let i = 0; i < 10; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.textContent = delightfulEmojis[Math.floor(Math.random() * delightfulEmojis.length)];
        
        const buttonRect = button.getBoundingClientRect();
        const centerX = buttonRect.left + buttonRect.width / 2;
        const centerY = buttonRect.top + buttonRect.height / 2;
        
        emoji.style.left = centerX + 'px';
        emoji.style.top = centerY + 'px';
        
        document.body.appendChild(emoji);
        
        const angle = (Math.random() * Math.PI * 2);
        const distance = 100 + Math.random() * 100;
        const duration = 1000 + Math.random() * 500;
        
        const animation = emoji.animate([
            { 
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 1 
            },
            { 
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                opacity: 0 
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        animation.onfinish = () => emoji.remove();
    }
}