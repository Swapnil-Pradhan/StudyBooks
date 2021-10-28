if ('serviceWorker' in navigator){
navigator.serviceWorker
.register('Cache.js')
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) =>{
e.preventDefault();
deferredPrompt = e;
deferredPrompt.prompt();
deferredPrompt.userChoice.then((choiceResult) => {
deferredPrompt = null;
});
});