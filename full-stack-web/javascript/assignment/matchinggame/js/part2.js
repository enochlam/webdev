var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");

function generateFaces() {
  for (var i=0; i<=numberOfFaces; i++){
    var img = document.createElement("img");
    img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
    img.style.top = generateRanNum(0,400) +"px";
    img.style.left = generateRanNum(0,400) +"px";
    //var theLeftSide = document.getElementById("leftSide");
    theLeftSide.appendChild(img);

    console.log("i=" + i);
  }  
}

function generateRanNum(start, end) {
  return  Math.floor(start +Math.random()* end) ;
}
