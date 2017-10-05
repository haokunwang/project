
    /*密码显示*/
    $('#pwdshow').click(function () {
        if ($(this).attr('src') == $(this).attr('data_close_src')) {
            $('#loginpwdshow').val($('#loginpwd').val());
            $('#loginpwd').hide();
            $('#loginpwdshow').show();
            $(this).attr('src', $(this).attr('data_poen_src'));
        } else {
            $('#loginpwd').val($('#loginpwdshow').val());
            $('#loginpwdshow').hide();
            $('#loginpwd').show();
            $(this).attr('src', $(this).attr('data_close_src'));
        }
    });



    /*切换登录*/
    $('.login_type .type').click(function () {
        if ($(this).hasClass('account_icon')) {
            $(this).removeClass('account_icon').addClass('sj_icon');
            $(this).prev('span').text('手机号验证码登录');
            $(this).next('.txt').removeClass('sj_ts').addClass('zh_ts').text('账号登录点击此处');
            $('.account_login').hide();
            $('.cellphone_login').show();
            $('#tmpimgcode').click();
        } else {
            $(this).removeClass('sj_icon').addClass('account_icon');
            $(this).prev('span').text('账号密码登录');
            $(this).next('.txt').removeClass('zh_ts').addClass('sj_ts').text('手机号登录点击此处');
            $('.cellphone_login').hide();
            $('.account_login').show();
        }
    });
