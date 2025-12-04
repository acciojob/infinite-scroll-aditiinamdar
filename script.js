//your code here!
// script.js
const list = document.getElementById("infi-list");

// Step 1: Add 10 list items by default
for (let i = 1; i <= 10; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  list.appendChild(li);
}

// Step 2: Function to add 2 more items
function addMoreItems() {
  const currentCount = list.children.length;
  for (let i = 1; i <= 2; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${currentCount + i}`;
    list.appendChild(li);
  }
}

// Step 3: Detect when user scrolls near the bottom of the list
list.addEventListener("scroll", () => {
  // scrollTop    → how much has been scrolled already
  // scrollHeight → total height of the content
  // clientHeight → visible height of the element
  const tolerance = 10; // pixels from bottom to trigger load

  if (list.scrollTop + list.clientHeight >= list.scrollHeight - tolerance) {
    addMoreItems();
  }
});
