$(document).ready(function(){
    $(".btn_button").click(function(){
        var submenu = $(this).next("ul");
            // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
            if( submenu.is(":visible") ) {
                submenu.slideUp();
            } else {
                submenu.slideDown();
            }
    });
});
