package lk.easy.rental.service;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.DriverDTO;

public interface SignUpService {

    void saveDriver(DriverDTO driverDTO);

    void saveCustomer(CustomerDTO customerDTO);

}
