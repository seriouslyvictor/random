const todasSeries = [
  "series/bb.jpg",
  "series/ben10.jpg",
  "series/lacasa.jpg",
  "series/NARUTO.jpg",
  "series/rd6.jpg",
  "series/twd.jpg",
];
const elRoleta = document.querySelector("#nav--roleta");
const imgSource = document.querySelector("#img--sorteado");
const elContainer = document.querySelector(".container--sorteado");

elRoleta.addEventListener("click", pegarSerie);
elContainer.addEventListener("mouseout", () => {
  elContainer.classList.remove("revelado");
});

function sortear(array) {
  return Math.floor(Math.random() * array.length);
}

function pegarSerie() {
  let rng = sortear(todasSeries);
  console.log(todasSeries[rng]);
  console.log(imgSource.getAttribute("src"));
  while (todasSeries[rng] === imgSource.getAttribute("src")) {
    rng = sortear(todasSeries);
  }
  elContainer.classList.add("revelado");
  imgSource.src = todasSeries[rng];
}
