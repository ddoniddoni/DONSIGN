const colorWrapper = document.querySelector(".color__wrapper");
const colorChars = "0123456789ABCDEF";
const chars_length = 6;

const randomColor = () => {
  for (let i = 0; i <= 104; i++) {
    let colorArray = "";

    for (let j = 0; j < chars_length; j++) {
      let randomNum = Math.floor(Math.random() * 16);
      colorArray += colorChars.substring(randomNum, randomNum + 1);
    }
    const colorImg = document.createElement("button");
    colorImg.classList = "color-card";
    colorImg.style.backgroundColor = `#${colorArray}`;
    colorImg.textContent = `color:#${colorArray}`;
    colorWrapper.append(colorImg);
  }
};

randomColor();
