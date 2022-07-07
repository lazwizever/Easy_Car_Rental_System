package lk.easy.rental.entity;

import lk.easy.rental.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class User {
    @Id
    @GeneratedValue
    private int userId;
    @Enumerated(EnumType.STRING)
    private Role role;
    private String userName;
    private String passWord;

    public User(Role role, String userName, String passWord) {
        this.role = role;
        this.userName = userName;
        this.passWord = passWord;
    }
}
