package lk.easy.rental.entity;

import lk.easy.rental.enums.PaymentType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Payment {
    @Id
    private String paymentId;
    private LocalDate paymentDate;
    @Enumerated(EnumType.STRING)
    private PaymentType paymentType;
    private String amount;

    @ManyToOne
    @JoinColumn(name = "bookingId",referencedColumnName = "bookingId",nullable = false)
    private Booking booking;


}
