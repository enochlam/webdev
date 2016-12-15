var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRighttSide = document.getElementById("rightSide");

function generateFaces() {
  for (var i=0; i<=numberOfFaces; i++){
    var img = document.createElement("img");
    img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
    img.style.top = generateRanNum(0,400) +"px";
    img.style.left = generateRanNum(0,400) +"px";
    //var theLeftSide = document.getElementById("leftSide");
    theLeftSide.appendChild(img);

    console.log("left side faces generated");

    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    rightSide.appendChild(leftSideImages);
  }
}

function generateRanNum(start, end) {
  return  Math.floor(start +Math.random()* end) ;
}
