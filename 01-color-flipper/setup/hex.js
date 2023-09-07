const hexValues = "0123456789ABCDEF";
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const hexColor = generateRandomHexColor();
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function generateRandomHexColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexValues.length);
    hexColor += hexValues[randomIndex];
  }
  return hexColor;
}