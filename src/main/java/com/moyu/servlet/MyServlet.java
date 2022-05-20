package com.moyu.servlet;

import com.moyu.calculator.Calculator;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class MyServlet extends HttpServlet {
    private final Calculator calculator=new Calculator();
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        // 获得输入表达式
        String expr=req.getParameter("expr1");
        if (expr == null) {
            expr = "";
        }

        // 去掉输入表达式前后的空格
        expr=expr.trim();
        List<String> inputs=(ArrayList)req.getSession().getAttribute("inputs");
        if(inputs==null){
            inputs=new ArrayList<>();
            req.getSession().setAttribute("inputs", inputs);
        }
        inputs.add(expr);
        if(!(expr.startsWith("let")))expr+=";";
        expr+="\n";
        String ans="";
        while("".equals(ans))ans=calculator.compute(expr);
        if(ans.startsWith("Defined:")) {
            Set<String> funcs=(HashSet)req.getSession().getAttribute("funcs");
            if(funcs==null){
                funcs=new HashSet<>();
                req.getSession().setAttribute("funcs", funcs);
            }
            funcs.add(ans.substring(8));
        }
        req.setAttribute("ans1",ans);
        List<String> outputs=(ArrayList)req.getSession().getAttribute("outputs");
        if(outputs==null){
            outputs=new ArrayList<>();
            req.getSession().setAttribute("outputs", outputs);
        }
        outputs.add(ans);
        req.getRequestDispatcher("index.jsp").forward(req, resp);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }
}
