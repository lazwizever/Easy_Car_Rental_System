package lk.easy.rental.entity;

import lk.easy.rental.embeded.Name;
import lk.easy.rental.enums.AvailabilityType;
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
public class Driver {
    @Id
    private String id;
    private String licenseNo;
    private String nic;
    @Embedded
    private Name name;
    @Enumerated(EnumType.STRING)
    private AvailabilityType driverAvailability;
    private String address;
    private String contactNo;

    @OneToOne(cascade = CascadeType.ALL)
    private User user;


    public Driver(String id, String licenseNo, String nic, Name name, String address, String contactNo, User user) {
        this.id = id;
        this.licenseNo = licenseNo;
        this.nic = nic;
        this.name = name;
        this.address = address;
        this.contactNo = contactNo;
        this.user = user;
    }
}
