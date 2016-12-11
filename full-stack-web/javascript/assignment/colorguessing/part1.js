var colors=["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "red", "white", "yellow"];
var count = 0;

function do_game() {
  colors.sort();
  var answer = Math.floor(Math.random() * (colors.length));
  var target = colors[answer];
  var finished = false;

  while (! finished)
  {
    count++;
    finished = check_guess(answer);
  }

  console.log("Total count of guess: " + count);
}

function check_guess(answer) {

  var dmsg = "Correct answer is: " + colors[answer];
  alert(dmsg); console.log(dmsg);

  var guess = prompt("I am thinking of one of these colors: \n\n" + colors + "\n\n What color am I thinking of?");
  var idxInColor = colors.indexOf(guess);
  console.log("guess: " + guess + ", idxInColor: " + idxInColor);

  // indexAt returns value from -1 to the last index of the colors array
  var check_result_msg = "";

  if (idxInColor == -1) {
    check_result_msg = "Sorry, I don't recognize your color.\n\n Please try again";
  } else if (idxInColor == answer) {
    check_result_msg = "Congratulations! You have guessed the color!\nIt took you " + count + " guesses to finish the game!\nYou can see the color in the background.";

    myBody=document.getElementsByTagName("body")[0];
    myBody.style.background=colors[answer];
    alert(check_result_msg);

    return true;
  } else if (idxInColor > answer) {
     check_result_msg = "Sorry, your guess is not correct!\n Hint: your color is alphabetically higher than mine.\n Please try again";
  } else {
    check_result_msg = "Sorry, your guess is not correct!\n Hint: your color is alphabetically lower than mine.\n Please try again";
  }

  alert(check_result_msg);
  return false;
}
