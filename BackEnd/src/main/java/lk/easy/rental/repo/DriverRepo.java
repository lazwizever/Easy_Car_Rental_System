package lk.easy.rental.repo;

import lk.easy.rental.entity.Customer;
import lk.easy.rental.entity.Driver;
import lk.easy.rental.enums.AvailabilityType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepo extends JpaRepository<Driver,String> {
        Driver findFirstByDriverAvailability(AvailabilityType availabilityType);



}
