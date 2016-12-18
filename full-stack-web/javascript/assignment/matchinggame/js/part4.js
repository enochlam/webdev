var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

function generateFaces() {
  deleteChildNodes(theLeftSide);
  deleteChildNodes(theRightSide);

  for (var i=0; i<=numberOfFaces; i++){
    var img = document.createElement("img");
    img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
    img.style.top = generateRanNum(0,400) +"px";
    img.style.left = generateRanNum(0,400) +"px";
    //var theLeftSide = document.getElementById("leftSide");
    theLeftSide.appendChild(img);

    console.log("left side " + numberOfFaces + " faces generated");
  };

  leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  rightSide.appendChild(leftSideImages);

  theLeftSide.lastChild.onclick=
    function nextLevel(event){
        event.stopPropagation();
        numberOfFaces += 1;
        generateFaces();
      };

  theBody.onclick = function gameOver() {
    alert("Game Over!");
    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
  };
}


function deleteChildNodes(side) {
  while ( side.firstChild) {
    side.removeChild(side.firstChild);
  }
}

function generateRanNum(start, end) {
  return  Math.floor(start +Math.random()* end) ;
}
