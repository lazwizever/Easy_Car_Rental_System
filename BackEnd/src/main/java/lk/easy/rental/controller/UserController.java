package lk.easy.rental.controller;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.UserDTO;
import lk.easy.rental.service.CustomerService;
import lk.easy.rental.service.UserService;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
@CrossOrigin
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveUser(@RequestBody UserDTO userDTO){
        userService.saveUser(userDTO);
        return new ResponseUtil(200,"User successfully added",null);
    }

    @GetMapping(path = "/{userId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchUser(@PathVariable String userId){
        return new ResponseUtil(200,"OK",userService.searchUser(userId));
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllUsers(){
        return new ResponseUtil(200,"OK",userService.getAllUsers());
    }


    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateUser(@RequestBody UserDTO userDTO){
        userService.updateUser(userDTO);
        return new ResponseUtil(200,"User Successfully Updated",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteUser(@RequestParam String id){
        userService.deleteUser(id);
        return new ResponseUtil(200,"OK",null);
    }



}
