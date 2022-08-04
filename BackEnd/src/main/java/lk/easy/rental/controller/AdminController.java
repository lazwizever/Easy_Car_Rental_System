package lk.easy.rental.controller;

import lk.easy.rental.dto.AdminDTO;
import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.service.AdminService;
import lk.easy.rental.service.CustomerService;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("admin")
@CrossOrigin
public class AdminController {

    @Autowired
    AdminService adminService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveAdmin(@RequestBody AdminDTO adminDTO){
        adminService.saveAdmin(adminDTO);
        return new ResponseUtil(201,"Admin successfully added",null);
    }

    @GetMapping(path = "/{adminId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchAdmin(@PathVariable String adminId){
        return new ResponseUtil(201,"OK",adminService.searchAdmin(adminId));
    }


    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllAdmins(){
        return new ResponseUtil(201,"OK",adminService.getAllAdmins());
    }


    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateAdmin(@RequestBody AdminDTO adminDTO){
        adminService.updateAdmin(adminDTO);
        return new ResponseUtil(201,"Admin Successfully Updated",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteAdmin(@RequestParam String id){
        adminService.deleteAdmin(id);
        return new ResponseUtil(201,"OK",null);
    }

    /*@GetMapping( "/{dashBoard}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil loadAdminDashboard(){
        return new ResponseUtil(201,"OK",adminService.loadDashboard());
    }*/


    @GetMapping("adminDashboard")
    public ResponseUtil adminDashboard(){
        return new ResponseUtil(201,"OK", adminService.adminDashBoardInfo());

    }

    @PostMapping ("acceptCustomer")
    public ResponseUtil acceptCustomer(@RequestBody CustomerDTO customerDTO){
        System.out.println("Cus Id"+customerDTO.getId());
        System.out.println("Cus address"+customerDTO.getAddress());
        adminService.acceptCustomer(customerDTO);
        return new ResponseUtil(201,"OK", null);
    }

    @DeleteMapping (params = {"denyCustomerId"})
    public ResponseUtil denyCustomer(@RequestParam String denyCustomerId){
        adminService.denyCustomer(denyCustomerId);
        return new ResponseUtil(201,"OK", null);
    }

    @GetMapping("loadUserRequest")
    public ResponseUtil loadUserRequest(){
        adminService.loaUserRequest();
        return new ResponseUtil(201,"OK", adminService.loaUserRequest());

    }



    
}
