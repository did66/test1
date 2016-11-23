//修改密码页面
    $('.password_save').click(function(){
        var oldpassword = $('.old_password').val();
        var passwordone = $('.password_01').val();
        var passwordtwo = $('.password_02').val();
        //                正则匹配：数字+字母，数字+特殊字符，字母+特殊字符，数字+字母+特殊字符组合,密码长度9-20
        //var rightpassword = RegExp(/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{9,20}$/);
        //var rightpassword = RegExp(/^(?![\d]+$)(?![a-zA-Z]+$).{9,20}$/);
        var rightpassword = RegExp(/^.{0,20}$/);
        if(oldpassword==""||passwordone==""){
            show_alert('密码输入不能为空')
            return false;
        }
        else if(!rightpassword.test(passwordone)){
            show_alert('密码长度不能超过20个字符');
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
        var fun = function(data){
    		if(data.type=='success'){
    			show_alert('密码修改成功');
    		}else{
    			show_alert('密码修改失败');
    		}
    	}
        //show_alert(oldpassword);
        //show_alert(passwordtwo);
    	ajaxCommFun(ctx+"/vitamin/user/changePassword","newPwd="+passwordtwo+"&oldPwd="+oldpassword , fun);
    });
