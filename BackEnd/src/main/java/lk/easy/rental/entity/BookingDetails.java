package lk.easy.rental.entity;

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
@IdClass(BookingDetails_PK.class)
public class BookingDetails {

    @Id
    private String vehicleId;

    @Id
    private String bookingId;


    @ManyToOne
    @JoinColumn(name = "vehicleId",referencedColumnName = "vehicleId",insertable = false,updatable = false)
    private Vehicle vehicle;
    //check this out. you can find the error
//and please enable the tomcat log. its missing
    @ManyToOne

    //error eknm sir dn meter vna..tomcat og eke enable krnn kiynne mkkd sir
    @JoinColumn(name = "bookingId",referencedColumnName = "bookingId",insertable = false,updatable = false)
    private Booking booking;


//methana output eka thiyena thana catalina log ekai thawa
//    tomcat log ekai thiyenna ona. eka missing.
//ahh hri sir...thnk u gdkm sir
}
