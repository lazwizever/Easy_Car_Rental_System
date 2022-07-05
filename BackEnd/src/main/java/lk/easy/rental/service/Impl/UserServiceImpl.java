package lk.easy.rental.service.Impl;

import lk.easy.rental.Exception.DuplicateEntryException;
import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.UserDTO;
import lk.easy.rental.entity.Customer;
import lk.easy.rental.entity.User;
import lk.easy.rental.repo.CustomerRepo;
import lk.easy.rental.repo.UserRepo;
import lk.easy.rental.service.UserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepo userRepo;

    @Autowired
    ModelMapper modelMapper;


    @Override
    public void saveUser(UserDTO userDTO) {
        if (!userRepo.existsById(userDTO.getUserId())){
            userRepo.save(modelMapper.map(userDTO, User.class));
        }else {
            throw new DuplicateEntryException("User already exist");
        }
    }

    @Override
    public UserDTO searchUser(String userId) {
        if (userRepo.existsById(userId)){
            return modelMapper.map(userRepo.findById(userId), UserDTO.class);
        }else {
            throw new RuntimeException("No user for "+userId+"..!");
        }
    }

    @Override
    public List<UserDTO> getAllUsers() {
        if (!userRepo.findAll().isEmpty()){
            return modelMapper.map(userRepo.findAll(), new TypeToken<List<UserDTO>>(){}.getType());
        }else {
            throw new RuntimeException("There is no usser in database.");
        }
    }

    @Override
    public void updateUser(UserDTO userDTO) {
        if (userRepo.existsById(userDTO.getUserId())){
            userRepo.save(modelMapper.map(userDTO,User.class));
        }else {
            throw new RuntimeException("No Such User To Update..! Please Check the ID..!");
        }
    }

    @Override
    public void deleteUser(String id) {
        if (userRepo.existsById(id)){
            userRepo.deleteById(id);
        }else {
            throw new RuntimeException("No user for "+id+"..!");
        }
    }
}
