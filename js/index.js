console.log("Your index is loading correctly");

$("#ux").on("click",function(){
    console.log("IT doesn't WORK")

});


  $("#ux").hover(function(){
    $(this).css("background-color", "pink");
    }, function(){
    $(this).css("background-color", "white");
  });
