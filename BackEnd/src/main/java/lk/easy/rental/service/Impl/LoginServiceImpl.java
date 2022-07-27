package lk.easy.rental.service.Impl;

import lk.easy.rental.Exception.NotFoundException;
import lk.easy.rental.dto.UserDTO;
import lk.easy.rental.entity.User;
import lk.easy.rental.repo.UserRepo;
import lk.easy.rental.service.LoginService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@Transactional
public class LoginServiceImpl implements LoginService {
    @Autowired
    UserRepo userRepo;

    @Autowired
    ModelMapper modelMapper;


    @Override
    public UserDTO login(UserDTO userDTO) {
        User user = userRepo.findByUserName(userDTO.getUserName());

        if (user!=null){
            if (user.getPassWord().equals(userDTO.getPassWord())){
                return modelMapper.map(user,UserDTO.class);
            }else {
                throw new RuntimeException("Incorrect Password");
            }
        }else {
            throw new NotFoundException("User Not Fond");
        }
    }
}
