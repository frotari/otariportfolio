window.addEventListener('load', function() {
    setTimeout(function() {
        const welcomeScreen = document.getElementById('welcome-screen');
        welcomeScreen.classList.add('hidden');
        
        const mainContent = document.getElementById('main-content');
        mainContent.classList.remove('hidden');
        mainContent.classList.add('visible');
    }, 1500); // 1.5 seconds
});