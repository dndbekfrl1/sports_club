$(function(){
    $(".mytab ul li").click(function(){
        $(".mytab ul li").removeClass('on');
        $(".mytab .conBox").removeClass('on');
        $(this).addClass('on');
        $("#"+$(this).data('id')).addClass('on');
    });
});

$(function(){
    $(".clubtab ul li").click(function(){
        $(".clubtab ul li").removeClass('on');
        $(".clubtab .clubconBox").removeClass('on');
        $(this).addClass('on');
        $("#"+$(this).data('id')).addClass('on');
    });
});
