package com.example.LoginPUC.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

//@ResrController - API REST - BACK-END
//@Controller - MVC - FRONT-END

@Controller
public class LoginController {
    @GetMapping("/login")
    public String login(){
        return "login";//nome do html que vai abrir
    }
}
