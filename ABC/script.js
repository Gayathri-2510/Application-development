// Function that returns a random colour
function getRandomColor() {
    const colors = ["green", "blue", "red"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Select all h5 elements
const h5Elements = document.querySelectorAll("h5");

// Add click event to each h5
h5Elements.forEach(function (h5) {
    h5.addEventListener("click", function () {
        h5.style.color = getRandomColor();
    });
});
