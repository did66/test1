/**
 * Created by liuzp1
 */


  //活动页面
  //        显示隐藏活动列表
    $('.act_wraper .act_list_title').each(function(index,element){
        var actLenght = $('.act_wraper .act_list_title').eq(index).siblings('.act_list').find('li').length;
        var thisNum = $('.act_wraper .act_list_title').eq(index).find('.act_list_num');
        thisNum.text(actLenght)
        $(this).toggle(function(){
            $(this).find('.act_lis_ico').addClass('act_list_rotate');
            $(this).siblings('.act_list').find('li').hide();

        },function(){
            $(this).find('.act_lis_ico').removeClass('act_list_rotate');
            $(this).siblings('.act_list').find('li').show();

        });
    });
   //发布动态页面
  // 文字个数
    var textarea = document.getElementById('textarea');
    var num = document.getElementById('num');
    var saveDynamic = document.getElementById('saveDynamic');
    if(textarea){
        textarea.addEventListener('focus',function(){
            star()
        });
        textarea.addEventListener('blur',function(){
            clearInterval(setinter)
        });
    }
    function star(){
        var max = 500;
        setinter = setInterval(function(){
            var total = textarea.value.length;
            num.innerHTML = total;
            if(total>500){
                num.style.color = '#ff0000';
            }
            else{
                num.style.color = '#666666';
            }
        },200)
    }
    //确定发布心情
    $('.release_btn').click(function(){
        if(textarea.value.length>500){
            console.log(textarea.value.length)
            show_alert('文字内容不能超过500字');
        }
    });

    //修改密码页面
    $('.password_save').click(function(){
        var oldpassword = $('.old_password').val();
        var passwordone = $('.password_01').val();
        var passwordtwo = $('.password_02').val();
        //                正则匹配：数字+字母，数字+特殊字符，字母+特殊字符，数字+字母+特殊字符组合,密码长度9-20
        //var rightpassword = RegExp(/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{9,20}$/);
        var rightpassword = RegExp(/^.{0,20}$/);
        if(oldpassword==""||passwordone==""){
            show_alert('密码输入不能为空')
            return false;
        }
        else if(!rightpassword.test(passwordone)){
            show_alert('密码长度不能超过20字符');
            return false;
        }
        else if(oldpassword==passwordone){
            show_alert('新密码不能与旧密码相同');
            return false;
        }
        else if(passwordone!==passwordtwo){
            show_alert('两次新密码输入不一致');
            return false;
        }
        show_alert('密码修改成功')
    });

    var show_alert = function(alertText){
        $('body').append("<div class='alert_box'></div>")
        $('.alert_box').text(alertText).show();
        setTimeout(function(){
            $('.alert_box').hide();
        },2000)
    }

