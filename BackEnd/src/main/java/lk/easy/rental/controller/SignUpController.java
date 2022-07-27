package lk.easy.rental.controller;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.DriverDTO;
import lk.easy.rental.service.CustomerService;
import lk.easy.rental.service.DriverService;
import lk.easy.rental.service.SignUpService;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("signUp")
@CrossOrigin
public class SignUpController {

    @Autowired
    SignUpService signUpService;


    @PostMapping("/customer")
    public ResponseUtil saveCustomer(@RequestBody CustomerDTO customerDTO){
        signUpService.saveCustomer(customerDTO);
        return new ResponseUtil(201,"Customer successfully added",null);
    }


    @PostMapping("/driver")
    public ResponseUtil saveDriver(@RequestBody DriverDTO driverDTO){
        signUpService.saveDriver(driverDTO);
        return new ResponseUtil(201,"Driver successfully added",null);
    }

}
