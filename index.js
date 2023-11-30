//color for first
color1 = document.getElementById("color1");
const style1 = getComputedStyle(color1);
const backgroundColor1 = style1.backgroundColor;

// color for second
color2 = document.getElementById("color2");
const style2 = getComputedStyle(color2);
const backgroundColor2 = style2.backgroundColor;

// color for third
color3 = document.getElementById("color3");
const style3 = getComputedStyle(color3);
const backgroundColor3 = style3.backgroundColor;

// color for fourth
color4 = document.getElementById("color4");
const style4 = getComputedStyle(color4);
const backgroundColor4 = style4.backgroundColor;

color1.addEventListener("click", function () {
  document.body.style.backgroundColor = backgroundColor1;
});

color2.addEventListener("click", function () {
  document.body.style.backgroundColor = backgroundColor2;
});

color3.addEventListener("click", function () {
  document.body.style.backgroundColor = backgroundColor3;
});

color4.addEventListener("click", function () {
  document.body.style.backgroundColor = backgroundColor4;
});
