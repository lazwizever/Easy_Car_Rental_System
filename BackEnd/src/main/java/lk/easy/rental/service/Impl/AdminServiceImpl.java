package lk.easy.rental.service.Impl;

import lk.easy.rental.Exception.DuplicateEntryException;
import lk.easy.rental.dto.AdminDTO;
import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.entity.Admin;
import lk.easy.rental.entity.Customer;
import lk.easy.rental.repo.AdminRepo;
import lk.easy.rental.repo.CustomerRepo;
import lk.easy.rental.repo.UserRepo;
import lk.easy.rental.service.AdminService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

    @Autowired
    AdminRepo adminRepo;

    @Autowired
    UserRepo userRepo;

    @Autowired
    ModelMapper modelMapper;


    @Override
    public void saveAdmin(AdminDTO adminDTO) {
        if (!adminRepo.existsById(adminDTO.getAdminId())){
            if (!userRepo.existsByUserName(adminDTO.getUser().getUserName())){
                adminRepo.save(modelMapper.map(adminDTO, Admin.class));
            }else {
                throw new DuplicateEntryException("User already exist");
            }

        }else {
            throw new DuplicateEntryException("Admin already exist");
        }

    }

    @Override
    public AdminDTO searchAdmin(String adminId) {
        if (adminRepo.existsById(adminId)){
            return modelMapper.map(adminRepo.findById(adminId), AdminDTO.class);
        }else {
            throw new RuntimeException("No admin for "+adminId+"..!");
        }
    }

    @Override
    public List<AdminDTO> getAllAdmins() {
        if (!adminRepo.findAll().isEmpty()){
            return modelMapper.map(adminRepo.findAll(), new TypeToken<List<AdminDTO>>(){}.getType());
        }else {
            throw new RuntimeException("There is no admin in database.");
        }
    }

    @Override
    public void updateAdmin(AdminDTO adminDTO) {
        if (adminRepo.existsById(adminDTO.getAdminId())){
            adminRepo.save(modelMapper.map(adminDTO,Admin.class));
        }else {
            throw new RuntimeException("No Such Admin To Update..! Please Check the ID..!");
        }
    }

    @Override
    public void deleteAdmin(String id) {
        if (adminRepo.existsById(id)){
            adminRepo.deleteById(id);
        }else {
            throw new RuntimeException("No admin for "+id+"..!");
        }
    }

    @Override
    public Object loadDashboard() {
        return null;
    }
}
