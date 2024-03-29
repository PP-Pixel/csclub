//タイマー
$(function () {
	var timer = false;
	$(window).resize(function () {
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function () {
		}, 500);
	});
});


// menu
// $(window).on("load resize", function() {
// 	setTimeout(function(){

// 		var winW = window.innerWidth;
// 		var winBP = 800;	//ブレイクポイント

// 			//小さな端末用
// 			if(winW < winBP) {
// 				$('body').addClass('s').removeClass('p');
// 				$('#menubar').addClass('dn').removeClass('db');
// 				$('#menubar_hdr').addClass('db').removeClass('dn').removeClass('ham');

// 			//大きな端末用
// 			} else {
// 				// $('body').addClass('p').removeClass('s');
// 				// $('#menubar').addClass('db').removeClass('dn');
// 				// $('#menubar_hdr').removeClass('db').addClass('dn');
// 				$('body').addClass('s').removeClass('p');
// 				$('#menubar').addClass('dn').removeClass('db');
// 				$('#menubar_hdr').addClass('db').removeClass('dn').removeClass('ham');
// 			}

// 	}, 100);
// });


// //ハンバーガーメニューをクリックした際の処理
// $(function() {
// 	$('#menubar_hdr').click(function() {
// 		$(this).toggleClass('ham');

// 			if($(this).hasClass('ham')) {
// 				$('#menubar').addClass('db').removeClass('dn');
// 			} else {
// 				$('#menubar').addClass('dn').removeClass('db');
// 			}

// 	});
// });


// // 同一ページへのリンクの場合に開閉メニューを閉じる処理
// $(function() {
// 	$('#menubar a[href^="#"]').click(function() {
// 		$('#menubar').removeClass('db');
// 		$('#menubar_hdr').removeClass('ham');
// 	});
// });


// //ドロップダウンの親liタグ
// $(function() {
//     $('#mainmenu a[href=""]').click(function() {
// 		return false;
//     });
// });


// //ドロップダウンメニューの処理
// $(function(){

// 	$('#menubar li:has(ul)').addClass('ddmenu_parent');
// 	$('#mainmenu li:has(ul)').addClass('ddmenu_parent');
// 	$('.ddmenu_parent > a').addClass('ddmenu');

// 		//タッチデバイス用
// 		$('.ddmenu').on('touchstart', function() {
// 			$(this).next('ul').stop().slideToggle();
// 			$('.ddmenu').not(this).next('ul').slideUp();
// 			return false;
// 		});

// 		//PC用
// 		$('.ddmenu_parent').hover(function() {
// 			$(this).children('ul').stop().slideToggle();
// 		});

// });

$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
	$("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
	$(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
	$("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

// keydownイベントの処理を追加
document.addEventListener("keydown", function (event) {
	// 押されたキーのコード
	let keyCode = event.keyCode;

	// キーコードが「enter」の場合
	if (keyCode === 13) {
		$(this).toggleClass('active');
		$("#g-nav").toggleClass('panelactive');
	}
});

document.addEventListener("keydown", function (event) {
	let keyCode = event.keyCode;
	// esc
	if (keyCode === 27) {
		$(this).toggleClass('active');
		$("#g-nav").toggleClass('panelactive');
	}
});

$(function () {
	// 対象の要素を取得
	$('#menubar a[href^="#"]').click(function () {
		// メニューバーを閉じる
		$(".openbtn").removeClass('active');
		$("#g-nav").removeClass('panelactive');
	});
});

//pagetop
$(function () {
	var scroll = $('.pagetop');
	var scrollShow = $('.pagetop-show');
	$(scroll).hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 300) {
			$(scroll).fadeIn().addClass(scrollShow);
		} else {
			$(scroll).fadeOut().removeClass(scrollShow);
		}
	});
});


//スムーススクロール
$(window).on('load', function () {
	var hash = location.hash;
	if (hash) {
		$('body,html').scrollTop(0);
		setTimeout(function () {
			var target = $(hash);
			var scroll = target.offset().top;
			$('body,html').animate({ scrollTop: scroll }, 500);
		}, 100);
	}
});
$(window).on('load', function () {
	$('a[href^="#"]').click(function () {
		var href = $(this).attr('href');
		var target = href == '#' ? 0 : $(href).offset().top;
		$('body,html').animate({ scrollTop: target }, 500);
		return false;
	});
});


// 汎用開閉処理
$(function () {
	$('.openclose').next().hide();
	$('.openclose').click(function () {
		$(this).next().slideToggle();
		$('.openclose').not(this).next().slideUp();
	});
});


//h2の中に下線用のスタイルを作る
$(function () {
	$('main h2').wrapInner('<span class="uline">');
});

// 右クリック禁止
document.oncontextmenu = function () {
	return false;
}