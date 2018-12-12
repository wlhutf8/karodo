//表单提交功能
$(function(){
//    为表单元素input添加失去焦点事件
    $("form :input").blur(function(e){
        //console.log(e);
    //    获取当前失去焦点元素的父元素
        let $parent=$(this).parent();

        //删除以前的提醒元素（find()：查找匹配元素集中元素的所有匹配元素）
         $parent.find(".msg").remove();

    //    验证用户姓名输入
        if($(this).is("#username")){
        //    用jq去空格
            let nameVal=$.trim(this.value);//原生js去空格方式：this.replace(/(^\s*)|(\s*$)/g, "")
            //console.log(nameVal);
            let regName = /[~#^$@%&!*()<>:;'"{}【】  ]/;

            if(nameVal == "" || regName.test(nameVal)){
                let errorMsg = " 姓名非空，长度20位以下，不包含特殊字符！";
                //class='msg onError' 中间的空格是层叠样式的格式
                $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
            }else{
                let okMsg=" 输入正确";
                $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
            }
        }


        //    验证用户邮箱输入
        if($(this).is("#email")){
            //    用jq去空格
            let emailVal=$.trim(this.value);//原生js去空格方式：this.replace(/(^\s*)|(\s*$)/g, "")
            //console.log(nameVal);
            let regEmail = /.+@.+\.[a-zA-Z]{2,4}$/;//邮箱正则表达式

            if(emailVal== "" || (emailVal != "" && !regEmail.test(emailVal))){
                let errorMsg = " 请输入正确的E-Mail住址！";
                $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
            }else{
                let okMsg=" 输入正确";
                $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
            }
        }


        //    验证用户手机号输入
        if($(this).is("#phone")) {
            //    用jq去空格
            let phoneVal = $.trim(this.value);//原生js去空格方式：this.replace(/(^\s*)|(\s*$)/g, "")
            //console.log(nameVal);
            // let reg = /[~#^$@%&!*()<>:;'"{}【】  ]/;
            // let num=/^[a-zA-Z]+$/;

            let regPhone = /^1[3|4|5|8][0-9]\d{4,8}$/;//手机号正则表达式

            if (phoneVal == "" || phoneVal.length !=11 || !regPhone.test(phoneVal)) {
                let errorMsg = "手机号不能少于11位数字,不包含特殊字符！";
                $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
            } else {
                let okMsg = " 输入正确";
                $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
            }
        }

    }).keyup(function(){
        //triggerHandler 防止事件执行完后，浏览器自动为标签获得焦点
        $(this).triggerHandler("blur");
    }).focus(function(){
        $(this).triggerHandler("blur");
    });

    //点击提交按钮时，通过trigger()来触发文本框的失去焦点事件
    $("#btn").click(function(){
        //trigger 事件执行完后，浏览器会为submit按钮获得焦点
        $("form .required:input").trigger("blur");
        let numError = $("form .onError").length;
        if(numError){
            return false;
        }
        alert("提交成功！");
    });

});