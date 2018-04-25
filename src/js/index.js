var title1 = [` Hello!&nbsp;&nbsp; I'm&nbspTOKdawn`,
    `&nbsp;ello!&nbsp;&nbsp; I'm&nbsp;TOKdawn`,
    `&nbsp;&nbsp;llo!&nbsp;&nbsp; I'm&nbsp;TOKdawn`,
    `&nbsp;&nbsp;&nbsp;lo!&nbsp;&nbsp; I'm&nbsp;TOKdawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;o!&nbsp;&nbsp; I'm&nbsp;TOKdawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;!&nbsp;&nbsp; I'm&nbsp;TOKdawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I'm&nbsp;TOKdawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'m&nbsp;TOKdawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m&nbsp;TOKdawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TOKdawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspOKdawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbspKdawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;awn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp`,
]

var Change1 = function(type, id) {
    var opacityNum = 'translateY(-' + type + '%)';
    var scaleY = 'scaleY(' + (1 + (type / 3)) + ')';
    var bgcolor = ' hsl(0, 0% ,' + (100 - (type * 2)) + '%)';
    var textlimut = Math.ceil(type / 3);

    // console.log(opacityNum);
    $('#' + id).css('transform', opacityNum);
    $('#DS_line').css({ 'transform': scaleY, 'background-color': bgcolor });

    $("#DS_title_one").html(title1[textlimut]);
}

window.onscroll = function(e) {
    var Dawn = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(Dawn);
    var Progress;
    if (Dawn >= 0 && Dawn < 5) {
        $('#Ds_watch_more').css('display', 'block');
    } else {
        $('#Ds_watch_more').css('display', 'none');
    }
    if (Dawn > 0 && Dawn < 500) {
        $('#DS_div_one').addClass("active");
        Progress = parseInt((Dawn - 0) / 5);
        console.log('%' + Progress);
        Change1(Progress, "DS_div_one");
    }
    if (Dawn > 500 && Dawn < 1000) {
        $('#DS_div_one').removeClass("active");

    }

}