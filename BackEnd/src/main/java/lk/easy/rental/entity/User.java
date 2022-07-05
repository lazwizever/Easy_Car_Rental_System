package lk.easy.rental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class User {
    @Id
    @GeneratedValue
    private int userId;
    private String role;
    private String userName;
    private String passWord;

    public User(String role, String userName, String passWord) {
        this.role = role;
        this.userName = userName;
        this.passWord = passWord;
    }
}
