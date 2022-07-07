package lk.easy.rental.service;

import lk.easy.rental.dto.PaymentDTO;

import java.util.List;

public interface PaymentService {
    void addPayment(PaymentDTO paymentDTO);

    PaymentDTO searchPayment(String paymentId);

    List<PaymentDTO> getAllPayments();

    void updatePayment(PaymentDTO paymentDTO);

    void deletePayment(String id);
}
