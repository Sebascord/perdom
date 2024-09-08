const yesBtn = document.querySelector('#yesBtn');
yesBtn.addEventListener('click', function () {
    alert('Sabía que ibas a decir que sí Cachetona');
});

const notBtn = document.querySelector('#notBtn');
notBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    notBtn.style.setProperty('top', randomY + '%');
    notBtn.style.setProperty('left', randomX + '%');
    notBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});
