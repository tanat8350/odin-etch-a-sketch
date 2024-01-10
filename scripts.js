const body = document.body;

function createGrids(numGrid) {
  const time = numGrid;
  const oldContainer = document.querySelector(".container");
  const newContainer = document.createElement("div");
  newContainer.className = "container";

  // first remove old container
  body.removeChild(oldContainer);
  body.appendChild(newContainer);

  for (let i = 1; i <= time; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.className = "grid-col";

    newContainer.appendChild(squareDiv);
  }

  const gridCols = document.querySelectorAll(".grid-col");
  for (let grid of gridCols) {
    for (let i = 1; i <= time; i++) {
      const squareDiv = document.createElement("div");
      squareDiv.className = "grid-row";
      grid.appendChild(squareDiv);
    }
  }

  newContainer.addEventListener("mouseover", (e) => {
    const target = e.target;

    if (target.classList.contains("grid-row")) {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

      // target.style.backgroundColor = randomColor;

      switch (target.style.backgroundColor) {
        case "rgba(0, 0, 0, 0.1)":
          target.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
          break;
        case "rgba(0, 0, 0, 0.2)":
          target.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
          break;
        case "rgba(0, 0, 0, 0.3)":
          target.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
          break;
        case "rgba(0, 0, 0, 0.4)":
          target.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
          break;
        case "rgba(0, 0, 0, 0.5)":
          target.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
          break;
        case "rgba(0, 0, 0, 0.6)":
          target.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
          break;
        case "rgba(0, 0, 0, 0.7)":
          target.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
          break;
        case "rgba(0, 0, 0, 0.8)":
          target.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
          break;
        case "rgba(0, 0, 0, 0.9)":
          target.style.backgroundColor = "rgb(0, 0, 0)";
          break;
        case "rgb(0, 0, 0)":
          target.style.backgroundColor = "rgb(0, 0, 0)";
          break;
        default:
          target.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
          break;
      }
    }
  });
}

const inputGrid = document.querySelector("#input-grid");

inputGrid.addEventListener("change", () => {
  let value = +inputGrid.value;
  if (value > 100) {
    value = 100;
  }
  createGrids(value);
});

createGrids(15);
