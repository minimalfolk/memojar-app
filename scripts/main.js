// Navigation Buttons
document.getElementById('home-icon').addEventListener('click', () => {
  document.getElementById('public-memories').classList.remove('hidden');
  document.getElementById('add-memory').classList.add('hidden');
  document.getElementById('messages-page').classList.add('hidden');
});

document.getElementById('add-icon').addEventListener('click', () => {
  document.getElementById('add-memory').classList.remove('hidden');
  document.getElementById('public-memories').classList.add('hidden');
  document.getElementById('messages-page').classList.add('hidden');
});

document.getElementById('message-icon').addEventListener('click', () => {
  document.getElementById('messages-page').classList.remove('hidden');
  document.getElementById('public-memories').classList.add('hidden');
  document.getElementById('add-memory').classList.add('hidden');
});
