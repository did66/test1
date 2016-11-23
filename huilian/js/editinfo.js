$(function(){
    var flag_01 =true;
    var flag_02 =true;
    var flag_03 =true;
//        编辑个人介绍
    $('.intro_edit').click(function(){
        if(flag_01){
            $(this).find('img').attr('src','images/save.png');
            $('.intro_msg').removeAttr('disabled').focus();
            flag_01 = false;
        }
        else{
            $(this).find('img').attr('src','images/edit.png');
            $('.intro_msg').attr('disabled','disabled');
            flag_01 = true;
        }
    });
//        编辑择偶条件

    $('.criteria_edit').click(function(){
        if(flag_02){
            $(this).find('img').attr('src','images/save.png');
            $('.criteria_wrap select').removeAttr('disabled');
            $('.criteria_wrap .personal_content').addClass('personal_edit');
            $('.mask_tips_area').hide();
            flag_02 = false;
        }
        else{
            $(this).find('img').attr('src','images/edit.png');
            $('.criteria_wrap select').attr('disabled','disabled');
            $('.criteria_wrap .personal_content').removeClass('personal_edit');
            $('.mask_tips_area').show();
            flag_02 = true;
        }
    });
//        编辑基本资料
    $('.infor_edit').click(function(){
        if(flag_03){
            $(this).find('img').attr('src','images/save.png');
            $('.infor_wrap select,.personal_name').removeAttr('disabled');
            $('.infor_wrap .personal_content').addClass('personal_edit');
            $('.personal_name').focus();
            $('.mask_tips_date').hide();
            flag_03 = false;
        }
        else{
            var Namevalue =  $('.personal_name').val();
            if(Namevalue==""){
                show_alert('请填写一个昵称')
                $('.personal_name').focus();
            }
            else{
                $(this).find('img').attr('src','images/edit.png');
                $('.infor_wrap select,.personal_name').attr('disabled','disabled');
                $('.infor_wrap .personal_content').removeClass('personal_edit');
                $('.mask_tips_date').show();
                flag_03 = true;
            }

        }
    });
    //返回按钮
    $('#edit_goback').click(function(){
       if(flag_01&&flag_02&&flag_03){
           show_alert('您的修改信息已全部保存')
       }
        else{
           show_alert('请保存您的全部修改信息')
           return false;

       }
    });
    //提示弹框
    var show_alert = function(alertText){
        $('body').append("<div class='alert_box'></div>")
        $('.alert_box').text(alertText).show();
        setTimeout(function(){
            $('.alert_box').hide();
        },2000)
    }
});