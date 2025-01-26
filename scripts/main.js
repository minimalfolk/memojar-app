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
document.addEventListener('DOMContentLoaded', function() {
  // Section Elements
  const homeSection = document.getElementById('public-memories');
  const addMemorySection = document.getElementById('add-memory');
  const messagesSection = document.getElementById('messages-page');

  // Function to hide all sections
  function hideAllSections() {
    homeSection.classList.add('hidden');
    addMemorySection.classList.add('hidden');
    messagesSection.classList.add('hidden');
  }

  // Function to show the active section
  function showActiveSection(sectionId) {
    hideAllSections();
    document.getElementById(sectionId).classList.remove('hidden');
  }

  // Retrieve the last active section from localStorage or default to 'public-memories' (Home)
  const lastActiveSection = localStorage.getItem('lastActiveSection') || 'public-memories';
  showActiveSection(lastActiveSection);

  // Event listeners for navigation buttons
  document.getElementById('home-icon').addEventListener('click', function() {
    localStorage.setItem('lastActiveSection', 'public-memories');
    showActiveSection('public-memories');
  });

  document.getElementById('add-icon').addEventListener('click', function() {
    localStorage.setItem('lastActiveSection', 'add-memory');
    showActiveSection('add-memory');
  });

  document.getElementById('message-icon').addEventListener('click', function() {
    localStorage.setItem('lastActiveSection', 'messages-page');
    showActiveSection('messages-page');
  });
});
