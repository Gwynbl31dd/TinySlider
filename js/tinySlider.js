/**
 * @author Anthony Paulin
 * @since 19-04-2017
 * @version 0.1.0
 */
$(document).ready(function(){	
    var $slider = $('#slider'),//This is our slider
    	$pictures = $('#slider .pictures'),//Get the pictures
    	sliderIndex = $pictures.length - 1;//Get the picture index
    	i = 0,
    	$current = $pictures.eq(i),
    	finalOpacity = 1;
    
    $('#next').hide();
    $('#previous').hide();
    $pictures.fadeTo(0, 0);
    $current.fadeTo(0, 1);
    
    //Change the current picture
    function change(){
    	i++;
    	if(i>sliderIndex){
    		i = 0;
    	}
    	console.log('index:'+i);
    	console.log('max index:'+sliderIndex);
    	$current.animate({
    		opacity: '0'
    	}, {
    	    duration : 2000,
    	    easing : 'linear'
    	});
    	$current = $pictures.eq(i);
    	$current.show();
    	$current.animate({
    		opacity: finalOpacity
    	}, {
    	    duration : 2000,
    	    easing : 'linear'
    	});
    }
    //Animate with interval
    function slide(){
        setTimeout(function(){
        	change();
        	slide();
        }, 7000);
    }
    slide();
    
    $( ".pictures" ).mouseenter(function() {
    	console.log('Hover pictures');
    	$('#previous').show();
    	$('#next').show();
    	finalOpacity = 0.8;
    	$current.animate({
    		opacity: '0.8'
    	}, {
    	    duration : 500,
    	    easing : 'linear'
    	});
    });
    
    $( ".pictures" ).mouseleave(function() {
    	console.log('Hover pictures');
    	$('#previous').hide();
    	$('#next').hide();
    	finalOpacity = 1;
    	$current.animate({
    		opacity: '1'
    	}, {
    	    duration : 500,
    	    easing : 'linear'
    	});
    });
    
    $('.pictures').click(function(){
    	//Clear all animations.
    	$pictures.clearQueue();
    	//Change the current picture
    	change();
    });
});