package lk.easy.rental.service.Impl;

import lk.easy.rental.Exception.DuplicateEntryException;
import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.DriverDTO;
import lk.easy.rental.dto.DriverScheduleDTO;
import lk.easy.rental.dto.VehicleDTO;
import lk.easy.rental.entity.*;
import lk.easy.rental.enums.AvailabilityType;
import lk.easy.rental.repo.BookingRepo;
import lk.easy.rental.repo.CustomerRepo;
import lk.easy.rental.repo.DriverRepo;
import lk.easy.rental.repo.UserRepo;
import lk.easy.rental.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    DriverRepo driverRepo;

    @Autowired
    UserRepo userRepo;

    @Autowired
    BookingRepo bookingRepo;


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
    public DriverDTO searchDriver(String driverId) {
        if (driverRepo.existsById(driverId)){
            return modelMapper.map(driverRepo.findById(driverId), DriverDTO.class);
        }else {
            throw new RuntimeException("No driver for "+driverId+"..!");
        }
    }

    @Override
    public List<DriverDTO> getAllDrivers() {
        if (!driverRepo.findAll().isEmpty()){
            return modelMapper.map(driverRepo.findAll(), new TypeToken<List<DriverDTO>>(){}.getType());
        }else {
            throw new RuntimeException("There is no driver in database.");
        }
    }

    @Override
    public void updateDriver(DriverDTO driverDTO) {
        if (driverRepo.existsById(driverDTO.getId())){
            driverRepo.save(modelMapper.map(driverDTO, Driver.class));
        }else {
            throw new RuntimeException("No Such Driver To Update..! Please Check the ID..!");
        }
    }

    @Override
    public void deleteDriver(String id) {
        if (driverRepo.existsById(id)){
            driverRepo.deleteById(id);
        }else {
            throw new RuntimeException("No driver for "+id+"..!");
        }
    }

    /*@Override
    public DriverDTO getAvailableDriver() {
        Driver availableDriver = driverRepo.findFirstByDriverAvailability(AvailabilityType.AVAILABLE);
        return modelMapper.map(availableDriver,DriverDTO.class);
    }*/


    @Override
    public DriverDTO getAvailableDriverByDate(LocalDate pickupDate, LocalDate dropOffDate) {
        LocalDate pickUpDate = pickupDate.minusDays(1);
        LocalDate returnDate = dropOffDate.plusDays(1);
        List<Booking> availableBookingList = bookingRepo.findAllByReturnDateIsAfterAndPickUpDateIsBefore(pickUpDate, returnDate);
        List<Driver> notAvailableDrivers = new ArrayList<>();


        for (Booking booking : availableBookingList) {
            for (DriverSchedule driverSchedule : booking.getDriverList()) {
                notAvailableDrivers.add(driverSchedule.getDriver());
            }
        }


        L1:for (Driver temp : driverRepo.findAll()) {
            L2: for (Driver notAvailableDriver : notAvailableDrivers) {
                if (temp.getId().equals(notAvailableDriver.getId())){
                    continue L1;
                }else {
                    continue L2;
                }
            }

            return modelMapper.map(temp,DriverDTO.class);
        }

       /* System.out.println("Available"+ availableVehicles.toString());
        System.out.println("Not Available"+ notAvailableVehicles.toString());*/
        //System.out.println("Not Available Book"+ availableBookingList.toString());
        throw new RuntimeException("No available is here");
    }

    @Override
    public List<DriverScheduleDTO> loadDriverScheduleForDriver(String id) {
        return null;
    }


}
