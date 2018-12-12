/*************轮播图********************/
var $carrousel=$("#carrousel");
$ids=$("#indicators"),
    $b_line=$("#b_line");
var i=0,timer=null;
function show(i){		//图片轮播 指示圆点样式切换
    $carrousel.children("li:eq("+i+")").addClass("img_show").siblings().removeClass("img_show");
    $ids.children(":eq("+i+")").addClass("c_hover").siblings().removeClass("c_hover");
    $b_line.css("width",0).stop().animate({width:1360},800);
}
function carousel(){
    i += 1;
    if(i > 3) i= 0;
    show(i);
}
timer=setInterval(carousel,2000);
//鼠标进入#banner时，停止图片轮播
$("#banner").hover(
    ()=>{
        clearInterval(timer);
        timer=null;				//释放定时器
    },
    ()=> timer=setInterval(carousel,2000)
)
//给左右箭头绑定单击事件
$("[data-move=left]").click(()=>{
    i = i > 0 ? i - 1 : 3;
    show(i);
})
$("[data-move=right]").click(()=>{
    i = i < 3 ? i + 1 : 0;
    show(i);
})
//给指示圆点绑定鼠标移入动画
$ids.on("mouseover","li",function(){
    var $li=$(this);
    //var l_index=;		//找出触发事件的li位于父元素中的位置（下标）
    show($li.index());
})
