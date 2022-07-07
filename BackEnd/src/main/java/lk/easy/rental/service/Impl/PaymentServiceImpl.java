package lk.easy.rental.service.Impl;

import lk.easy.rental.Exception.DuplicateEntryException;
import lk.easy.rental.dto.AdminDTO;
import lk.easy.rental.dto.PaymentDTO;
import lk.easy.rental.entity.Admin;
import lk.easy.rental.entity.Payment;
import lk.easy.rental.repo.AdminRepo;
import lk.easy.rental.repo.PaymentRepo;
import lk.easy.rental.service.PaymentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {
    @Autowired
    PaymentRepo paymentRepo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public void addPayment(PaymentDTO paymentDTO) {
        if (!paymentRepo.existsById(paymentDTO.getBooking().getBookingId())){
            if (!paymentRepo.existsById(paymentDTO.getPaymentId())){
                paymentRepo.save(modelMapper.map(paymentDTO, Payment.class));
            }else {
                throw new DuplicateEntryException("Payment already exist");
            }
        }else {
            throw new DuplicateEntryException("Booking already exist");
        }

    }

    @Override
    public PaymentDTO searchPayment(String paymentId) {
        if (paymentRepo.existsById(paymentId)){
            return modelMapper.map(paymentRepo.findById(paymentId), PaymentDTO.class);
        }else {
            throw new RuntimeException("No payment for "+paymentId+"..!");
        }
    }

    @Override
    public List<PaymentDTO> getAllPayments() {
        if (!paymentRepo.findAll().isEmpty()){
            return modelMapper.map(paymentRepo.findAll(), new TypeToken<List<PaymentDTO>>(){}.getType());
        }else {
            throw new RuntimeException("There is no payment in database.");
        }
    }

    @Override
    public void updatePayment(PaymentDTO paymentDTO) {
        if (paymentRepo.existsById(paymentDTO.getPaymentId())){
            paymentRepo.save(modelMapper.map(paymentDTO,Payment.class));
        }else {
            throw new RuntimeException("No Such payment To Update..! Please Check the ID..!");
        }
    }

    @Override
    public void deletePayment(String id) {
        if (paymentRepo.existsById(id)){
            paymentRepo.deleteById(id);
        }else {
            throw new RuntimeException("No payment for "+id+"..!");
        }
    }
}
