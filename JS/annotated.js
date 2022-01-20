//the size of the square (number of columns) is determined by the length of the message. if it creates a perfect square then use that number of columns, eg 4, 9, 16, 25 etc. if it does not fit into a square eg for 69, choose the number of columns that corresponds to the smallest square bigger than the number of characters eg for 69, the immeadiate square is 8 rows and 8 columns. so we get to add a half incomplete row and then output the coded message by downcasing. No spaces or punctuation

//ALGORITHMIC THINKING
//1. Enter a sentence eg "This is a sentence" ----> which is a string
//2. Remove the punctuation and spaces -----> "Thisisasentence"
//3. Then find the length of the new string without spaces or punctuations
//4. Create the grid using the string length

//used the helper function below to remove punctuation marks, but using the special marks themselves is cumbersome and there is a chance i could miss something. *facepalm*. i should've used the ^a-z/i (but this replaces only the first match). it is better to use ^a-zA-Z/g so that if it is not a letter(all cases considered, and a global match, replace it with nothing ). then .join("") to have a sentence that has no spaces, so that i can .split("") to create an array with all othe characters that's easy to loop through and enter into a grid


function removePunct(string) {
  let sentence = string
  .split("")
  .map(function(letter) {
    return letter.replace((/[^a-z]/i), "")
  })
  .join("")
  .split("")

  let gridSentence = document.getElementById("gridSentence");

  for (let element of sentence) {
    let cellSent = document.createElement("div");
    cellSent.innerHTML = element;
    cellSent.className="cellSent"
    gridSentence.appendChild(cellSent);

  }

    

  return Math.sqrt(sentence.length);

  //if sentence length.sqrt===whole number, create (sqrt)
}

console.log(removePunct("is* Jane's@@, hi plaease come jioni there \" !her own#\""));
//original: This* is Jane's sentence@@, \" !her own#\"
//output This is Janes sentence her own
// try Welcome??@@##$ to#$% Geeks%$^for$%^&Geeks






















//data array, nested array
let data = [["a", "b", "c", "d"], ["e", "f", "g", "h"]];

//Reference the parent container with the ID created on HTML
let container = document.getElementById("grid");

//loop through the first array. i is the full array in the mother array(data)
for (let i of data) {

  //loop through the individual array i, and we're calling its elements j
  for (let j of i) {

    //create a new div on the HTML, then set the contents on the HTML page. give the new div a class so that it is easy to style on CSS. then append the child to the parent container.
    let cell = document.createElement("div");
    cell.innerHTML = j;
    cell.className = "cell";
    container.appendChild(cell);
  }
}


//<------------EXAMPLE 2----------->
//first get a reference to the parent element
const myFruits = document.getElementById("myFruits");

//create another child using .createElement for new list li
// let newFruit = document.createElement("li");

// //Add the content to the li above to have <li>Apple</li>
// newFruit.innerHTML = "Melon";

// //append the child to the parent container (parentVar.appendChild(newEntryVar))
// myFruits.appendChild(newFruit);

//<-------------Using an array-------------->
//Create an array and append each item to the list on html
// const myFruitsList = ["mango", "banana", "lemon", "avo"];

// //use for to loop through the array, create a new child for each entry, assign it to the index of the array and then append it to the parent container
// for (let fruit of myFruitsList) {
//   let newFruit=document.createElement("li");
//   newFruit.innerHTML = fruit;

//   myFruits.appendChild(newFruit);
// }

//<------------using a nested array to append to a list--------------->
// const fruitsVeges = [["apple", "banana", "coconut", "dragonfruit"], ["asparagus", "broccoli", "cauliflower", "dhania"]];

// let fruityVeges = document.getElementById("fruitVeges")

// for (let fruitVege of fruitsVeges) {
//   for (let green of fruitVege) {
//     let newFruity = document.createElement("li");
//     newFruity.innerHTML = green;

//     fruityVeges.appendChild(newFruity);
//   }

// }

//<-----------CREATE A GRID TO APPEND THE FRUITS TO-------------->
// const fruitsVeges = [["apple", "banana", "coconut", "dragonfruit", "elderberry"], ["asparagus", "broccoli", "cauliflower", "dhania", "eggs"]];

// let greenGrid = document.getElementById("greenGrid");

// for (let fruitVege of fruitsVeges) {
//   for (let greenFrege of fruitVege) {
//     let newCell = document.createElement("div");
//     newCell.innerHTML = greenFrege;
//     newCell.className = "newCell";

//     greenGrid.appendChild(newCell);

//   }

// }






