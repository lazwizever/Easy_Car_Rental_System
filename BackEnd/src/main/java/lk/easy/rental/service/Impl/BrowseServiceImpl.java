package lk.easy.rental.service.Impl;

import lk.easy.rental.dto.VehicleDTO;
import lk.easy.rental.embeded.PriceRate;
import lk.easy.rental.enums.FuelType;
import lk.easy.rental.enums.TransmissionType;
import lk.easy.rental.enums.VehicleType;
import lk.easy.rental.repo.UserRepo;
import lk.easy.rental.repo.VehicleRepo;
import lk.easy.rental.service.BrowseService;
import lk.easy.rental.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class BrowseServiceImpl implements BrowseService {

    @Autowired
    VehicleRepo vehicleRepo;

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
}
