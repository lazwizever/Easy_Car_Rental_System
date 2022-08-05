package lk.easy.rental.service;

import lk.easy.rental.dto.DriverDTO;
import lk.easy.rental.dto.DriverScheduleDTO;

import java.time.LocalDate;
import java.util.List;

public interface DriverService {
    void saveDriver(DriverDTO driverDTO);

    DriverDTO searchDriver(String driverId);

    List<DriverDTO> getAllDrivers();

    void updateDriver(DriverDTO driverDTO);

    void deleteDriver(String id);

//    DriverDTO getAvailableDriver();

    DriverDTO getAvailableDriverByDate(LocalDate pickupDate, LocalDate dropOffDate);


    List<DriverScheduleDTO> loadDriverScheduleForDriver(String id);
}
