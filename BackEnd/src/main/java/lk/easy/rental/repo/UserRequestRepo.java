package lk.easy.rental.repo;

import lk.easy.rental.entity.Payment;
import lk.easy.rental.entity.UserRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRequestRepo extends JpaRepository<UserRequest,String> {
}
