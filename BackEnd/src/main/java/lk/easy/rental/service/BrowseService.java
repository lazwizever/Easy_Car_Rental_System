package lk.easy.rental.service;

import lk.easy.rental.dto.VehicleDTO;
import lk.easy.rental.embeded.PriceRate;
import lk.easy.rental.enums.FuelType;
import lk.easy.rental.enums.TransmissionType;
import lk.easy.rental.enums.VehicleType;

import java.time.LocalDate;
import java.util.List;

public interface BrowseService {

    List<VehicleDTO> getAllNoOfPassenger(int noOfPassenger);

    List<VehicleDTO> getAllByVehicleType(VehicleType vehicleType);

    List<VehicleDTO> getAllByTransmissionType(TransmissionType transmissionType);

    List<VehicleDTO> getAllByFuelType(FuelType fuelType);

    List<VehicleDTO> getAllByPriceRate(PriceRate priceRate);

    List<VehicleDTO> getAllByVehicleBrand(String brand);

    List<VehicleDTO> loadAvailableVehicles(LocalDate pickUp, LocalDate dropOff);
}
