let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
e.preventDefault();
deferredPrompt = e;
showInstallPromotion();
});

window.addEventListener('appinstalled', () => {
hideInstallPromotion();
deferredPrompt = null;
alert("Thank you for installing StudyBooks 😄");
window.open("https://swapnil-pradhan.github.io/StudyBooks/")
});

if ('serviceWorker' in navigator){
navigator.serviceWorker.register('Cache.js')
}