/**
 * Created by liuzp1 on 2016/11/28.
 */
$(function(){
//      输入框默认文字
    $('.input_tips').bind({
        focus:function(){
            if (this.value == this.defaultValue){
                this.value="";
            }
        },
        blur:function(){
            if (this.value == ""){
                this.value = this.defaultValue;
            }
        }
    });
//      留言表单提交
    $('.go_msg').click(function(){
        var userName = $('.user_name').val();
        var userPhone = $('.user_phone').val();
        if(userName==''||userName=='您的真实姓名'){
            alert('姓名必须填写')
            $('.user_name').focus();
            return false;
        }
        if(!(/^1(3|4|5|7|8)\d{9}$/.test(userPhone))){
            alert("请输入正确格式的手机号码");
            $('.user_phone').focus();
            return false;
        }
        else{
            //ajax
        }
    });

    //图片滚动点击
    var marquee = document.getElementById('marquee');
    var flag = true;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.free_call_wrap').remove();
        marquee.onclick = function(){
            if(flag){
                this.stop();
                flag = false;
            }
            else{
                this.start();
                flag = true;
            }
        }
    }
    else{
        marquee.onmouseover = function(){
            this.stop();
        }
        marquee.onmouseout = function(){
            this.start();
        }
    }
    //留言返回顶部
    var $totop = $('.totop');
    var $messge = $('.message');

    window.onscroll = function(){
        var scolltop = $(this).scrollTop();
        scolltop==0?$totop.hide():$totop.show();
        var windowHeight = $(this).height()+500;
        var scrollHeight = $(document).height();
        scolltop + windowHeight >= scrollHeight?$messge.hide(): $messge.show();
    }
    $totop.click(function(){
        $('html,body').animate({scrollTop:0},800)
    });

});
