package com.codecool.travelhelper.API.rapidapi.controller.apicontroller;


import com.codecool.travelhelper.API.rapidapi.model.apimodel.LivingCostsApiModel;
import com.codecool.travelhelper.API.rapidapi.service.apiservice.LivingCostsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
public class LivingCostsApiController {

    @Autowired
    private final LivingCostsService livingCostsService;

    @GetMapping("/living-costs/{cityName}/{countryName}")
    public List<LivingCostsApiModel> getLivingCosts(@PathVariable String cityName, @PathVariable String countryName){
        return livingCostsService.getLivingCosts(cityName, countryName);
    }

}
