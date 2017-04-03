var body = document.body,
    html = document.documentElement;
var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight )-$(window).height();
var last_off=0;
var animating=0;
window.location.hash='#sc0';
$(window).scroll(function(e) {   
Offset =Math.round((($(window).scrollTop() || $("body").scrollTop())/height*100));


if(last_off>Offset  && animating==0){

var hasher= window.location.hash;
hasher=hasher.replace("#sc","");
var up=parseInt(hasher);
if(up>0)
up--;
var hasin="#sc"+up;
var offs=$(hasin).offset().top;
animating=1;
$('#nav-dots a div').removeClass("selected");
$('#nav-dots a div').eq(up).addClass("selected");

  $('html, body').animate({
      scrollTop: offs
    }, 800, function(){
      window.location.hash = hasin;
      animating=0;

    });


}else if(last_off<Offset && animating==0){
var hasher= window.location.hash;
animating=1;
hasher=hasher.replace("#sc","");
var up=parseInt(hasher);
if(up<$('.tile').length)
up++;
var hasin="#sc"+up;
var offs=$(hasin).offset().top;
$('#nav-dots a div').removeClass("selected");
$('#nav-dots a div').eq(up).addClass("selected");

  $('html, body').animate({
      scrollTop: offs
    }, 800, function(){
      window.location.hash = hasin;
      animating=0;

    });


}

last_off=Offset;
});





$('body').scrollspy({target: "#nav-dots", offset: 50});

// Add smooth scrolling on all links inside the navbar
$("#nav-dots .dot").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;
$('#nav-dots a div').removeClass("selected");
$(this).children().addClass("selected");
    // Using jQuery's animate() method to add smooth page scroll
    animating=1;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
      animating=0;
    });

  } // End if

});