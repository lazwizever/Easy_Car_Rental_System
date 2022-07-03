package lk.easy.rental.entity;

import javax.persistence.*;

@Entity
@IdClass(DriverSchedule_PK.class)
public class DriverSchedule {
    @Id
    private String driverId;
    @Id
    private String bookingId;


    @ManyToOne
    @JoinColumn(name = "driverId",referencedColumnName = "driverId",insertable = false,updatable = false)
    private Driver driver;

    @ManyToOne
    @JoinColumn(name = "bookingId",referencedColumnName = "bookingId",insertable = false,updatable = false)
    private Booking booking;

}
