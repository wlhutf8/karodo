/******引入头部与底部文件**************/




    /*******引入头部**********/
    $.get({
        url:"./header.html",
        success:function(data){
            $("#header").html(data);
        }
    });



    /*********引入底部******************/
    $.get({
        url:"./footer.html",
        success:function(data){
            $("#footer").html(data);
        }
    });



