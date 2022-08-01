package lk.easy.rental.service;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.UserDTO;

import java.util.List;

public interface CustomerService {
    void saveCustomer(CustomerDTO customerDTO);

    CustomerDTO searchCustomer(String id);

    List<CustomerDTO> getAllCustomers();

    void UpdateCustomer(CustomerDTO customerDTO);

    void deleteCustomer(String id);

    CustomerDTO getCustomerByUser(String userName);
}
