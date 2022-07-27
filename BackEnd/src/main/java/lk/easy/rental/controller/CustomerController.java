package lk.easy.rental.controller;


import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.service.CustomerService;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCustomer(@RequestBody CustomerDTO customerDTO){
        customerService.saveCustomer(customerDTO);
        return new ResponseUtil(201,"Customer successfully added",null);
    }

    @GetMapping(path = "/{cusId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCustomer(@PathVariable String cusId){
        return new ResponseUtil(201,"OK",customerService.searchCustomer(cusId));
    }


    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCustomers(){
        return new ResponseUtil(201,"OK",customerService.getAllCustomers());
    }


    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCustomer(@RequestBody CustomerDTO customerDTO){
        customerService.UpdateCustomer(customerDTO);
        return new ResponseUtil(201,"Customer Successfully Updated",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCustomer(@RequestParam String id){
        customerService.deleteCustomer(id);
        return new ResponseUtil(201,"OK",null);
    }

}
