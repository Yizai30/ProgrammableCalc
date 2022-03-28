$(function () {
    $(".calu td:not(.function_area,.extra_features td)").click(function () {
        var old=$(":text").val();
        var add=$(this).text();
        $(":text").val(old+add);
    })
    $(".extra_features td").click(function () {
        var text=$(this).text();
        switch (text){
            case "退格":{
                var str=$(":text").val();
                $(":text").val(str.substr(0,str.length-1));
                break;
            }
            case "清空":{
                $(":text").val("");
                break;
            }
        }
    })
    $(".user_define td,.define td").click(function () {
        var old=$(":text").val();
        var add=$(this).text();
        add=add.substring(0,add.indexOf("(")+1);
        $(":text").val(old+add);
    })
    document.onkeydown=function (event) {
        var allowedKey=/^[0-9'+''-''*''/' (){},;]$/;
        var old=$(":text").val();
        if(allowedKey.test(event.key)){
            $(":text").val(old+event.key);
        }
        else{
            if(event.key=="Backspace"){
                $(":text").val(old.substr(0,old.length-1));
            }
            else if(event.key=="Escape"){
                $(":text").val("");
            }
            else if(event.key=="Enter"){
                $("#submit").click();
            }
        }
    }
    $("#user_define").click(function () {
        var fun=prompt("请输入自定义函数的表达式:");
        fun=fun.trim();
        var i=fun.indexOf("{");
        var fun_name=fun.substring(4,i);
        fun_name=fun_name.trim();
        if(fun!=null){
            $(":text").val(fun);
            $(":hidden").val(fun_name);
            $("#submit").click();
            $(":text").val("")
        }
    })
    $("#record_clear").click(function () {
        $(":hidden").val("record_clear");
        $("#submit").click();
    })
    $("#function_clear").click(function () {
        $(":hidden").val("func_clear");
        $("#submit").click();
    })
    $(".record").click(function () {
        var old=$(":text").val();
        $(":text").val(old+$(this).text());
    })
    $("#recore_area_con").click(function () {
        var tl = anime.timeline({
            easing: 'easeOutExpo'
        });
        if($(".record_area").css("opacity")==0){
            tl.add({
                targets:".record_area",
                opacity:[0,1],
                duration: 10
            }).add({
                targets:".record_area",
                scale:[0,1],
                duration: 300
            });
        }
        else{
            tl.add({
                targets:".record_area",
                scale:[1,0],
                duration: 300
            }).add({
                targets:".record_area",
                opacity:[1,0],
                duration: 10
            });
        }
    })
    $(".function_area").click(function () {
        var tl = anime.timeline({
            easing: 'easeOutExpo'
        });
        if($(".function").css("opacity")==0){
            tl.add({
                targets:".function",
                opacity:[0,1],
                duration: 10
            }).add({
                targets:".function",
                scale:[0,1],
                duration: 300
            });
        }
        else{
            tl.add({
                targets:".function",
                scale:[1,0],
                duration: 300
            }).add({
                targets:".function",
                opacity:[1,0],
                duration: 10
            });
        }
    })
    $("form").submit(function () {
        var hidden=$(":hidden").val();
        if(hidden=="func_clear"||hidden=="record_clear")return true;
        if($(".record").length==18){
            alert("记录区数据已满！请清空后再继续执行表达式");
            return false;
        }
        if($(".user_define").length==8&&$(":text").val().startsWith("let")){
            alert("自定义函数区数据已满！请清空后再继续执行表达式");
            return false;
        }
        return true;
    })
})