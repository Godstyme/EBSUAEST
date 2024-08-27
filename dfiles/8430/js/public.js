$(".header-menu-m-btn").click(function(){/*菜单*/
    $(".users-list").hide();
    if($(".header-menu-m-nav:visible").length==0)
        $(".header-menu-m-nav").show();
    else{
        $(".header-menu-m-nav").hide();
    }
});
(function(){
    var browser=navigator.appName;
    var b_version=navigator.appVersion;
    var version=b_version.split(";");
    var trim_Version=version[1].replace(/[ ]/g,"");
    if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0")
    {
        alert("Unfortunately, your browser is too old to work on the website. Please upgrade your browser.");
    }
    if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0")
    {
        alert("Unfortunately, your browser is too old to work on the website. Please upgrade your browser.");
    }
})();