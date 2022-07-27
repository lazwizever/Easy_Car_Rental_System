package lk.easy.rental.repo;

import lk.easy.rental.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface BookingRepo extends JpaRepository<Booking,String> {

    List<Booking> findAllByPickUpDateAndReturnDate(LocalDate pickUpDate, LocalDate returnDate);
}
