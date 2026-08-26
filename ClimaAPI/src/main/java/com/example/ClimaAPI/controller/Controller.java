package com.example.ClimaAPI.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.ClimaAPI.service.Service;

@RestController
public class Controller {
    
    Service service = new Service();


    @GetMapping("/clima/{latitude}/{longitude}")//http://localhosst:8080/modelos/59
    public String consultarCidade(
        @PathVariable double latitude,
        @PathVariable double longitude,
        @RequestParam(required = false) String hourly,
        @RequestParam(required = false) String daily) {
    return service.consultarCidade(latitude, longitude, hourly, daily);
}
    /*
    @GetMapping("anos/{marca}/{modelos}")
    public String consultarAnos(@PathVariable int marca, @PathVariable int modelo) {
        return service.consultarAnos(marca,modelo);
    }

    @GetMapping("/valor/{marca}/{modelo}/{ano}")
    public String consultarValor(@PathVariable int marca, @PathVariable int modelo, @PathVariable int ano) {
        return service.consultarValor(marca,modelo,ano);
    }*/
}
