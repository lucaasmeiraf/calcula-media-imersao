const $button = document.querySelector("button");
const $input = document.querySelector("input");
const $media = document.querySelector("span");
const $registrosTemp = document.querySelector(".registros");
let total = 0;
let qtdNotas = 0;
let media = 0;

function handleClick(event){
  event.preventDefault();

  //Input é string, precisa converter
  const nota = Number($input.value);

  if (nota >= 0 && nota <= 10 && nota !== ''){
    total+=nota;
    qtdNotas++;

    media = total / qtdNotas;
    $media.textContent = media.toFixed(1);

    $registrosTemp.insertAdjacentHTML("beforeend", `<li>${nota}</li>`)
  };
}
$button.addEventListener('click', handleClick);