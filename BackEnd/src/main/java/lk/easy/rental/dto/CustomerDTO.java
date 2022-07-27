package lk.easy.rental.dto;

import lk.easy.rental.embeded.Name;
import lk.easy.rental.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Embedded;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CustomerDTO {

    private String id;
    private String nic;
    private Name name;
    private String licenseNo;
    private String address;
    private String contactNo;
    private String email;
    private UserDTO user;


}
