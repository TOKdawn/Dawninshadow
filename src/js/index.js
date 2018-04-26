var title1 = [` Hello!&nbsp;<br> I'm&nbspTOKdawn`,
    `&nbsp;ello!&nbsp;<br> I'm&nbsp;TOKdawn`,
    `&nbsp;&nbsp;llo!&nbsp;<br> I'm&nbsp;TOKdawn`,
    `&nbsp;&nbsp;&nbsp;lo!&nbsp;<br> I'm&nbsp;TOKdawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;o!&nbsp;<br> I'm&nbsp;TOKdawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;!&nbsp;<br> I'm&nbsp;TOKdawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>I'm&nbsp;TOKdawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;'m&nbsp;TOKdawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;m&nbsp;TOKdawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;TOKdawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbspOKdawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbspKdawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dawn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;awn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wn`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n`,
    `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,

]
var describe = [
    '我是前端开发者?普通大学生?<br>口琴爱好者?',
    '也是前端开发者?普通大学生?<br>口琴爱好者?',
    '也是求知开发者.普通大学生?<br>口琴爱好者?',
    '也是求知开发者.普通大学生?<br>口琴爱好者?',
    '也是求知的弱鸡.普通大学生?<br>口琴爱好者?',
    '也是求知的弱鸡.普通大学生?<br>口琴爱好者?',
    '也是求知的弱鸡.普通大学生?<br>口琴爱好者?',
    '也是求知的弱鸡?中二大学生?<br>口琴爱好者?',
    '也是求知的弱鸡?中二大学生?<br>口琴爱好者?',
    '也是求知的弱鸡?中二病患者?<br>口琴爱好者?',
    '也是求知的弱鸡?中二病患者?<br>口琴爱好者?',
    '也是求知的弱鸡?中二病患者?<br>口琴爱好者?',
    '也是求知的弱鸡.中二病患者.<br>口琴不会吹.',
    '也是求知的弱鸡.中二病患者.<br>口琴不会吹.',
    '也是求知的弱鸡.中二病患者.<br>根本不会吹.',
    '也是求知的弱鸡.中二病患者.<br>根本不会吹.',
    '也是求知的弱鸡.中二病患者.<br>根本不会吹.',

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
    $("#DS_describe_one").html(describe[textlimut]);


}

window.onscroll = function(e) {
    var Dawn = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(Dawn);
    var Progress;
    if (Dawn >= 0 && Dawn < 5) {
        $('#Ds_watch_more').css('display', 'block');
    } else {
        $('#Ds_watch_more').css('display', 'none');
    }
    if (Dawn > 0 && Dawn < 1000) {
        $('#DS_div_one').addClass("active");
        Progress = parseInt((Dawn - 0) / 15);
        // console.log('%' + Progress);
        Change1(Progress, "DS_div_one");
    }
    if (Dawn > 1000 && Dawn < 2000) {
        $('#DS_div_one').removeClass("active");

    }

}