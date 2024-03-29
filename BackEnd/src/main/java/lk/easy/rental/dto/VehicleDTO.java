package lk.easy.rental.dto;

import lk.easy.rental.embeded.Mileage;
import lk.easy.rental.embeded.PriceRate;
import lk.easy.rental.enums.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Enumerated;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class VehicleDTO {
    private String vehicleId;
    private String registrationNo;
    private FuelType fuelType;
    private TransmissionType transmissionType;
    private VehicleType vehicleType;
    private int noOfPassengers;
    private PriceRate vehiclePriceRate;
    private Mileage freeMileAge;
    private AvailabilityType vehicleAvailability;
    private double damageFee;
    private String brand;
    private String color;
    private int lastServiceKm;
    private int mileage;
    private int pricePerExtraKm;
    private RequestType needMaintenance;
}
