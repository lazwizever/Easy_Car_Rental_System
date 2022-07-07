package lk.easy.rental.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lk.easy.rental.entity.BookingDetails;
import lk.easy.rental.entity.Customer;
import lk.easy.rental.entity.DriverSchedule;
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
    private RequestType driverRequestType;
    private CustomerDTO customer;
    private List<DriverScheduleDTO> driverScheduleDTOList;
    private List<BookingDetailsDTO> bookingDetailsList;

    public BookingDTO(String bookingId, LocalDate pickUpDate, LocalTime pickUpTime, LocalDate returnDate, RequestType driverRequestType, CustomerDTO customer, List<DriverScheduleDTO> driverScheduleDTOList) {
        this.bookingId = bookingId;
        this.pickUpDate = pickUpDate;
        this.pickUpTime = pickUpTime;
        this.returnDate = returnDate;
        this.driverRequestType = driverRequestType;
        this.customer = customer;
        this.driverScheduleDTOList = driverScheduleDTOList;
    }
}
