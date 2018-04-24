$(document).ready(function() {
    $('#DS_fill').height($(window).height());
    $(window).resize(function() { //当浏览器大小变化时
        $('#DS_fill').height($(window).height());
        //填充末尾div,以保持scrollTop在各种高度浏览器间恒定
    });
    // var Maxscroll = $("html").height() - $(window).height();

});
window.onscroll = function(e) {
    var Dawn = document.documentElement.scrollTop || document.body.scrollTop;

}