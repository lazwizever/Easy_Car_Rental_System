package lk.easy.rental.service.Impl;

import lk.easy.rental.Exception.DuplicateEntryException;
import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.entity.Customer;
import lk.easy.rental.repo.CustomerRepo;
import lk.easy.rental.repo.UserRepo;
import lk.easy.rental.service.CustomerService;
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
    UserRepo userRepo;

    @Autowired
    ModelMapper modelMapper;


    @Override
    public void saveCustomer(CustomerDTO customerDTO) {
        if (!customerRepo.existsById(customerDTO.getId())){
            if (!userRepo.existsByUserName(customerDTO.getUser().getUserName())){
                customerRepo.save(modelMapper.map(customerDTO, Customer.class));
            }else {
                throw new DuplicateEntryException("User already exist");
            }
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
        if (!customerRepo.findAll().isEmpty()){
            return modelMapper.map(customerRepo.findAll(), new TypeToken<List<CustomerDTO>>(){}.getType());
        }else {
            throw new RuntimeException("There is no customer in database.");
        }

    }

    @Override
    public void UpdateCustomer(CustomerDTO customerDTO) {
        if (customerRepo.existsById(customerDTO.getId())){

            int userId = customerRepo.findById(customerDTO.getId()).get().getUser().getUserId();

            if (userRepo.existsById(userId)){
                customerRepo.save(modelMapper.map(customerDTO,Customer.class));
            }else {
                throw new RuntimeException("No Such User To Update..! Please Check the ID..!");
            }
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
