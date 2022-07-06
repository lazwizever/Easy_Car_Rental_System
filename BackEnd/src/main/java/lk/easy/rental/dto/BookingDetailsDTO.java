package lk.easy.rental.dto;

import lk.easy.rental.entity.Booking;
import lk.easy.rental.entity.Vehicle;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class BookingDetailsDTO {
    @Id
    private String vehicleId;

    @Id
    private String bookingId;

    private VehicleDTO vehicle;

    private BookingDTO booking;

}
