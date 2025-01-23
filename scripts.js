// Mobile Navigation Toggle
document.getElementById('menuBtn').addEventListener('click', function() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('hidden');
});

// Sample Search Functionality (implement later)
document.querySelector('input[type="text"]').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    console.log(`Searching for: ${query}`);
    // Add real search functionality using an API or internal data
});
