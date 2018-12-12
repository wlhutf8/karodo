$(function(){
    //    点击相应产品类型跳转相应商品功能
    $('.product_text_nav>ul>li>a').each(function (index){  //这里的value可写可不写
        //console.log($(this));
       $(this).on('click', function () {
          $('.product_ul_list').eq(index).css('display', 'flex').siblings('.product_ul_list').css('display','none');
       });
    });
});
