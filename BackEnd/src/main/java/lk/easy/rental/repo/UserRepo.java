package lk.easy.rental.repo;

import lk.easy.rental.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {
    boolean existsByUserName(String name);
}
