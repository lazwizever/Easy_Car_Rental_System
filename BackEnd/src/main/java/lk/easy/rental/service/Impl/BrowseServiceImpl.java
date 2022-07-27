package lk.easy.rental.service.Impl;

import lk.easy.rental.dto.VehicleDTO;
import lk.easy.rental.embeded.PriceRate;
import lk.easy.rental.entity.Booking;
import lk.easy.rental.entity.BookingDetails;
import lk.easy.rental.entity.Vehicle;
import lk.easy.rental.enums.FuelType;
import lk.easy.rental.enums.TransmissionType;
import lk.easy.rental.enums.VehicleType;
import lk.easy.rental.repo.BookingRepo;
import lk.easy.rental.repo.UserRepo;
import lk.easy.rental.repo.VehicleRepo;
import lk.easy.rental.service.BrowseService;
import lk.easy.rental.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class BrowseServiceImpl implements BrowseService {

    @Autowired
    VehicleRepo vehicleRepo;

    @Autowired
    BookingRepo bookingRepo;

    @Autowired
    ModelMapper modelMapper;


    @Override
    public List<VehicleDTO> getAllNoOfPassenger(int noOfPassenger) {
        return modelMapper.map(vehicleRepo.findAllByNoOfPassengers(noOfPassenger), new TypeToken<List<VehicleDTO>>(){
        }.getType());
    }

    @Override
    public List<VehicleDTO> getAllByVehicleType(VehicleType vehicleType) {
        return modelMapper.map(vehicleRepo.findAllByVehicleType(vehicleType), new TypeToken<List<VehicleDTO>>(){
        }.getType());
    }

    @Override
    public List<VehicleDTO> getAllByTransmissionType(TransmissionType transmissionType) {
        return modelMapper.map(vehicleRepo.findAllByTransmissionType(transmissionType), new TypeToken<List<VehicleDTO>>(){
        }.getType());
    }

    @Override
    public List<VehicleDTO> getAllByFuelType(FuelType fuelType) {
        return modelMapper.map(vehicleRepo.findAllByFuelType(fuelType), new TypeToken<List<VehicleDTO>>(){
        }.getType());
    }

    @Override
    public List<VehicleDTO> getAllByPriceRate(PriceRate priceRate) {
        return modelMapper.map(vehicleRepo.findAllByVehiclePriceRate(priceRate), new TypeToken<List<VehicleDTO>>(){
        }.getType());
    }

    @Override
    public List<VehicleDTO> getAllByVehicleBrand(String brand) {
        return modelMapper.map(vehicleRepo.findAllByBrand(brand), new TypeToken<List<VehicleDTO>>(){
        }.getType());
    }

    @Override
    public List<VehicleDTO> loadAvailableVehicles(LocalDate pickupDate, LocalDate dropOffDate) {
        LocalDate pickUpDate = pickupDate.minusDays(1);
        LocalDate returnDate = dropOffDate.plusDays(1);
        List<Booking> availableBookingList = bookingRepo.findAllByReturnDateIsAfterAndPickUpDateIsBefore(pickUpDate, returnDate);
        List<Vehicle> notAvailableVehicles = new ArrayList<>();
        List<VehicleDTO> availableVehicles = new ArrayList<>();

        for (Booking booking : availableBookingList) {
            for (BookingDetails bookedVehicle : booking.getBookingDetailsList()) {
                notAvailableVehicles.add(bookedVehicle.getVehicle());
            }
        }


        L1:for (Vehicle temp : vehicleRepo.findAll()) {
            L2: for (Vehicle notAvailableVehicle : notAvailableVehicles) {
                if (temp.getVehicleId().equals(notAvailableVehicle.getVehicleId())){
                    continue L1;
                }else {
                    continue L2;
                }
            }

            availableVehicles.add(modelMapper.map(temp,VehicleDTO.class));
        }

        System.out.println("Available"+ availableVehicles.toString());
        System.out.println("Not Available"+ notAvailableVehicles.toString());
        //System.out.println("Not Available Book"+ availableBookingList.toString());

        return availableVehicles;


    }
}
