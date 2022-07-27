package lk.easy.rental.entity;

import lk.easy.rental.embeded.Name;
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
public class Customer {

    @Id
    private String id;
    private String nic;
    @Embedded
    private Name name;
    private String licenseNo;
    private String address;
    private String contactNo;
    private String email;

    @OneToOne(cascade = CascadeType.ALL)
    private User user;


    public Customer(String id, String nic, Name name, String licenseNo, String address, String contactNo, User user) {
        this.id = id;
        this.nic = nic;
        this.name = name;
        this.licenseNo = licenseNo;
        this.address = address;
        this.contactNo = contactNo;
        this.user = user;
    }
}
