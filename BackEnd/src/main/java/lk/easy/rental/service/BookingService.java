package lk.easy.rental.service;

import lk.easy.rental.dto.BookingDTO;

import java.util.List;

public interface BookingService {
    void placeBooking(BookingDTO bookingDTO);

    BookingDTO searchBooking(String bookingId);

    List<BookingDTO> getAllBookings();

    void updateBooking(BookingDTO bookingDTO);

    void deleteBooking(String id);
}
