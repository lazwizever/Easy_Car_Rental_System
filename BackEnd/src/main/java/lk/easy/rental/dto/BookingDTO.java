package lk.easy.rental.dto;

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
    private LocalDate pickUpDate;
    private LocalTime pickUpTime;
    private LocalDate returnDate;
    private RequestType driverRequestType;
    private CustomerDTO customerDTO;
    private List<DriverScheduleDTO> driverScheduleDTOList;
    private List<BookingDetailsDTO> bookingDetailsList;
}
