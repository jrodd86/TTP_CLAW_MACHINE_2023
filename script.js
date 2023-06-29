function checkPosition(){
 var position = document.getElementById("claw");
  var directlyAbove;
  if (position.offsetLeft >= 0 && position.offsetLeft<= 100){
    directlyAbove=1;
  }
  else if(position.offsetLeft >= 200 && position.offsetLeft <= 300){
    directlyAbove=2;
  }
  else if(position.offsetLeft >= 400 && position.offsetleft <= 500){
    directlyAbove=3;
  }
  else if(position.offsetLeft >= 700 && position.offsetLeft <= 800){
    directlyAbove=4;
  }
  return directlyAbove;
}
let scoreElement = document.getElementById("score");
        let score = 0;

        function updateScore() {
            score++;
            scoreElement.textContent = score;
        }

$(document).ready(()=>{
  $("#left").click(()=>{
      $("#claw").animate({left:'+=250px'});
    
  });
  $("#right").click(()=>{
    $("#claw").animate({left:'-=250px'});
  });
  
  $("#down").click(()=>{
    $("#claw").animate({top:'+=500px'});
    $("#claw").animate({top:'-=500px'})
    if(checkPosition()===1){
      $("#yoda").fadeOut(); 
    }
      
    else if(checkPosition()===2){
      $("#alexa").fadeOut();
    }
    else if(checkPosition()===3){
      $("#airpods").fadeOut();
    }
    else if(checkPosition()===4){
      $("#selfie").fadeOut();
    }
  });
});




// Define the animation function
  //function animateClaw() {
    // Move the claw down to grab the item
    //$('#claw').animate({ top: '200px' });
    
    // Move the item along with the claw
   // $('#item').animate({ top: '200px' });
    
    // Open the claw to simulate grabbing the item
   // $('#claw').animate({ width: '200px' });
 // }