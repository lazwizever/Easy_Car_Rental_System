package lk.easy.rental.controller;

import lk.easy.rental.dto.AdminDTO;
import lk.easy.rental.dto.PaymentDTO;
import lk.easy.rental.service.AdminService;
import lk.easy.rental.service.PaymentService;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("payment")
@CrossOrigin
public class PaymentController {

    @Autowired
    PaymentService paymentService;


    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil addPayment(@RequestBody PaymentDTO paymentDTO){
        paymentService.addPayment(paymentDTO);
        return new ResponseUtil(201,"Payment successfully added",null);
    }

    @GetMapping(path = "/{paymentId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchPayment(@PathVariable String paymentId){
        return new ResponseUtil(201,"OK",paymentService.searchPayment(paymentId));
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllPayments(){
        return new ResponseUtil(201,"OK",paymentService.getAllPayments());
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updatePayment(@RequestBody PaymentDTO paymentDTO){
        paymentService.updatePayment(paymentDTO);
        return new ResponseUtil(201,"Admin Successfully Updated",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteAdmin(@RequestParam String id){
        paymentService.deletePayment(id);
        return new ResponseUtil(201,"OK",null);
    }



}
