// Your code here

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if (event.key === "ArrowRight"){
        moveDodgerRight();
    }
  });

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < 360){
        dodger.style.left = `${left + 1}px`;
    }


//  return
}
function moveDodgerLeft(){
    // return
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0){
        dodger.style.left = `${left - 1}px`;
    }
    dodger.style.left = `${left - 1}px`;

   }