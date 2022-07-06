package lk.easy.rental.service;

import lk.easy.rental.dto.VehicleDTO;

import java.util.List;

public interface VehicleService {
    void saveVehicle(VehicleDTO vehicleDTO);

    VehicleDTO searchVehicle(String vehicleId);

    List<VehicleDTO> getAllVehicles();

    void updateVehicle(VehicleDTO vehicleDTO);

    void deleteVehicle(String id);
}
