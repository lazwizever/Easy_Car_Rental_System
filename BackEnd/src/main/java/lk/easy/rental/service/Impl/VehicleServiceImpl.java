package lk.easy.rental.service.Impl;

import lk.easy.rental.Exception.DuplicateEntryException;
import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.VehicleDTO;
import lk.easy.rental.entity.Customer;
import lk.easy.rental.entity.Vehicle;
import lk.easy.rental.enums.AvailabilityType;
import lk.easy.rental.repo.CustomerRepo;
import lk.easy.rental.repo.VehicleRepo;
import lk.easy.rental.service.VehicleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    VehicleRepo vehicleRepo;

    @Autowired
    ModelMapper modelMapper;


    @Override
    public void saveVehicle(VehicleDTO vehicleDTO) {
        if (!vehicleRepo.existsById(vehicleDTO.getVehicleId())){
            vehicleRepo.save(modelMapper.map(vehicleDTO, Vehicle.class));
        }else {
            throw new DuplicateEntryException("Vehicle already exist");
        }
    }

    @Override
    public VehicleDTO searchVehicle(String vehicleId) {
        if (vehicleRepo.existsById(vehicleId)){
            return modelMapper.map(vehicleRepo.findById(vehicleId), VehicleDTO.class);
        }else {
            throw new RuntimeException("No vehicle for "+vehicleId+"..!");
        }
    }

    @Override
    public List<VehicleDTO> getAllVehicles() {
        if (!vehicleRepo.findAll().isEmpty()){
            return modelMapper.map(vehicleRepo.findAll(), new TypeToken<List<VehicleDTO>>(){}.getType());
        }else {
            throw new RuntimeException("There is no vehicle in database.");
        }
    }

    @Override
    public void updateVehicle(VehicleDTO vehicleDTO) {
        if (vehicleRepo.existsById(vehicleDTO.getVehicleId())){
            vehicleRepo.save(modelMapper.map(vehicleDTO,Vehicle.class));
        }else {
            throw new RuntimeException("No Such Vehicle To Update..! Please Check the ID..!");
        }
    }

    @Override
    public void deleteVehicle(String id) {
        if (vehicleRepo.existsById(id)){
            vehicleRepo.deleteById(id);
        }else {
            throw new RuntimeException("No vehicle for "+id+"..!");
        }
    }

    @Override
    public List<VehicleDTO> getAllAvailableVehicles() {
        List<Vehicle> allByVehicleAvailability = vehicleRepo.findAllByVehicleAvailability(AvailabilityType.AVAILABLE);
        return modelMapper.map(allByVehicleAvailability, new TypeToken<List<VehicleDTO>>(){}.getType());
    }


    @Override
    public void makeVehicleUnavailable(String vehicleId) {
        Vehicle vehicle = vehicleRepo.findById(vehicleId).get();
        vehicle.setVehicleAvailability(AvailabilityType.NOT_AVAILABLE);
        vehicleRepo.save(vehicle);
    }

    @Override
    public void makeVehicleAvailable(String vehicleId) {
        Vehicle vehicle = vehicleRepo.findById(vehicleId).get();
        vehicle.setVehicleAvailability(AvailabilityType.AVAILABLE);
        vehicleRepo.save(vehicle);
    }
}
