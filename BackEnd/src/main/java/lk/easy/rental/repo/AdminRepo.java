package lk.easy.rental.repo;

import lk.easy.rental.entity.Admin;
import lk.easy.rental.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<Admin,String> {
}
