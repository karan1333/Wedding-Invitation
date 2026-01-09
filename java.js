const openBtn = document.getElementById('openInvite');
const landing = document.getElementById('landing');
const invitation = document.getElementById('invitation');
const music = document.getElementById('bgMusic');

openBtn.addEventListener('click', () => {
    landing.style.display = 'none';
    invitation.style.display = 'block';
    music.play();
});
