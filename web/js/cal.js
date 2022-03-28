$(function () {
    $(".submit").click(function () {
        $(".form").submit()
    })
    $(".std").click(function () {
        $(".science-main").hide()
        $(".programmer-main").hide()
    })
    $(".sci").click(function () {
        if($(".science-main").css("display")=="none")$(".science-main").show()
        else $(".science-main").hide()
    })
    $(".prog").click(function () {
        if($(".programmer-main").css("display")=="none")$(".programmer-main").show()
        else $(".programmer-main").hide()
    })
    $("#std-show-bar").click(function () {
        if($("#std-type-bar").css("display")!="none")$("#std-type-bar").hide()
        else $("#std-type-bar").show()
    })
    $("#sci-show-bar").click(function () {
        if($("#sci-type-bar").css("display")!="none")$("#sci-type-bar").hide()
        else $("#sci-type-bar").show()
    })
    $("#pro-show-bar").click(function () {
        if($("#pro-type-bar").css("display")!="none")$("#pro-type-bar").hide()
        else $("#pro-type-bar").show()
    })
    $("#std-type-bar").mouseleave(function () {
        $("#std-type-bar").hide()
    })
    $("#sci-type-bar").mouseleave(function () {
        $("#sci-type-bar").hide()
    })
    $("#pro-type-bar").mouseleave(function () {
        $("#pro-type-bar").hide()
    })
    $(".function").click(function () {
        let expr=prompt("请输入函数:")
        $("#std-show-input").val(expr)
        $(".form").submit()
    })
    $(".number").click(function () {
        let old=$("#std-show-input").val()
        $("#std-show-input").val(old+$(this).text())
    })
    $(".clear").click(function () {
        $("#std-show-input").val("")
    })
    $(".back").click(function () {
        let old=$("#std-show-input").val()
        $("#std-show-input").val(old.substr(0,old.length-1))
    })
    document.onkeydown=function (event) {
        var allowedKey=/^[0-9'+''-''*''/' (){},;a-zA-Z]$/;
        var old=$("#std-show-input").val();
        if(allowedKey.test(event.key)){
            $("#std-show-input").val(old+event.key);
        }
        else{
            if(event.key=="Backspace"){
                $("#std-show-input").val(old.substr(0,old.length-1));
            }
            else if(event.key=="Escape"){
                $("#std-show-input").val("");
            }
            else if(event.key=="Enter"){
                $(".form").submit();
            }
        }
    }
})

