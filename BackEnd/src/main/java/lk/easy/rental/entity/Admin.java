package lk.easy.rental.entity;

import lk.easy.rental.embeded.Name;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Id;


@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Admin {

    @Id
    private String adminId;
    private String NIC;
    @Embedded
    private Name name;
    private String address;
    private String contactNo;
    private String email;

}
