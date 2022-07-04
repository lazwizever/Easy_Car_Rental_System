package lk.easy.rental.service.Impl;

import lk.easy.rental.Exception.DuplicateEntryException;
import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.entity.Customer;
import lk.easy.rental.repo.CustomerRepo;
import lk.easy.rental.service.CustomerService;
import lk.easy.rental.util.ResponseUtil;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    ModelMapper modelMapper;


    @Override
    public void saveCustomer(CustomerDTO customerDTO) {
        if (!customerRepo.existsById(customerDTO.getCusId())){
            customerRepo.save(modelMapper.map(customerDTO, Customer.class));
        }else {
            throw new DuplicateEntryException("Customer already exist");
        }

    }

    @Override
    public CustomerDTO searchCustomer(String id) {
        if (customerRepo.existsById(id)){
            return modelMapper.map(customerRepo.findById(id),CustomerDTO.class);
        }else {
            throw new RuntimeException("No customer for "+id+"..!");
        }
    }

    @Override
    public List<CustomerDTO> getAllCustomers() {
        return modelMapper.map(customerRepo.findAll(), new TypeToken<List<CustomerDTO>>(){}.getType());
    }

    @Override
    public void UpdateCustomer(CustomerDTO customerDTO) {
        if (customerRepo.existsById(customerDTO.getCusId())){
            customerRepo.save(modelMapper.map(customerDTO,Customer.class));
        }else {
            throw new RuntimeException("No Such Customer To Update..! Please Check the ID..!");
        }
    }

    @Override
    public void deleteCustomer(String id) {
        if (customerRepo.existsById(id)){
            customerRepo.deleteById(id);
        }else {
            throw new RuntimeException("No customer for "+id+"..!");
        }
    }


}
