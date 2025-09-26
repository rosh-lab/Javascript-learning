//$ means document.qeryselector in jqery
$('#btn').click(function(){
    $('#main').slideToggle(1000)  //Slideup() or slidedown() or slideToggle(5000)
    $('#main').text("Hello roshan how are you?")

})
var typed = new Typed('#text', {
  strings: ["Developer.", "Good learner.","Intelligent."],
  typeSpeed: 30,
  loop:true,
  loopCount:Infinity
});
