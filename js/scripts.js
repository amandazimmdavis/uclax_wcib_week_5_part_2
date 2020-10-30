//document.querySelector('html').style.backgroundColor = 'red';



const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const question = document.querySelector('.question');


const customCity = document.getElementById('customcity');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



let storyText = 'It was 94 fahrenheit outside in Philadelphia, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a pubble on the sidewalk', 'turned into a slug and crawled away'];





randomize.addEventListener('click', result);

function result() {

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);


   let newStory = storyText.replace(':insertx:', xItem);
   newStory = newStory.replace(':insertx:', xItem);
   newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);


let name=customName.value;
  if(name !== '') {
    //let name = customName.value;
      newStory = newStory.replace('Bob', name);

    //newStory = storeText
  } else {
    name = 'Bob';
  }

  if(customCity.value !== '') {
    let city = customCity.value;
      newStory = newStory.replace('Philadelphia', city);
  }
  if(document.getElementById("moon").checked) {
    var gravity = 0.165;
    var tempf = -208;

  } else {
    var gravity = 1;
    var tempf = 94;

  }
  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14 * gravity );
    //let weight = '27';
    weight = weight.toString().concat(' stone');

    let temperature =  Math.round((tempf-32) * (5/9));

    temperature = temperature.toString().concat(' centigrade');


    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);

  } else if (document.getElementById("moon").checked) {
    let weight = Math.round(300 * gravity );
    //let weight = '27';
    weight = weight.toString().concat(' pounds');

    let temperature =  tempf;

    temperature = temperature.toString().concat(' fahrenheit');


    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);

  }
//story.textContent = xItem;
//story.textContent = customCity.value;

  story.textContent = newStory;
  story.style.visibility = 'visible';

  question.textContent = 'What does ' + name +' want to do?';

  question.style.visibility = 'visible';



//Disables generate random story button
  randomize.disabled = true;


//This is a normal set of scripts to make a button appear
  beach = document.createElement('button');
  beach.className = "btn btn-dark";
  beach.textContent = 'Go to the Beach';
  document.getElementById("rightHere").appendChild(beach);


//  resetButton.addEventListener('click', resetGame);






drink = document.createElement('button');
drink.className = "btn btn-dark";
drink.textContent = 'Have a Cold Drink';
document.getElementById("rightHere").appendChild(drink);


//Watches for click of reset button and calls function endGame
beach.addEventListener('click', beachEnd);
drink.addEventListener('click', drinkEnd);
}  //end of function result()



function beachEnd() {
  //beach.parentNode.removeChild(beach); //removes button
  beach.disabled = true;
  drink.disabled = true;
      //document.body.style.background = 'url(../images/beach.jpg) no-repeat center center';
      document.body.className += ' beachbackground';

      final = document.createElement('button');
      final.className = "btn btn-primary";
      final.textContent = 'Restart Game';
      document.getElementById("reloadlocation").appendChild(final); //getElementByID sets location based on id in HTML

      final.addEventListener('click', endGame); //allows for reloading of page when you click button
    }

function drinkEnd() {
  beach.disabled = true;
  drink.disabled = true;
  document.body.className += ' drinkbackground';

  final = document.createElement('button');
  final.className = "btn btn-primary";
  final.textContent = 'Restart Game';
  document.getElementById("reloadlocation").appendChild(final);

  final.addEventListener('click', endGame);
    //document.body.style.background = 'url(../images/drink.jpg) no-repeat center center ';
    //location.reload(); // reload the entire page
}


//this ends the game and reloads the page
function endGame() {
  location.reload();
}
