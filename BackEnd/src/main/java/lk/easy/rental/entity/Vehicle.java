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

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Vehicle {
    @Id
    private String vehicleId;
    private String registrationNo;
    @Enumerated(EnumType.STRING)
    private FuelType fuelType;
    @Enumerated(EnumType.STRING)
    private TransmissionType transmissionType;
    @Enumerated(EnumType.STRING)
    private VehicleType vehicleType;
    private int noOfPassengers;
    @Embedded
    private PriceRate vehiclePriceRate;
    @Embedded
    private Mileage freeMileAge;
    @Enumerated(EnumType.STRING)
    private AvailabilityType vehicleAvailability;
    private double damageFee;
    private String brand;
    private String color;
    private int lastServiceKm;
    private int mileage;

}
