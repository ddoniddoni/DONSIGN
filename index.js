const colorWrapper = document.querySelector(".color__wrapper");
const colorCard = document.createElement("div");
const colorChars = "0123456789";
const chars_length = 6;
const randomColor = () => {
  for (let i = 0; i <= 50; i++) {
    let colorArray = "";

    for (let j = 0; j < chars_length; j++) {
      let randomNum = Math.floor(Math.random() * 10);
      colorArray += colorChars.substring(randomNum, randomNum + 1);
    }
    const colorCard = document.createElement("img");
    colorCard.classList = "color-card";
    colorCard.style.backgroundColor = `#${colorArray}`;
    colorCard.textContent = `color:#${colorArray}`;
    colorWrapper.append(colorCard);
  }
};

randomColor();
