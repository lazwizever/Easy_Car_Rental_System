package lk.easy.rental.service;

import lk.easy.rental.dto.UserDTO;

import java.util.List;

public interface UserService {
    void saveUser(UserDTO userDTO);

    UserDTO searchUser(String userId);

    List<UserDTO> getAllUsers();

    void updateUser(UserDTO userDTO);

    void deleteUser(String id);
}
