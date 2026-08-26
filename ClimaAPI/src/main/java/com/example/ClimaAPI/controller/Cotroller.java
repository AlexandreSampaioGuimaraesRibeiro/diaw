package com.example.ClimaAPI.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.ClimaAPI.service.Service;

@RestController
public class Cotroller {
    
    Service service = new Service();

    @GetMapping("/clima")
    public String consultarClima(){
        return service.consultarClima();
    }

    @GetMapping("/clima/{cidade}")//http://localhosst:8080/modelos/59
    public String preverTempoCidade(@PathVariable String cidade) {
        return service.preverTempoCidade(cidade);
    }
    
    @GetMapping("anos/{marca}/{modelos}")
    public String consultarAnos(@PathVariable int marca, @PathVariable int modelo) {
        return service.consultarAnos(marca,modelo);
    }

    @GetMapping("/valor/{marca}/{modelo}/{ano}")
    public String consultarValor(@PathVariable int marca, @PathVariable int modelo, @PathVariable int ano) {
        return service.consultarValor(marca,modelo,ano);
    }
}
