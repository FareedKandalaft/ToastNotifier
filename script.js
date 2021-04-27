const button = document.getElementById('button'); 
const toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
]

const levels = ['info', 'support', 'error'];

button.addEventListener('click', ()=> createNotification());

function createNotification() {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(getRandomLevel());

  notif.innerText=getRandomMsg();
  toasts.appendChild(notif);

  setTimeout(()=>{
    notif.remove();
  },3000);
}

function getRandomMsg() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomLevel() {
  return levels[Math.floor(Math.random() * levels.length)]
}