<%@ page import="java.util.Set" %>
<%@ page import="java.util.HashSet" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
response.setHeader("Pragma","No-cache");
response.setHeader("Cache-Control","no-cache");
response.setDateHeader("Expires", -10);
%>
<html>
<head>
    <title>计算器</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/cal.css">
    <style>
        .second{
            width: 100%;
            background-color: rgb(242,242,242);
            border: none;
        }
        .second:focus{
            outline: none;
        }
    </style>
</head>

<body>
<!--标准型-->
<form class="form" action="<%=request.getContextPath()+"/workspace"%>" method="post" autocomplete="off">
    <div class="standard-main" id="std-main">
        <div class="title">
            &nbsp;&nbsp;计算器
        </div>
        <!--结果显示区域-->
        <div class="result">
            <!--显示类型信息-->
            <div class="type" id="std-show-bar">
                ☰&nbsp;&nbsp;&nbsp;Standard
            </div>
            <!--上一步的结果-->
            <div class="pre" id="std-pre-step">
                &nbsp;
            </div>
            <!--第二个/运算结果-->
            <input type="text" class="second" id="std-show-input" name="expr1" value="${requestScope.ans1}" readonly="readonly">
        </div>

        <!--数字和符号-->
        <ul id="std-num-symbol">
            <li value="37" class="function">F</li>
            <li value="38" class="clear">C</li>
            <li value="39" class="back">Back</li>
            <li class="number" value="16">/</li>
            <li class="number" value="7">7</li>
            <li class="number" value="8">8</li>
            <li class="number" value="9">9</li>
            <li class="number" value="15">*</li>
            <li class="number" value="4">4</li>
            <li class="number" value="5">5</li>
            <li class="number" value="6">6</li>
            <li class="number" value="14">-</li>
            <li class="number" value="1">1</li>
            <li class="number" value="2">2</li>
            <li class="number" value="3">3</li>
            <li class="number" value="13" >+</li>
            <li class="number" value="11">|</li>
            <li class="number" value="0">0</li>
            <li class="number" value="10">.</li>
            <li value="12" class="submit">=</li>
        </ul>
        <!--侧边栏，选择计算器类型-->
        <ul class="type-bar" id="std-type-bar">
            <li class="std">计算界面</li>
            <li class="sci">函数区</li>
            <li class="prog">记录区</li>
        </ul>
    </div>
    <!--科学型-->
    <div class="science-main" id="sci-main">
        <div class="title">
            &nbsp;&nbsp;自定义函数区
        </div>
        <!--结果显示区域-->
        <div class="sci-result">
            <!--显示类型信息-->
            <div class="type" id="sci-show-bar">
                &nbsp;&nbsp;&nbsp;Function
            </div>
            <!--第二个/运算结果-->
        </div>
        <!--上面的3行运算符-->
        <ul id="sci-top-symbol">
            <c:forEach var="func" items="${sessionScope.funcs}">
                <li>${func}</li>
            </c:forEach>
        </ul>
    </div>
    <!--程序员型-->
    <div class="programmer-main" id="pro-main">
        <div class="title">
            &nbsp;&nbsp;输入输出区
        </div>
        <div class="pro-result">
            <div class="type" id="pro-show-bar">
                &nbsp;&nbsp;&nbsp;Records
            </div>
            <%
                List<String> inputs=(ArrayList)session.getAttribute("inputs");
                if(inputs!=null){
                for(int i=inputs.size()-4>=0?inputs.size()-4:0;i<inputs.size();++i){%>
                    <div class="inputs"><%=inputs.get(i)%></div>
                    <hr style="width: 80%">
            <%}}
            %>
        </div>
        <!--上面的一行十六进制数字，因为默认是10进制，所以这些按钮默认禁用-->
        <!--数字和符号-->
        <ul id="pro-num-symbol" class="outputs">
            <%
                List<String> outputs=(ArrayList)session.getAttribute("outputs");
                if(outputs!=null){
                    for(int i=outputs.size()-4>=0?outputs.size()-4:0;i<outputs.size();++i){%>
            <div class="inputs"><%=outputs.get(i)%></div>
            <hr style="width: 80%">
            <%}}
            %>
        </ul>
    </div>
</form>
</body>
<script src="View/Jquery.js"></script>
<script src="js/cal.js"></script>
</html>
