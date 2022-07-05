package lk.easy.rental.service;

import lk.easy.rental.dto.DriverDTO;

import java.util.List;

public interface DriverService {
    void saveDriver(DriverDTO driverDTO);

    DriverDTO searchDriver(String driverId);

    List<DriverDTO> getAllDrivers();

    void updateDriver(DriverDTO driverDTO);

    void deleteDriver(String id);
}
