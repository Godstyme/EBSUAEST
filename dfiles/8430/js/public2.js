$(function(){ 
    var mouseover_tid = []; 
    var mouseout_tid = []; 
    $(document).ready(function(){ 
        $('.nav li').each(function(index){     
            $(this).hover(function(){             
                var _self = this;             
                clearTimeout(mouseout_tid[index]);                  
                mouseover_tid[index] = setTimeout(function() { 
                    $(".drop-nav").hide(); 
                    $(".drop-nav").eq(index).slideDown("slow");      
                }, 300); 
            },function(){         
                var _self = this;                     
                clearTimeout(mouseover_tid[index]);     
                mouseout_tid[index] = setTimeout(function() {
                    $(document).mousemove(function(e){
                        if($(".drop-nav:visible").length>0){
                            var i=$(".drop-nav").index($(".drop-nav:visible"));
                            if(e.target.className.indexOf("state")>=0) {
                                $(".drop-nav").eq(i).show();
                            }else{
                                $(".drop-nav").hide();
                            }    
                        }
                    });
                }, 300);                   
            });            
        });        
    });    
});
function fadeSlider(_this,imgnote,numnote,timebigBanner) {
       //var timebigBanner = 3000;
    var screenpanelbigBanner = _this.find(imgnote);
    var btnpanelbigBanner =  _this.find(numnote);
    var lenbigBanner = screenpanelbigBanner.size();
    
    var templateLibigBanner = [];
    var indexbigBanner = 0;
    var timesetbigBanner;
    screenpanelbigBanner.eq(0).addClass("current");
    for (var i = 0; i < lenbigBanner; i++) {
        templateLibigBanner.push("<p>&nbsp;</p>");
    }
    btnpanelbigBanner.append(templateLibigBanner.join("")+'<div class="clearfix"></div>');
    btnpanelbigBanner.find("p").eq(0).addClass('act');
   
    _this.hover(function() {
        if (timesetbigBanner) {
            clearInterval(timesetbigBanner);
        }
    }, function() {
        if(lenbigBanner!=1){
            timesetbigBanner = setInterval(function() {
                if(indexbigBanner<lenbigBanner-1)
                    indexbigBanner++;
                else indexbigBanner=0;      
                swiftbigBanner(indexbigBanner);
            }, timebigBanner);
        }
    });
  
    if(lenbigBanner!=1){
        var timesetbigBanner = setInterval(function() { 
            if(indexbigBanner<lenbigBanner-1)
                indexbigBanner++;
            else indexbigBanner=0;      
            swiftbigBanner(indexbigBanner);
            
        }, timebigBanner);      
        
        btnpanelbigBanner.find("p").click(function() {
            indexbigBanner = btnpanelbigBanner.find("p").index(this);
            btnpanelbigBanner.find("p").removeClass('act');
            btnpanelbigBanner.find("p").eq(indexbigBanner).addClass('act');
            _this.find($(".current")).fadeOut(500).removeClass("current");
            screenpanelbigBanner.eq(indexbigBanner).fadeIn(500).addClass("current");
        });
    }
    function swiftbigBanner(i) {
        //var indexbigBanner = i && parseInt(i) ? i : 0;
        var lidombigBanner = screenpanelbigBanner;
        var currentDombigBanner = _this.find(".current");
        //var nextbigBanner = indexbigBanner + 1 >= lenbigBanner ? 0 : indexbigBanner + 1;
        btnpanelbigBanner.find("p").removeClass('act');
        btnpanelbigBanner.find("p").eq(indexbigBanner).addClass('act');
        currentDombigBanner.fadeOut(500).removeClass("current");
        lidombigBanner.eq(indexbigBanner).fadeIn(500).addClass("current");
    }
}

function bannerflide(){
    var index= 0,len=$(".imgbox .img").length;
    var str;
    $(".imgbox .img:first").addClass("current");
    $(".menu .num a:first").addClass("act");
    str="<i class='act'></i>";
    for(i=1;i<len;i++)
        str+="<i></i>";
    str+="<div class='clearfix'></div>";
    $(".imgnum").html(str);
    $(".imgnum i:first").addClass("act");
    $(".imgbox").hover(function() {
        if (timeset) {
            clearInterval(timeset);
        }
    }, function() {
        timeset = setInterval(function() {
            if(index<len-1)
                index++;
            else index=0;
            goRuns();
        }, 3500);
    });
    var timeset = setInterval(function() {
        if(index<len-1)
            index++;
        else index=0;
        goRuns();
    }, 3500);
    $(".imgnum i").click(function() {
        index = $(".imgnum i").index(this);
        goRuns();
    });
    function goRuns(){
        $(".imgbox .img.current").removeClass("current").clone().appendTo(".imgbox").css({position:'absolute',left:'0',top:'0',display:'block'}).addClass('temp');
        $(".imgbox .img").eq(index).addClass("current");
        $(".imgbox a.temp").animate({'filter':'alpha(opacity=0)','-moz-opacity':'0.0','-khtml-opacity':'0.0','opacity':'0.0'},1200,function(){
            $(this).remove();
        });       
        $(".menu .num a.act").removeClass("act");
        $(".menu .num a").eq(index).addClass("act");
        $(".imgnum i.act").removeClass("act");
        $(".imgnum i").eq(index).addClass("act");
    }
    $(".prevNav").click(function(){
        if(index>0)
            index--;
        else index=len-1;
        goRuns();
        return false;
    });
    $(".nextNav").click(function(){
        if(index<len-1)
            index++;
        else index=0;
        goRuns();
        return false;
    })
}