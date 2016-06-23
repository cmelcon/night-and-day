$("#orb").on("click", function(){
  if ( $("#orb").hasClass("sun")  ){
    $("#orb").removeClass("sun").addClass("moon");
    //select the sky, take away class day, add class night
    $("#sky").removeClass("day").addClass("night")
  }
  else{
    $("#orb").removeClass("moon").addClass("sun");
    //select the sky, take away class night, add class day
    $("#sky").removeClass("night").addClass("day")

  }
});
