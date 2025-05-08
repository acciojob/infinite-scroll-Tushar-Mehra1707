const list = document.getElementById('list');
let itemCount = 0;

// Function to add items to the list
function addItems(count = 10) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${++itemCount}`;
    list.appendChild(li);
  }
}

// Add initial 10 items
addItems(10);

// Infinite scroll logic
const container = document.querySelector('.container');

container.addEventListener('scroll', () => {
  if (container.scrollTop + container.clientHeight >= container.scrollHeight - 5) {
    addItems(2); // Add 2 more items when near the bottom
  }
});
