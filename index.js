const colorWrapper = document.querySelector(".color__wrapper");
const colorArray = [];

const randomColor = () => {
  for (let i = 0; i <= 50; i++) {
    let randomNum = Math.floor(Math.random() * 1000000) + 1000000;
    if (randomNum > 1000000) {
      randomNum = randomNum - 1000000;
      colorArray.push(randomNum);
    }
    const colorCard = document.createElement("div");
    colorCard.classList = "color-card";
    colorCard.style.backgroundColor = `#${colorArray[i]}`;
    colorCard.textContent = `color:#${colorArray[i]}`;
    colorWrapper.append(colorCard);
  }
  console.log(colorArray);
};

randomColor();
