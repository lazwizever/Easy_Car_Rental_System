package lk.easy.rental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AdminDashboardDTO {
    private int noOfRegisteredUsers;
    private int totalBookingsForTheDay;
    private int totalAvailableCars;
    private int totalReservedCars;
    private int activeBookings;
    private int availableDrivers;
    private int occupiedDrivers;
    private int toBeRepairedCars;
    private int underMaintenanceCars;


}
