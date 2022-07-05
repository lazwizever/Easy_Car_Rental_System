package lk.easy.rental.dto;

import lk.easy.rental.entity.Booking;
import lk.easy.rental.entity.Driver;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class DriverScheduleDTO {
    private String driverId;
    private String bookingId;
    private DriverDTO driverDTO;
    private BookingDTO bookingDTO;
}
