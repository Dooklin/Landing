let selectarrow1 = document.getElementById("select-arrow1");
let options1 = document.querySelectorAll(".option1");

options1.forEach((option) => {
  option.addEventListener("click", function() {
    selectarrow1.style.marginTop = `calc((32px + 15px) * ${option.dataset.index} - 4px)`;
  });
});

let selectarrow2 = document.getElementById("select-arrow2");
let options2 = document.querySelectorAll(".option2");

options2.forEach((option) => {
  option.addEventListener("click", function() {
    selectarrow2.style.marginTop = `calc((32px + 15px) * ${option.dataset.index} - 4px)`;
  });
});

let selectarrow3 = document.getElementById("select-arrow3");
let options3 = document.querySelectorAll(".option3");

options3.forEach((option) => {
  option.addEventListener("click", function() {
    selectarrow3.style.marginTop = `calc((32px + 15px) * ${option.dataset.index} - 4px)`;
  });
});