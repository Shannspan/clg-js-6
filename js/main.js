//API = Application Programming Interface
//Type 1: third party API's, allow us to access functionality designed by someone else (and hosted on web) on our own website. Eg to display weather, or a map etc. Covered in future lesson

//Third party API's that may be of interest for js project - weather for the area which is arid, maps to locate isolated beaches (as adjunct to specific info about the location)

//Type 2: browser API (or web API). Allows us to extend the functionality of the browser (Chrome, Firefox etc).
//Most commonly used browser API is the DOM = Document Object Model. Used to manipulate HTML & CSS, therefore what the user sees (structure,style & content).
//2 x commonly used browser API's are: window API & document API (child of window API).
//Window object = contains info about the browser window displaying the webpage.
//Document object = represents web page loaded in browser.

//Lesson 5 code along examples
//Window methods (window object has inbuilt methods)
function timeoutBeach1() {
  console.log("This beach is first, but delayed 4 seconds");
}

function timeoutBeach2() {
  console.log("This beach is second, but delayed 1 second");
}

setTimeout(timeoutBeach1, 4000);
setTimeout(timeoutBeach2, 1000);

console.log("No delay - let's go to the beach!")

console.log(window.location);
//and to achieve the same result you can drop out 'window'
console.log(location);

console.log(history);
console.log(history.length);

//Local storage API. Stores data without expiration date (similar to cookies but superior storage capacity)
//Session storage API. Stores data for one windows session only. Useful for security.

//Using webGL API (canvas API)

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "plum";
ctx.fillRect(10, 10, 150, 100);

//const para = document.querySelector('p')

//Function for Index page Select your favourite shell

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
//

 

