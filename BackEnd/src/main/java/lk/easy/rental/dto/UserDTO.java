package lk.easy.rental.dto;

import lk.easy.rental.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class UserDTO {
    private int userId;
    private Role role;
    private String userName;
    private String passWord;


    public UserDTO(Role role, String userName, String passWord) {
        this.role = role;
        this.userName = userName;
        this.passWord = passWord;
    }

    public UserDTO(int userId, String passWord) {
        this.userId = userId;
        this.passWord = passWord;
    }
}
