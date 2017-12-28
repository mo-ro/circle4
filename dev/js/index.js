// トップスライドショー
// $(".top").vegas({
//   slides: [{
//       src: './img/about2.jpg'
//     },
//     {
//       src: './img/lock.jpg'
//     },
//     {
//       src: './img/top.jpg'
//     },
//     {
//       src: './img/top2.jpg'
//     }
//   ],
//   animation: 'random'
// });


// リロード時トップに戻る
// $(window).on('load', function(){
// 	$('html,body').animate({ scrollTop: 0 }, 1);
// });

// ふわふわボタン
TweenMax.to('.top-scrollButton', .8, {
  transform: 'rotate(45deg) translate(-8px, -8px)',
  repeat: -1,
  yoyo: true
})

$('.top-scrollButton').click(function () {
  $("html").animate({
    scrollTop: $(window).height()
  }, 700);
});

var diff = 100;
var newsFlg = false;


function opening(diff) {
  TweenMax.to('.opening-lists', .2, {
    top: diff + "%",
    delay: .6,
    onComplete: function () {
      if (diff >= 0) {
        diff -= 100;
        opening(diff);
      } else {
        TweenMax.to('.opening-lists', .5, {
          opacity: 0,
          delay: .8,
          onComplete: function () {
            TweenMax.to(".top-filter", 2, {
              backgroundColor: "rgba(0, 0, 0, 0.45)",
            });
            TweenMax.to(".top-overlay2", 1, {
              left: "100%",
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
var detailFlg = false;
var winHeight = $(window).height();
var winWidth = $(window).width();
var topFlg = false;

$(window).scroll(function () {
  var after = $(window).scrollTop();
  var scrl = $(window).scrollTop();

  if (winWidth > 900) {
    if (scrl > 300 && scrl < 1100) {
      TweenMax.to('.about', .3, {
        right: 0,
        ease: Power0.easeNone
      });
      TweenMax.to('.Side-navigation__circle--about', .3, {
        backgroundColor: "#03A9F4"
      });
    } else {
      TweenMax.to('.about', .3, {
        right: '96%',
        ease: Power0.easeNone
      });
      TweenMax.to('.Side-navigation__circle--about', .3, {
        backgroundColor: "#FFD180"
      });
    }
    if (scrl > 1100 && scrl < 1600) {
      TweenMax.to('.detail', .3, {
        right: 0,
        ease: Power0.easeNone
      });
      TweenMax.to('.Side-navigation__circle--detail', .3, {
        backgroundColor: "#03A9F4"
      });
    } else {
      TweenMax.to('.detail', .3, {
        right: '96%',
        ease: Power0.easeNone
      });
      TweenMax.to('.Side-navigation__circle--detail', .3, {
        backgroundColor: "#FFD180"
      });
    }
    if (scrl > 1600 && scrl < 2100) {
      TweenMax.to('.news', .3, {
        right: 0,
        ease: Power0.easeNone
      });
      TweenMax.to('.Side-navigation__circle--active', .3, {
        backgroundColor: "#03A9F4"
      });
    } else {
      TweenMax.to('.news', .3, {
        right: '96%',
        ease: Power0.easeNone
      });
      TweenMax.to('.Side-navigation__circle--active', .3, {
        backgroundColor: "#FFD180"
      });
    }
    if (scrl > 2100) {
      TweenMax.to('.genre', .3, {
        right: 0,
        ease: Power0.easeNone
      });
      TweenMax.to('.Side-navigation__circle--genre', .3, {
        backgroundColor: "#03A9F4"
      });
    } else {
      TweenMax.to('.genre', .3, {
        right: '96%',
        ease: Power0.easeNone
      });
      TweenMax.to('.Side-navigation__circle--genre', .3, {
        backgroundColor: "#FFD180"
      });
    }
  }

  if (scrl >= winHeight) {
    TweenMax.to('.Side-navigation', .3, {
      left: '95%'
    });
    TweenMax.to('.logo', 0, {
      position: 'fixed'
    })
  } else {
    TweenMax.to('.Side-navigation', .3, {
      left: '100%'
    })
    TweenMax.to('.logo', 0, {
      position: 'absolute'
    })
  }

  before = after;
});

//サイドメニュークリックイベント
$('a[href^="."]').click(function () {
  var href = $(this).attr("href");
  var target = $(href == "" ? 'html' : href);
  var position = target.offset().top;
  $('body,html').animate({
    scrollTop: position + 1
  }, 450, 'swing');
  return false;
});

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemTop >= docViewTop) && (elemBottom <= docViewBottom));
}