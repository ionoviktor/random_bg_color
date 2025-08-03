const btn = document.querySelector('.btn'),
      bg = document.querySelector('body'),
      color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let colorBg = randomColor();
    bg.style.backgroundColor = colorBg;
    color.textContent = colorBg;
})

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
    
}