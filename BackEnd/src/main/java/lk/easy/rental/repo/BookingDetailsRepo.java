package lk.easy.rental.repo;

import lk.easy.rental.entity.Admin;
import lk.easy.rental.entity.BookingDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingDetailsRepo extends JpaRepository<BookingDetails,String> {

    boolean existsByAndBookingIdAndVehicleId(String bookingId,String vehicleId);
}
