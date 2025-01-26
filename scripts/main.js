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
  function setupNavButtonListener(buttonId, sectionId) {
    document.getElementById(buttonId).addEventListener('click', function() {
      localStorage.setItem('lastActiveSection', sectionId);
      showActiveSection(sectionId);
    });
  }

  setupNavButtonListener('home-icon', 'public-memories');
  setupNavButtonListener('add-icon', 'add-memory');
  setupNavButtonListener('message-icon', 'messages-page');
});
