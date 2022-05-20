package com.moyu.calculator;

public class Calculator {
    static {
        System.loadLibrary("Calcdll");
    }
    public native String compute(String expr);
}