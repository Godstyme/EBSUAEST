
//广告图动画
var _index1=1;
$('.bannerBut ul li').mouseover(function(){
	$(this).addClass('hover').siblings('li').removeClass('hover');
	var _index1=$(this).index();
	$('.bannerCon .scroll').stop().animate({left:-_index1*1140},500);
});

//右边按钮
$('.after img').click(function(){
	_index1++;
	if(_index1>6){
		_index1=1;
		$('.scroll').css('left','0px');
		$('.scroll').animate({left:-_index1*1140},500);
		$('.bannerBut ul li').eq(_index1).addClass('hover').siblings('li').removeClass('hover');
	}else{
		$('.bannerBut ul li').eq(_index1).addClass('hover').siblings('li').removeClass('hover');
		$('.scroll').animate({left:-_index1*1140},500);
	}
});


//左边按钮
$('.before img').click(function(){
	_index1--;
	if(_index1<1){
		_index1=6;
		$('.scroll').css('left','-1400px');
		$('.scroll').animate({left:-_index1*1140},500);
		$('.bannerBut ul li').eq(_index1).addClass('hover').siblings('li').removeClass('hover');
	}else{
		$('.bannerBut ul li').eq(_index1).addClass('hover').siblings('li').removeClass('hover');
		$('.scroll').animate({left:-_index1*1140},500);
	}
});



$(function(){
    //回到顶部
    $(".small_round").click(function(){
        $('html,body').animate({
            scrollTop:0
        });
    });
    //导航鼠标经过下拉
    $('li.dropdown').mouseover(function() {
        $(this).addClass('open');
    }).mouseout(function(){
        $(this).removeClass('open');
    });
});

(function() { /*international切换*/
	var index = 0,
		$img = $(".internation-box img"),
		len = $img.length,
		timer = setInterval(function() {
			runSwitch();
		}, 3500);
	$img.eq(0).addClass('active');
	$(".internation h5").text($img.eq(0).attr('title'));

	function runSwitch() {
		index = (index + 1 < len) ? (index + 1) : 0;
		$(".internation-box img.active").removeClass('active');
		$img.eq(index).addClass('active');
		$(".internation h5").text($img.eq(index).attr('title'));
	}
})();
