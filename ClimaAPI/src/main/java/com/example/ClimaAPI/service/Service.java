package com.example.ClimaAPI.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class Service {

    private static final String BASE_URL = "https://api.open-meteo.com/v1";

    private String consultarURL(String apiUrl){
        String dados = "";
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(apiUrl, String.class);
        if (responseEntity.getStatusCode().is2xxSuccessful()) {
            dados = responseEntity.getBody();
        } else {
            dados = "falha ao obter dados. Código de status:" + responseEntity.getStatusCode();
        }
        
        
        return dados;
    }

    public String consultarClima(){
        return consultarURL(BASE_URL+"/cars/brands");
    }

    public String preverTempoCidade(String cidade){
        return consultarURL(BASE_URL+"/cars/brands/"+cidade+"/models");
    }

    public String consultarAnos(int marca, int modelo){
        return consultarURL(BASE_URL+"/cars/brands/"+marca+"modelos"+modelo+"/years");
    }

    public String consultarValor(int marca, int modelo, int ano){
        return consultarURL(BASE_URL+"/cars/brands/"+marca+"modelos"+modelo+"/years"+ano);
    }
}