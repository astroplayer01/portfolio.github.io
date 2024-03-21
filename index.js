let projectBlock = document.getElementById('project');

// Add event listener for mouseover
projectBlock.addEventListener("mouseover", () => {
    // Scale up the object by 1.5
    projectBlock.style.transform = "scale(1.25)";
});

// Add event listener for mouseout
projectBlock.addEventListener("mouseout", () => {
    // Reset the scale to normal
    projectBlock.style.transform = "scale(1)";
    projectBlock.style.backgroundColor = "white";
});
