package lk.easy.rental.service;

import lk.easy.rental.dto.AdminDTO;

import java.util.List;

public interface AdminService {
    void saveAdmin(AdminDTO adminDTO);

    AdminDTO searchAdmin(String adminId);

    List<AdminDTO> getAllAdmins();

    void updateAdmin(AdminDTO adminDTO);

    void deleteAdmin(String id);
}