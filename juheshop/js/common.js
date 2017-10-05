/*顶部菜单下拉*/
    $('.w_right li').hover(function () {
        $(this).find('.w_right_pic').addClass('w_right_pic_top');
        $(this).find('span').css('color', '#c91623');
        $(this).addClass('w_right_li');
        $(this).find('.w_right_a_list').show();
        $(this).find('.w_right_ma').show();
    }, function () {
        $(this).find('.w_right_pic').removeClass('w_right_pic_top');
        $(this).find('span').css('color', '');
        $(this).removeClass('w_right_li');
        $(this).find('.w_right_a_list').hide();
        $(this).find('.w_right_ma').hide();
    });