package lk.easy.rental.service.Impl;

import lk.easy.rental.Exception.DuplicateEntryException;
import lk.easy.rental.dto.AdminDTO;
import lk.easy.rental.dto.AdminDashboardDTO;
import lk.easy.rental.dto.BookingDTO;
import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.entity.*;
import lk.easy.rental.enums.AvailabilityType;
import lk.easy.rental.enums.BookingStatus;
import lk.easy.rental.enums.RequestType;
import lk.easy.rental.enums.Role;
import lk.easy.rental.repo.*;
import lk.easy.rental.service.AdminService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

    @Autowired
    AdminRepo adminRepo;

    @Autowired
    UserRepo userRepo;

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    BookingRepo bookingRepo;

    @Autowired
    UserRequestRepo userRequestRepo;

    @Autowired
    VehicleRepo vehicleRepo;

    @Autowired
    DriverRepo driverRepo;

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
    public AdminDashboardDTO adminDashBoardInfo() {
        int noOfRegisteredCustomers = userRepo.countByRole(Role.CUSTOMER);
        int noBookings = bookingRepo.countByPickUpDate(LocalDate.now());
        int noOfAvailableVehicles = vehicleRepo.countByVehicleAvailability(AvailabilityType.AVAILABLE);
        int noOfReservedVehicles = vehicleRepo.countByVehicleAvailability(AvailabilityType.NOT_AVAILABLE);
        int activeBookings = bookingRepo.countByPickUpDate(LocalDate.now());
        int availableDrivers = 0;
        int occupiedDrivers = 0;
        int toBeRepairedCars = 0;
        int underMaintenanceCars = 0;


        AdminDashboardDTO adminDashboardDTO = new AdminDashboardDTO(noOfRegisteredCustomers,noBookings,noOfAvailableVehicles,noOfReservedVehicles,activeBookings,
                availableDrivers,occupiedDrivers,toBeRepairedCars,underMaintenanceCars);


        return adminDashboardDTO;
    }

    @Override
    public void acceptCustomer(CustomerDTO customerDTO) {
        UserRequest userRequest = userRequestRepo.findById(customerDTO.getId()).get();
        User mapUser = modelMapper.map(userRequest.getUser(), User.class);
        Customer customer = modelMapper.map(customerDTO, Customer.class);
        customer.setUser(mapUser);
        customerRepo.save(customer);
        userRequestRepo.deleteById(customerDTO.getId());
    }

    @Override
    public void denyCustomer(String id) {
        userRequestRepo.deleteById(id);
    }



    @Override
    public void acceptBooking(String id) {
        Booking booking = bookingRepo.findById(id).get();
        booking.setBookingStatus(BookingStatus.ACCEPTED);
        bookingRepo.save(booking);
    }

    @Override
    public void denyBooking(String bookingId,String reason) {
        Booking booking = bookingRepo.findById(bookingId).get();
        booking.setBookingStatus(BookingStatus.DENIED);
        booking.setDeniedReason(reason);
        bookingRepo.save(booking);

    }


    @Override
    public List<CustomerDTO> loaUserRequest() {
        return modelMapper.map(userRequestRepo.findAll(),new TypeToken<List<CustomerDTO>>(){}.getType());
    }



    @Override
    public void notifyMaintenance() {
        List<Vehicle> allVehicles = vehicleRepo.findAll();

        for (Vehicle temp : allVehicles) {
            int lastServiceKm = temp.getLastServiceKm();
            int mileage = temp.getMileage();

            if (mileage>=lastServiceKm+5000){
                temp.setNeedMaintenance(RequestType.YES);
            }else {
                temp.setNeedMaintenance(RequestType.NO);
            }

            vehicleRepo.save(temp);

        }
    }


}
