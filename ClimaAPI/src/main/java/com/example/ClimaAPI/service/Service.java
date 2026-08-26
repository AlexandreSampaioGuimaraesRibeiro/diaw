package com.example.ClimaAPI.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

public class Service {
    //https://api.open-meteo.com/v1/forecast?latitude=-19.9208&longitude=-43.9378&daily=
    //temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,relative_humidity_2m,
    //weather_code,wind_speed_10m,wind_direction_10m,apparent_temperature,dew_point_2m&timezone=America
    //%2FSao_Paulo&forecast_days=1
    private static final String BASE_URL = "https://api.open-meteo.com/v1/forecast";

    private String consultarURL(String apiUrl){
    RestTemplate restTemplate = new RestTemplate();
    try {
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(apiUrl, String.class);
        return responseEntity.getBody();
    } catch (Exception e) {
        return "Erro na requisição: " + e.getMessage();
    }
}


    public String consultarCidade(double latitude, double longitude, String hourly, String daily){
        UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(BASE_URL)
                .queryParam("latitude", latitude)
                .queryParam("longitude", longitude)
                .queryParam("timezone", "America/Sao_Paulo")
                .queryParam("forecast_days", 1);

        if (daily != null && !daily.isEmpty()) {
            builder.queryParam("daily", daily);
        }
        if (hourly != null && !hourly.isEmpty()) {
            builder.queryParam("hourly", hourly);
        }

        return consultarURL(builder.toUriString());
    }
/*
    public String consultarAnos(int marca, int modelo){
        return consultarURL(BASE_URL+"/cars/brands/"+marca+"modelos"+modelo+"/years");
    }

    public String consultarValor(int marca, int modelo, int ano){
        return consultarURL(BASE_URL+"/cars/brands/"+marca+"modelos"+modelo+"/years"+ano);
    }*/
}