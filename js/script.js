  gsap.registerPlugin(ScrollTrigger);

gsap.to('.letra',{scale:1.3,delay:0.2,duration:3,});

$('#openNav').on('click', function() {
  $('#myNav').css("width", "100%");
});


$('#closeNav').on('click', function() {
  $('#myNav').css("width", "0%");
});
    
    $('html').mousemove(function(e){
		
		var wx = $(window).width();
		var wy = $(window).height();
		
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		
		var newx = x - wx/2;
		var newy = y - wy/2;
		
	
		
		$('#contaianer div').each(function(){
			var speed = $(this).data('speed');
			if($(this).attr('data-revert')) speed *= -1;
			gsap.to($(this), {x: (1 - newx*speed), y: (1 - newy*speed)});
			
		});
	
	});



var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    margin:2,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },            
        960:{
            items:3
        },
        1200:{
            items:3
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});



var tl = gsap.timeline({    // 1 you can add options in timeline 
   scrollTrigger:{
       trigger:".gs",
   } 
    
});

tl.from(".owl-carousel ", {x: 1200,duration:2,ease: "Elastic.easeOut",})
.from( ".text-1",{x:-800,duration:1,ease:Bounce.easeOut},"-0.5")
.from( ".text-2",{x:800,duration:1,ease: Bounce.easeOut},"-0.5")
.from( ".h-text" ,{y:800,duration:1,opacity:0,scale:5 },"-0.5");  
    
    var tm = gsap.timeline();

   tm.from(".mp-1",{xPercent:-100})
     .from(".mp-2",{xPercent:100}) 
     .from(".mp-3",{yPercent:-100,opacity:0});

ScrollTrigger.create({
    animation:tm,       // 2 you can append timeline and make options  
    trigger:".ctn",
    pin:true,
    scrub:true,
    anticipatePin:1
    
   
});


for(let i=0;i<200;i++){
    
   let box = document.createElement('span');
    
    box.classList.add('piece');
    
   $(".hidden_content").append(box);
    
}


var my = document.getElementById("myNav");
var thatPlace= document.getElementsByClassName("overlay-content")[0];
  

thatPlace.addEventListener('mousemove',function(e){
   
   
    
    if(e.target.innerText == "Pricing"){
   my.className="overlay  price";
    
    }
    
   if(e.target.innerText == "Contact"){
 my.className="overlay  contact";
    
    }  
   if(e.target.innerText == "About"){
  my.className="overlay  about";
    
    }
    
    
})



