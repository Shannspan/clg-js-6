//Manipulating the DOM to change style - using getElementById, querySelector, eventListener
document.getElementById("marine-park").style.backgroundColor = " #D5D3D9";

wrappers = document.querySelector(".wrapper");

wrappers.style.backgroundColor = "#BF9CA4";

const gameTitle = document.getElementById("game-title");

function popShell() {
  //alert ("Hey there!");
  gameTitle.style.color = "#355B97";
  gameTitle.innerHTML = "Let's play Shell Tac Toe!"
}

gameTitle.addEventListener("mouseover",popShell);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "plum";
ctx.fillRect(10, 10, 150, 100);

//Function for Index page Select your favourite shell - also manipulating the DOM to reveal text after user makes a selection via variables, querySelectors and eventListener & following function

const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setShell);

function setShell() {
  const choice = select.value;

  if (choice === 'cowry') {
    para.textContent = 'Often used in ancient times as currency! Cowry shells stay shiny due to the animal covering the outside of the shell with part of its body during its life';
  } else if (choice === 'trochus') {
    para.textContent = 'A spiralling shell of a marine snail that rises to a conical point. Trochus have been a mainstay of fashion for decades - the "mother of pearl" finish used for buttons and jewellery.';
  } else if (choice === 'clam') {
    para.textContent = 'The northern waters of Western Australia are home to five of the seven known giant clam species. Maxing out at 260 kgs the largest variety is equally remarkable due to the vivid blue colouring of the living animal.';
  } else if (choice === 'turban') {
    para.textContent = 'Often referred to as "periwinkles", this spiral shelled marine snail is unusual because it keeps itself safe with a hard shell door called the operculum.Turban shell operculum are round, flat with a spiral from the centre and are often called "cats eyes".';
  } else {
    para.textContent = '';
  }
}

 

