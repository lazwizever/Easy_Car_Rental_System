package lk.easy.rental.dto;

import lk.easy.rental.embeded.Name;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Embedded;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class AdminDTO {

    private String adminId;
    private String NIC;
    @Embedded
    private Name name;
    private String address;
    private String contactNo;
    private String email;



}
