package lk.easy.rental.repo;

import lk.easy.rental.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customer,String> {
}
