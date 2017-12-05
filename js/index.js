// import { setTimeout } from "timers";

// トップスライドショー
$(".top").vegas({
  slides: [{
      src: '../img/about2.jpg'
    },
    {
      src: '../img/lock.jpg'
    },
    {
      src: '../img/top.jpg'
    },
    {
      src: '../img/top2.jpg'
    }
  ],
  animation: 'random'
});


// リロード時トップに戻る
$(window).on('load', function(){
	$('html,body').animate({ scrollTop: 0 });
});
var diff = 7;


var $svg = $('.logo').drawsvg({
  duration: 500,
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
  console.log(diff + "px")
  TweenMax.to('.opening-lists', .2, {
    top: diff + "rem",
    delay: .6,
    onComplete: function() {
      if(diff != -7) {
        diff -= 7;
        opening(diff);
      }else {
        TweenMax.to('.opening-lists', .5, {
          opacity: 0,
          delay: .8,
          onComplete: function() {
            $svg.drawsvg('animate');

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
    $("html").animate({
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
    $("html").animate({
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
    TweenMax.to(".about-right-filter", .8, {
      left: 0,
      opacity: 1,
      ease: Power4.easeIn
    });
    TweenMax.to(".about-right", 0, {
      backgroundImage: "url('../img/about2.jpg')",
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