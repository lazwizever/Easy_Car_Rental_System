package lk.easy.rental.entity;

import lk.easy.rental.embeded.Mileage;
import lk.easy.rental.embeded.PriceRate;
import lk.easy.rental.enums.AvailabilityType;
import lk.easy.rental.enums.FuelType;
import lk.easy.rental.enums.TransmissionType;
import lk.easy.rental.enums.VehicleType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Vehicle {
    @Id
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
}
