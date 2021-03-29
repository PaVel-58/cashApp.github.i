$(window).on('mousemove', function(e) {
    var x = e.clientX;
    var y = e.clientY;
    var windowWidth = $(window).width() / 2;
    var windowHeight = $(window).height() / 2;
    $('.translateOnMouseMove').each(function() {
        var translateSpeed = $(this).attr('data-animateSpeed');
        $(this).css({
            transform: `translate( ${ (windowWidth - x)/translateSpeed}px, ${( windowHeight - y )/translateSpeed}px)`
        });
    });
    $('.rotateOnMouseMove').each(function() {
        var rotateSpeed = $(this).attr('data-animateSpeed');
        $(this).css({
            transform: `rotateX( ${ (windowHeight - y)/rotateSpeed}deg) rotateY(${( windowWidth - x )/rotateSpeed * -1 }deg)`
        });
        console.log(windowWidth, windowHeight)
    });
});

// green sock
$(window).on('scroll', function() {
	$(".addClassOnScroll").each(function() {
		var height = $(window).height();
		var scrollTop = $(window).scrollTop();
		var obj = $(this);
		var pos = obj.position();
		if (height + scrollTop - 200 > pos.top) {
	  		$(this).addClass('animated');
		}
		else {
	  		$(this).removeClass('animated');
		}
	})
});

gsap.to(".payments__back", {
	scrollTrigger: {
		trigger: ".payments",
		scrub: 1,
		start: "top 50%",
		end: "bottom 50%",
		// markers: true
	},
	y: () => {
		return -40 * 100 / 1366 + 'vw';
	}
});

gsap.to(".payments__between", {
	scrollTrigger: {
		trigger: ".payments",
		scrub: 1,
		start: "top 50%",
		end: "bottom 50%",
		// markers: true
	},
	y: () => {
		return -80 * 100 / 1366 + 'vw';
	}
});

gsap.to(".payments__front", {
	scrollTrigger: {
		trigger: ".payments",
		scrub: 1,
		start: "top 50%",
		end: "bottom 50%",
		// markers: true
	},
	y: () => {
		return -100 * 100 / 1366 + 'vw';
	}
});

// gsap.to(".header__back", {
// 	scrollTrigger: {
// 		trigger: ".header",
// 		scrub: 1,
// 		start: "55% 50%",
// 		end: "150% 50%",
// 		markers: true
// 	},
// 	y: () => {
// 		return -40 * 100 / 1366 + 'vw';
// 	}
// });

// gsap.to(".header__between", {
// 	scrollTrigger: {
// 		trigger: ".header",
// 		scrub: 1,
// 		start: "55% 50%",
// 		end: "150% 50%",
// 		markers: true
// 	},
// 	y: () => {
// 		return -80 * 100 / 1366 + 'vw';
// 	}
// });

// gsap.to(".header__front", {
// 	scrollTrigger: {
// 		trigger: ".header",
// 		scrub: 1,
// 		start: "55% 50%",
// 		end: "150% 50%",
// 		markers: true
// 	},
// 	y: () => {
// 		return -100 * 100 / 1366 + 'vw';
// 	}
// });

