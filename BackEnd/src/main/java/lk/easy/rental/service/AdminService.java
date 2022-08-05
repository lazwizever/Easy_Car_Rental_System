package lk.easy.rental.service;

import lk.easy.rental.dto.*;

import java.util.List;

public interface AdminService {
    void saveAdmin(AdminDTO adminDTO);

    AdminDTO searchAdmin(String adminId);

    List<AdminDTO> getAllAdmins();

    void updateAdmin(AdminDTO adminDTO);

    void deleteAdmin(String id);

    AdminDashboardDTO adminDashBoardInfo();

    void acceptCustomer(CustomerDTO customerDTO);


    void denyCustomer(String id);

    void acceptBooking(String id);

    void denyBooking(String bookingId,String reason);

    List<CustomerDTO> loaUserRequest();



    void notifyMaintenance();

}
