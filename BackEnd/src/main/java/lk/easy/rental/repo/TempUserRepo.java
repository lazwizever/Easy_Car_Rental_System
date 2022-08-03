package lk.easy.rental.repo;

import lk.easy.rental.entity.Payment;
import lk.easy.rental.entity.TempUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TempUserRepo extends JpaRepository<TempUser,Integer> {
}
