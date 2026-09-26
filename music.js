let slider = document.getElementById("volume-control");

slider.addEventListener("mousedown", function() {
  slider.style.cursor = "grabbing"
})

slider.addEventListener("mouseup", function() {
  slider.style.cursor = "grab"
})