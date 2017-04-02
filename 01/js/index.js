$( "#link1" ).click(function() {
 $("#story").parent().css("background-color","puprle");
 $("#story").parent().css("color","orange");
 $("#p1").css("color","gray");
 $("#p2").removeClass("invisible");
 $("#p2").addClass("animated shake");
  $('html, body').animate({scrollTop: $("#p2").offset().top}, 2000);
});
$("#link2" ).click(function() {
   $("#p3").removeClass("invisible");
   $("#p2").css("color","gray");
   $("#story").parent().css("background-color","white");
   $("#p3").css("color","black");
   $("#p3").addClass("animated bounce");
  $('html, body').animate({scrollTop: $("#p3").offset().top}, 2000);
});
$("#link3" ).click(function() {
   $("#p4").removeClass("invisible");
   $("#p3").css("color","gray");
   $("#story").parent().css("background-color","black");
   $("#p4").css("color","white");
   $("#p4").addClass("animated wobble");
  $('html, body').animate({scrollTop: $("#p4").offset().top}, 2000);
});
$("#link4" ).click(function() {
   $("#p5").removeClass("invisible");
   $("#p4").css("color","gray");
   $("#story").parent().css("background-color","tomato");
   $("#p5").css("color","azure");
   $("#p5").addClass("animated tada");
  $('html, body').animate({scrollTop: $("#p5").offset().top}, 2000);
});
$("#link5" ).click(function() {
   $("#p6").removeClass("invisible");
   $("#p5").css("color","gray");
   $("#story").parent().css("background-color","white");
   $("#p6").css("color","darkslategray");
   $("#p6").addClass("animated flipInY");
  $('html, body').animate({scrollTop: $("#p6").offset().top}, 2000);
});
$("#link6" ).click(function() {
   $("#p7").removeClass("invisible");
   $("#p6").css("color","gray");
   $("#story").parent().css("background-color","black");
   $("#p7").css("color","white");
   $("#p7").addClass("animated flipIn");
  $('html, body').animate({scrollTop: $("#p7").offset().top}, 2000);
});
$("#link7" ).click(function() {
   $("#end").removeClass("invisible");
   $("#p7").css("color","gray");
   $("#story").parent().css("background-color","white");
   $("#end").css("color","black");
   $("#end").addClass("animated easeIn");
  $('html, body').animate({scrollTop: $("#end").offset().top}, 2000);
});
