//your code here!
// Get reference to the list container
const listContainer = document.getElementById("infinite-list");
let itemCount = 0;
function addListItems(n) {
  for (let i = 0; i < n; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${++itemCount}`;
    listContainer.appendChild(li);
  }
}

// Add initial 10 list items
addListItems(10);
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= fullHeight - 5) {
    addListItems(2); // Add 2 more items when bottom is reached
  }
});


