$(function () {
    $(".tab ul li").click(function () {
        $(".tab ul li").removeClass('on');
        $(".tab .conBox").removeClass('on');
        $(this).addClass('on');
        $("#" + $(this).data('id')).addClass('on');
    });
});
