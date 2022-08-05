package lk.easy.rental.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lk.easy.rental.enums.BookingStatus;
import lk.easy.rental.enums.RequestType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class BookingDTO {
    private String bookingId;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate pickUpDate;
    @JsonFormat(pattern = "HH:mm:ss")
    private LocalTime pickUpTime;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate returnDate;
    @JsonFormat(pattern = "HH:mm:ss")
    private LocalTime returnTime;
    private BookingStatus bookingStatus;
    private String deniedReason;
    private RequestType driverRequestType;
    private CustomerDTO customer;
    private List<DriverScheduleDTO> driverScheduleDTOList;
    private List<BookingDetailsDTO> bookingDetailsList;

    /*public BookingDTO(String booking_Id, LocalDate pickupDate, LocalTime pickupTime, LocalDate returnDate, LocalTime returnTime, RequestType needDriver, CustomerDTO customer, List<DriverScheduleDTO> driverScheduleList) {
        this.bookingId = booking_Id;
        this.pickUpDate = pickupDate;
        this.pickUpTime = pickupTime;
        this.returnDate = returnDate;
        this.returnTime = returnTime;
        this.driverRequestType = needDriver;
        this.customer = customer;
        this.driverScheduleDTOList = driverScheduleList;
    }


    public BookingDTO(String bookingId,  LocalDate pickupDate, LocalTime pickupTime, LocalDate returnDate, LocalTime returnTime, RequestType needDriver, CustomerDTO customer, List<BookingDetailsDTO> bookedVehicleList) {
        this.bookingId = bookingId;
        this.pickUpDate = pickupDate;
        this.pickUpTime = pickupTime;
        this.returnDate = returnDate;
        this.returnTime = returnTime;
        this.driverRequestType = needDriver;
        this.customer = customer;
        this.bookingDetailsList = bookedVehicleList;
    }*/

    /*public BookingDTO(String bookingId, LocalDate pickUpDate, LocalTime pickUpTime, LocalDate returnDate, LocalTime returnTime, RequestType driverRequestType, CustomerDTO customer, List<DriverScheduleDTO> driverScheduleDTOList) {
        this.bookingId = bookingId;
        this.pickUpDate = pickUpDate;
        this.pickUpTime = pickUpTime;
        this.returnDate = returnDate;
        this.returnTime = returnTime;
        this.driverRequestType = driverRequestType;
        this.customer = customer;
        this.driverScheduleDTOList = driverScheduleDTOList;
    }*/


    public BookingDTO(String bookingId, LocalDate pickUpDate, LocalTime pickUpTime, LocalDate returnDate, LocalTime returnTime, RequestType driverRequestType, CustomerDTO customer, List<BookingDetailsDTO> bookingDetailsList) {
        this.bookingId = bookingId;
        this.pickUpDate = pickUpDate;
        this.pickUpTime = pickUpTime;
        this.returnDate = returnDate;
        this.returnTime = returnTime;
        this.driverRequestType = driverRequestType;
        this.customer = customer;
        this.bookingDetailsList = bookingDetailsList;
    }




}
