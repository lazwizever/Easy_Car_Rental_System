package lk.easy.rental.repo;

import lk.easy.rental.entity.Admin;
import lk.easy.rental.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepo extends JpaRepository<Payment,String> {
}
