// import { setTimeout } from "timers";

// トップスライドショー
// $(".top").vegas({
//   slides: [{
//       src: '../img/about2.jpg'
//     },
//     {
//       src: '../img/lock.jpg'
//     },
//     {
//       src: '../img/top.jpg'
//     },
//     {
//       src: '../img/top2.jpg'
//     }
//   ],
//   animation: 'random'
// });


// リロード時トップに戻る
$(window).on('load', function(){
	$('html,body').animate({ scrollTop: 0 }, 1);
});

// ふわふわボタン
// TweenMax.to('.top-scrollButton', .8, {
//   transform: 'rotate(45deg) translate(-8px, -8px)',
//   repeat: -1,
//   yoyo: true
// })

$('.top-scrollButton').click(function() {
  $("html").animate({
    scrollTop: $(window).height()
  }, 700);
});

var diff = 100;


var $svg = $('.logo').drawsvg({
  duration: 200,
  stagger: 20,
  easing: 'swing',
  reverse: false,
  callback: function () {
    TweenMax.to(".logo", .3, {
      fill: "#fff"
    });
    TweenMax.to(".top-filter", 2, {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      delay: .8
    });
    TweenMax.to(".top-overlay2", 1, {
      left: "100%",
      delay: .8,
      ease: Expo.easeOut
    });
  }
});

setTimeout(function() {
}, 2000);

function opening(diff) {
  TweenMax.to('.opening-lists', .2, {
    top: diff + "%",
    delay: .6,
    onComplete: function() {
      if(diff >= 0) {
        diff -= 100;
        opening(diff);
      }else {
        TweenMax.to('.opening-lists', .5, {
          opacity: 0,
          delay: .8,
          onComplete: function() {
            // $svg.drawsvg('animate');
            TweenMax.to(".top-filter", 2, {
              backgroundColor: "rgba(0, 0, 0, 0.65)",
              // delay: .
            });
            TweenMax.to(".top-overlay2", 1, {
              left: "100%",
              // delay: .5,
              ease: Expo.easeOut
            });
          }
        })
      }
    }
  });
}

opening(diff);

var before = $(window).scrollTop();
var flg = false;
var intoFlg = false;

$(window).scroll(function () {
  var after = $(window).scrollTop();

  // console.log(after)
  if (before > after && $(window).scrollTop() <= $(window).height() && !flg) {
    flg = true;
    var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    $(document).on(scroll_event, function (e) {
      e.preventDefault();
    });
    $("html, body").animate({
      scrollTop: 0
    }, 700);
    // $("main").css("top", 0);

    var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    setTimeout(function () {
      $(document).off(scroll_event);
      flg = false;
    }, 900)
  } else if (before < after && $(window).scrollTop() > 0 && $(window).scrollTop() < 300 && !flg) {
    flg = true;
    var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    $(document).on(scroll_event, function (e) {
      e.preventDefault();
    });
    $("html, body").animate({
      scrollTop: $(window).height()
    }, 700);
    // $("main").css("top", 0);

    var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    setTimeout(function () {
      flg = false;
      $(document).off(scroll_event);
    }, 900)
  }
  if (isScrolledIntoView($('.about')) == true && !intoFlg) {
    intoFlg = true;
    TweenMax.to('.about-left', .8, {
      opacity: 1,
      // delay: .3,
      transform: 'translate(0, 0)'
    });
    TweenMax.to(".about-right-filter", .8, {
      left: 0,
      opacity: 1,
      ease: Power4.easeIn
    });
    TweenMax.to(".about-right", 0, {
      backgroundImage: "url('../img/about2.jpg')",
      delay: .8
    });
    TweenMax.to(".about-right2", 0, {
      backgroundImage: "url('../img/about6.jpg')",
      delay: .8
    });
    // $(".about-right").css("background-image", "url('../img/about2.jpg')")
    TweenMax.to(".about-dancing", 1, {
      color: "#F57C00",
      delay: .8
    });
    TweenMax.to(".about-right-filter", .3, {
      left: "100%",
      opacity: 1,
      delay: 1
    });
  }

  before = after;
});

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}