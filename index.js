
const container7 = document.getElementById("container_7");
const container8 = document.getElementById("container_8");

//container7 turning from red to blue by toggle click
container7.addEventListener("click", () => {
    container7.style.backgroundColor = "black";
    container7.style.transform = "scale(1.1)";
  
    // Check if container8 is already at 45% width
    if (container8.classList.contains("active")) {
      container8.style.width = "10%";
      container7.style.transform = "scale(1.025)"; 
      container7.style.backgroundColor = "#cc0000";
      container8.classList.remove("active");
    } else {
      container8.style.width = "45%";
      container8.classList.toggle("active");
    }
  
    console.log("container7 clicked");
  });

container7.addEventListener("mouseleave", () => {
    container7.style.width = "10%";
})
function togglePanel() {
    var container = document.getElementById("container_8");
    container.classList.toggle("active");
}

function closePanel() {
    var container = document.getElementById("container_8");
    container.classList.remove("active");
}
