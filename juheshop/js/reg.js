
    /*协议*/
    $('#Agreement').click(function () {
        $('.Agreement').show();
    });
    $('.CloseAgreement').click(function () {
        $('.Agreement').hide();
        $('#tmpimgcode').click();
    });



    /*输入框单一验证*/
    $('#regform .field').focus(function () {
        if (!$(this).parents('.needinput').next('.needtip').hasClass('error')) {
            $(this).parents('.needinput').css('border', '1px solid #ddd');
            $(this).parents('.needinput').next('.needtip').removeClass('error');
            $(this).parents('.needinput').next('.needtip').find('span').html('<i class="i-def"></i>' + $(this).attr('data_def_tip'));
        }
    });

    $('#regform .field').blur(function () {
        if ($.trim($(this).val()) != '') {
            $('input[name="othertype"]').val($(this).attr('name'));
            ckform(function (msgdata) {
                var this_input = $('input[name="' + msgdata.data + '"]');
                if (msgdata.code != 0) {
                    $(this_input).parents('.needinput').css('border', '1px solid #E73736');
                    $(this_input).parents('.needinput').next('.needtip').addClass('error');
                    $(this_input).parents('.needinput').next('.needtip').find('span').html('<i class="i-error"></i>' + msgdata.msg);
                } else {
                    $(this_input).parents('.needinput').css('border', '1px solid #ddd');
                    $(this_input).parents('.needinput').next('.needtip').removeClass('error');
                    $(this_input).parents('.needinput').next('.needtip').find('span').html('');
                }
            });
        } else {
            $(this).parents('.needinput').css('border', '1px solid #ddd');
            $(this).parents('.needinput').next('.needtip').removeClass('error');
            $(this).parents('.needinput').next('.needtip').find('span').html('');
        }
    });
