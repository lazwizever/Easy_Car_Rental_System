package lk.easy.rental.controller;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.DriverDTO;
import lk.easy.rental.service.DriverService;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("driver")
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService driverService;


    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveDriver(@RequestBody DriverDTO driverDTO){
        driverService.saveDriver(driverDTO);
        return new ResponseUtil(201,"Driver successfully added",null);
    }

    @GetMapping(params = {"pickUpDate","returnDate"})
    public ResponseUtil getAvailableDriver(@RequestParam String pickUpDate, @RequestParam String returnDate){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate pickUp = LocalDate.parse(pickUpDate,formatter);
        LocalDate dropOff = LocalDate.parse(returnDate, formatter);
        driverService.getAvailableDriverByDate(pickUp,dropOff);
        return new ResponseUtil(201,"OK",null);
    }


    @GetMapping(path = "/{driverId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchDriver(@PathVariable String driverId){
        return new ResponseUtil(201,"OK",driverService.searchDriver(driverId));
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllDrivers(){
        return new ResponseUtil(201,"OK",driverService.getAllDrivers());
    }


    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateDriver(@RequestBody DriverDTO driverDTO){
        driverService.updateDriver(driverDTO);
        return new ResponseUtil(201,"Driver Successfully Updated",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteDriver(@RequestParam String id){
        driverService.deleteDriver(id);
        return new ResponseUtil(201,"OK",null);
    }

    @GetMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil loadDriverScheduleForDriver(@RequestParam String id){
        return new ResponseUtil(201,"OK",driverService.loadDriverScheduleForDriver(id));
    }




}
