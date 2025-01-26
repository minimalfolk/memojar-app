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
// Sample memory data (this would typically be fetched from a server)
let publicMemories = JSON.parse(localStorage.getItem('publicMemories')) || [];

// Function to display public memories
function displayMemories() {
  const memoriesList = document.getElementById('memories-list');
  memoriesList.innerHTML = ''; // Clear existing memories
  
  publicMemories.forEach(memory => {
    const memoryDiv = document.createElement('div');
    memoryDiv.classList.add('memory-post');
    
    const memoryHTML = `
      <h2>${memory.title}</h2>
      <p><strong>Category:</strong> ${memory.category}</p>
      <p><strong>Details:</strong> ${memory.details}</p>
      <p><strong>Posted on:</strong> ${memory.date}</p>
      <img src="${memory.image}" alt="Memory Image" class="memory-image">
      <div class="actions">
        <button class="like-button">❤️ Like</button>
        <button class="comment-button">💬 Comment</button>
      </div>
    `;
    
    memoryDiv.innerHTML = memoryHTML;
    memoriesList.appendChild(memoryDiv);
  });
}

// Handle form submission to add a memory
document.getElementById('memory-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('memory-title').value;
  const category = document.getElementById('memory-category').value;
  const details = document.getElementById('memory-details').value;
  const image = document.getElementById('memory-image').files[0] ? URL.createObjectURL(document.getElementById('memory-image').files[0]) : '';
  const date = new Date().toLocaleString();

  const newMemory = {
    title,
    category,
    details,
    image,
    date
  };

  // Add new memory to public memories and store it in localStorage
  publicMemories.push(newMemory);
  localStorage.setItem('publicMemories', JSON.stringify(publicMemories));

  // Reset form and display updated memories
  document.getElementById('memory-form').reset();
  displayMemories();
  document.getElementById('add-memory').classList.add('hidden');
  document.getElementById('public-memories').classList.remove('hidden');
});
(same as before)

// Initially display the public memories on page load
window.onload = function() {
  displayMemories();
};
