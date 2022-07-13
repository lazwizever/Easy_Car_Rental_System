package lk.easy.rental.controller;

import lk.easy.rental.dto.BookingDTO;
import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.service.BookingService;
import lk.easy.rental.service.CustomerService;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("booking")
@CrossOrigin
public class BookingController {

    @Autowired
    BookingService bookingService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil placeBooking(@RequestBody BookingDTO bookingDTO){
        bookingService.placeBooking(bookingDTO);
        return new ResponseUtil(200,"Booking successfully placed",null);
    }

    @GetMapping(path = "/{bookingId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchBooking(@PathVariable String bookingId){
        return new ResponseUtil(200,"OK",bookingService.searchBooking(bookingId));
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllBookings(){
        return new ResponseUtil(200,"OK",bookingService.getAllBookings());
    }


    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateBooking(@RequestBody BookingDTO bookingDTO){
        bookingService.updateBooking(bookingDTO);
        return new ResponseUtil(200,"booking Successfully Updated",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteBooking(@RequestParam String id){
        bookingService.deleteBooking(id);
        return new ResponseUtil(200,"OK",null);
    }


}
