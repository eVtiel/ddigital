// $(window).scroll(function(){
//     $(".inBorder").css("opacity", 1 - $(window).scrollTop() / 350);
//   });

// $(window).scroll(function(){
//     $(".digital").css("opacity", 1 - $(window).scrollTop() / 250);
//   });


	// fadeout
var padeWidth = $(window).width();


$(window).scroll(function(){
	if ( padeWidth <= 570 ) {
    $(".slogan").css("opacity", 1 - $(window).scrollTop() / 70);
 } else {
 	$(".slogan").css("opacity", 1 - $(window).scrollTop() / 250);	
 }
});

$(window).scroll(function(){
    	$(".seccondText").css("opacity", 0 + $(window).scrollTop() / 350);
 	 });



// Scroll position

$(document).ready(function(){
	 
	 var scrollPos = 0;   
    var Counter = 0;
    $(window).scroll(function(){
        var scrollPosCur = $(this).scrollTop();
        if (scrollPosCur > scrollPos) {
            Counter -= 1;
        } else {
            Counter += 1;
        }
        scrollPos = scrollPosCur;

      // empireimg scoll fixed position

		$(window).ready(function(){
   	$(".empireimg").css("margin-top", - scrollPos);
   	if (scrollPos > 300 ) {
   		$(".empireimg").css("margin-top", - 300);
   	}  	
   });

    });
});

// animation DD

$(function(){
			
			var $slogans = $("p.slogan").find("strong");
			var $holder = $("#holder");
			
			//set via JS so they're visible if JS disabled
			$slogans.parent().css({position : "absolute", top:"0px", left:"0px"});
			
			//settings
			var transitionTime = 0.2;
			var slogansDelayTime = 6;
			
			//internal
			var totalSlogans = $slogans.length;
			
			var oldSlogan = 0;
			var currentSlogan = -1;
			
			//initialize	
			switchSlogan();
			
			function switchSlogan(){
				
				oldSlogan = currentSlogan;
				
				if(currentSlogan < totalSlogans-1){
					currentSlogan ++
				} else {
					currentSlogan = 0;
				}
				
				TweenLite.to($slogans.eq(oldSlogan), transitionTime, {top:-20, alpha:0, rotationX: 90});
				TweenLite.fromTo($slogans.eq(currentSlogan), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
				
				TweenLite.delayedCall(slogansDelayTime, switchSlogan);
			}
			
		});



