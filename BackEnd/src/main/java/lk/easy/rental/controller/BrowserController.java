package lk.easy.rental.controller;

import lk.easy.rental.embeded.PriceRate;
import lk.easy.rental.enums.FuelType;
import lk.easy.rental.enums.TransmissionType;
import lk.easy.rental.enums.VehicleType;
import lk.easy.rental.service.AdminService;
import lk.easy.rental.service.BrowseService;
import lk.easy.rental.service.Impl.BrowseServiceImpl;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("browser")
@CrossOrigin
public class BrowserController {

    @Autowired
    BrowseService browseService;


    @GetMapping(params = {"noOfPassengers"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil sortVehicleByNoOfPassengers(@RequestParam int noOfPassengers){
        return new ResponseUtil(201,"OK",browseService.getAllNoOfPassenger(noOfPassengers));
    }

    @GetMapping(params = {"vehicleType"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil sortVehicleByVehicle(@RequestParam VehicleType vehicleType){
        return new ResponseUtil(201,"OK",browseService.getAllByVehicleType(vehicleType));
    }


    @GetMapping(params = {"transmissionType"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil sortVehicleByTransmissionType(@RequestParam TransmissionType transmissionType){
        return new ResponseUtil(201,"OK",browseService.getAllByTransmissionType(transmissionType));
    }

    @GetMapping(params = {"fuelType"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil sortVehicleByFuelType(@RequestParam FuelType fuelType){
        return new ResponseUtil(201,"OK",browseService.getAllByFuelType(fuelType));
    }

    @GetMapping(params = {"priceRate"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil sortVehicleByPriceRate(@RequestParam PriceRate priceRate){
        return new ResponseUtil(201,"OK",browseService.getAllByPriceRate(priceRate));
    }

    @GetMapping(params = {"brand"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil sortVehicleByBrand(@RequestParam String brand){
        return new ResponseUtil(201,"OK",browseService.getAllByVehicleBrand(brand));
    }

}
