package com.codecool.travelhelper.API.rapidapi.webclient.apiwebclient.airportclient;


import com.codecool.travelhelper.API.rapidapi.model.apimodel.AirportDetailDtoRapidApi;
import com.codecool.travelhelper.API.rapidapi.model.apimodel.AirportDtoRapidApi;
import com.codecool.travelhelper.API.rapidapi.webclient.apiwebclient.ApiMetaDataRapidApi;
import com.codecool.travelhelper.API.rapidapi.webclient.apiwebclient.ApiWebClientRapidApi;
import com.google.gson.JsonObject;
import org.springframework.stereotype.Component;

@Component
public class AirportDetailClientImplRapidApi extends ApiWebClientRapidApi {
    public AirportDetailClientImplRapidApi() {
        super(ApiMetaDataRapidApi.AIRPORT_DETAIL);
    }

    public AirportDetailDtoRapidApi getCityAirportByIata(String cityName){
        System.out.println("https://airport-info.p.rapidapi.com/airport?iata=WMI");
        String currentUrl = this.getUrl();
        String newUrl = currentUrl + cityName;
        this.setUrl(newUrl);
        System.out.println(newUrl);
        JsonObject response = getApiResponse(this.getUrl(), this.getHeadersData());
        System.out.println(response);

        AirportDetailDtoRapidApi airporDetailtDto = getAirportDetailDto(response);
        System.out.println(airporDetailtDto.toString());

        return airporDetailtDto;
    }

    public AirportDetailDtoRapidApi getAirportDetailDto(JsonObject response){
        String name = getValueByKeyFromJsonObject("name", response);
        String location = getValueByKeyFromJsonObject("location", response);
        String streetNumber = getValueByKeyFromJsonObject("street_number", response);
        String street = getValueByKeyFromJsonObject("street", response);
        String city = getValueByKeyFromJsonObject("city", response);
        String state = getValueByKeyFromJsonObject("state", response);
        String phone = getValueByKeyFromJsonObject("phone", response);
        String website = getValueByKeyFromJsonObject("website", response);

        AirportDetailDtoRapidApi airportDetailDto = AirportDetailDtoRapidApi.builder()
                .name(name)
                .location(location)
                .streetNumber(streetNumber)
                .street(street)
                .city(city)
                .state(state)
                .phone(phone)
                .website(website)
                .build();

        return airportDetailDto;
    }



}