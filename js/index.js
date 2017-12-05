//トップスライドショー
// $(".top").vegas({
//     slides: [
//         { src: '../img/about2.jpg' },
//         { src: '../img/lock.jpg' },
//         { src: '../img/top.jpg' },
//         { src: '../img/top2.jpg' }
//     ],
//     animation: 'random'
// });


//リロード時トップに戻る
// $(window).on('load', function(){
// 	$('html,body').animate({ scrollTop: 0 });
// });


var $svg = $('.logo').drawsvg({
  duration: 500, 
  stagger: 20, 
  easing:'swing', 
  reverse:false, 
  callback: function() {
    TweenMax.to(".logo", .3, {fill: "#fff"});
    TweenMax.to(".top-filter", 2, {backgroundColor: "rgba(0, 0, 0, 0.65)", delay: .8});
    
    TweenMax.to(".top-overlay2", 1, {left: "100%", delay: .8, ease: Expo.easeOut});
  }
});

$svg.drawsvg('animate');

// $('.Grobal_wrapper').onepage_scroll({
//   sectionContainer: 'section',
//   easing: 'ease',
//   animationTime: 500,
//   loop: false,
//   responsiveFallback: 700,
//   pagination: false,
//   direction: "vertical"
// });

// $(".top-border").drawsvg('animate');

var before = $(window).scrollTop();
var flg = false;
$(window).scroll(function() {
var after = $(window).scrollTop();

// console.log(after)
if(before > after && $(window).scrollTop() <= $(window).height()  && !flg) {
  flg = true;
  var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
  $(document).on(scroll_event,function(e){e.preventDefault();});
  $("html").animate({scrollTop:0}, 700);
  // $("main").css("top", 0);

  var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
  setTimeout(function() {
  $(document).off(scroll_event); 
  flg = false;
  },900)
}
else if(before < after && $(window).scrollTop() > 0 && $(window).scrollTop() < 300 && !flg) {
  flg = true;
  var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
  $(document).on(scroll_event,function(e){e.preventDefault();});
  $("html").animate({scrollTop:$(window).height()}, 700);
  // $("main").css("top", 0);

  var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
  setTimeout(function() {
  flg = false;  
  $(document).off(scroll_event); 
  },900)
}

if($("main").css("top") == "0px" && $(window).scrollTop() == 0) {
  // $("main").css("top", "100vh");
}
before = after;
});




