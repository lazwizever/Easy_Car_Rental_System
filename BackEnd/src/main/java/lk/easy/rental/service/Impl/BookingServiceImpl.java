package lk.easy.rental.service.Impl;

import lk.easy.rental.Exception.DuplicateEntryException;
import lk.easy.rental.dto.BookingDTO;
import lk.easy.rental.dto.BookingDetailsDTO;
import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.entity.Booking;
import lk.easy.rental.entity.Customer;
import lk.easy.rental.repo.BookingDetailsRepo;
import lk.easy.rental.repo.BookingRepo;
import lk.easy.rental.repo.CustomerRepo;
import lk.easy.rental.service.BookingService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {

    @Autowired
    BookingRepo bookingRepo;

    @Autowired
    CustomerRepo customerRepo;


    @Autowired
    ModelMapper modelMapper;

    @Autowired
    BookingDetailsRepo bookingDetailsRepo;

    @Override
    public void placeBooking(BookingDTO bookingDTO) {
        //---------------Check booking id-------------------------
        if (!bookingRepo.existsById(bookingDTO.getBookingId())){
            //---------------Check customer id-------------------------
            if (customerRepo.existsById(bookingDTO.getCustomer().getId())){
                //---------------Check bookingDetailsList id (if vehicle add or not)-------------------------
                if (!bookingDTO.getBookingDetailsList().isEmpty()){

                    //----------------if driver is request---------------------

                    if (bookingDTO.getDriverRequestType().equals("YES")){
                        if (!bookingDTO.getDriverScheduleDTOList().isEmpty()){
                            bookingRepo.save(modelMapper.map(bookingDTO, Booking.class));
                        }
                        //-----------------------------------------------------


                        //------------if driver isn't request------------------
                    }else {
                        if (bookingDTO.getDriverScheduleDTOList().isEmpty()){
                            bookingRepo.save(modelMapper.map(bookingDTO, Booking.class));
                        }
                    }
                        //-----------------------------------------------------

                }else {
                    throw new DuplicateEntryException("No vehicle added for the booking");
                }
            }else {
                throw new DuplicateEntryException("No such a customer..!");
            }

        }else {
            throw new DuplicateEntryException("Booking already exist");
        }
    }

    @Override
    public BookingDTO searchBooking(String bookingId) {
        if (bookingRepo.existsById(bookingId)){
            return modelMapper.map(bookingRepo.findById(bookingId), BookingDTO.class);
        }else {
            throw new RuntimeException("No booking for "+bookingId+"..!");
        }
    }

    @Override
    public List<BookingDTO> getAllBookings() {
        if (!bookingRepo.findAll().isEmpty()){
            return modelMapper.map(bookingRepo.findAll(), new TypeToken<List<BookingDTO>>(){}.getType());
        }else {
            throw new RuntimeException("There is no booking in database.");
        }
    }

    @Override
    public void updateBooking(BookingDTO bookingDTO) {
        if (bookingRepo.existsById(bookingDTO.getBookingId())){
            bookingRepo.save(modelMapper.map(bookingDTO,Booking.class));
        }else {
            throw new RuntimeException("No Such booking To Update..! Please Check the ID..!");
        }
    }

    @Override
    public void deleteBooking(String id) {
        if (bookingRepo.existsById(id)){
            bookingRepo.deleteById(id);
        }else {
            throw new RuntimeException("No booking for "+id+"..!");
        }
    }

}
