$(".top").vegas({
    slides: [
        { src: '../img/about2.jpg' },
        { src: '../img/lock.jpg' },
        { src: '../img/top.jpg' },
        { src: '../img/top2.jpg' }
    ],
    animation: 'random'
});

var $svg = $('.logo').drawsvg({
  duration:1000, 
  stagger:30, 
  easing:'swing', 
  reverse:false, 
  callback: function() {
    TweenMax.to(".logo", .3, {fill: "#fff", delay: 2});
    TweenMax.to(".top-filter", 2, {backgroundColor: "rgba(0, 0, 0, 0.65)", delay: 2});
    TweenMax.to(".top-overlay2", 1, {left: 0, delay: .8, ease: Expo.easeOut});
    TweenMax.to(".top-overlay2", 1, {left: "100%", delay: 2, ease: Expo.easeOut});
  }
});
// console.log($svg);

$svg.drawsvg('animate');
// new Vivus('test', {duration: 200 , start: 'autostart'});

// $(".top-border").drawsvg('animate');





