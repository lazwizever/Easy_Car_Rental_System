package lk.easy.rental.dto;

import lk.easy.rental.entity.Booking;
import lk.easy.rental.enums.PaymentType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class PaymentDTO {
    private String paymentId;
    private LocalDate paymentDate;
    private String date;
    private PaymentType paymentType;
    private String amount;
    private BookingDTO bookingDTO;

    public PaymentDTO(LocalDate paymentDate, String date, PaymentType paymentType, String amount, BookingDTO bookingDTO) {
        this.paymentDate = paymentDate;
        this.date = date;
        this.paymentType = paymentType;
        this.amount = amount;
        this.bookingDTO = bookingDTO;
    }
}
