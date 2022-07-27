package lk.easy.rental.controller;


import lk.easy.rental.dto.UserDTO;
import lk.easy.rental.service.LoginService;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("login")
@CrossOrigin
public class LoginController {

    @Autowired
    LoginService loginService;

    @GetMapping
   public ResponseUtil logging(@RequestBody UserDTO userDTO){
        UserDTO userDto = loginService.login(userDTO);
       return new ResponseUtil(201,"OK",userDto);
   }

}
