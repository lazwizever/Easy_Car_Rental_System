package lk.easy.rental.service.Impl;

import lk.easy.rental.Exception.DuplicateEntryException;
import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.DriverDTO;
import lk.easy.rental.entity.Customer;
import lk.easy.rental.entity.Driver;
import lk.easy.rental.repo.AdminRepo;
import lk.easy.rental.repo.CustomerRepo;
import lk.easy.rental.repo.DriverRepo;
import lk.easy.rental.repo.UserRepo;
import lk.easy.rental.service.SignUpService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class SignUpServiceImpl implements SignUpService {

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    DriverRepo driverRepo;

    @Autowired
    UserRepo userRepo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public void saveDriver(DriverDTO driverDTO) {
        if (!driverRepo.existsById(driverDTO.getId())){
            if (!userRepo.existsByUserName(driverDTO.getUser().getUserName())){
                driverRepo.save(modelMapper.map(driverDTO, Driver.class));
            }else {
                throw new DuplicateEntryException("User already exist");
            }

        }else {
            throw new DuplicateEntryException("Driver already exist");
        }
    }

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

}
