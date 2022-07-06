package lk.easy.rental.dto;

import lk.easy.rental.embeded.Name;
import lk.easy.rental.entity.User;
import lk.easy.rental.enums.AvailabilityType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Embedded;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;


@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class DriverDTO {
    private String driverId;
    private String licenseNo;
    private String driverNic;
    private Name name;
    private AvailabilityType driverAvailability;
    private String address;
    private String contactNo;
    private UserDTO user;
}
