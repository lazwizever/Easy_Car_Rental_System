package lk.easy.rental.controller;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.ImageDTO;
import lk.easy.rental.dto.VehicleDTO;
import lk.easy.rental.service.CustomerService;
import lk.easy.rental.service.VehicleService;
import lk.easy.rental.util.FileDownloadUtil;
import lk.easy.rental.util.FileUploadUtil;
import lk.easy.rental.util.ResponseUtil;
import lk.easy.rental.util.SearchFile;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@RestController
@RequestMapping("vehicle")
@CrossOrigin
public class VehicleController {

    @Autowired
    VehicleService vehicleService;

    @Autowired
    private FileDownloadUtil fileDownloadUtil;

    @Autowired
    private SearchFile searchFile;

    @Autowired
    private FileUploadUtil fileUploadUtil;




    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveVehicle(@RequestBody VehicleDTO vehicleDTO){
        vehicleService.saveVehicle(vehicleDTO);
        return new ResponseUtil(201,"Vehicle successfully added",null);
    }

    @GetMapping(path = "/{vehicleId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchVehicle(@PathVariable String vehicleId){
        return new ResponseUtil(201,"OK",vehicleService.searchVehicle(vehicleId));
    }


    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllVehicles(){
        return new ResponseUtil(201,"OK",vehicleService.getAllVehicles());
    }


    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateVehicle(@RequestBody VehicleDTO vehicleDTO){
        vehicleService.updateVehicle(vehicleDTO);
        return new ResponseUtil(201,"Vehicle Successfully Updated",null);
    }


    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteVehicle(@RequestParam String id){
        vehicleService.deleteVehicle(id);
        return new ResponseUtil(200,"OK",null);
    }


    @GetMapping({"availableVehicles"})
    public ResponseUtil getAllAvailableVehicles(){
        return new ResponseUtil(200,"OK",vehicleService.getAllAvailableVehicles());
    }


    @SneakyThrows
    @PostMapping(path = "addCarImage", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil addCarImage(@RequestParam(value = "param") MultipartFile[] multipartFile, @RequestParam("vehicleId") String vehicleId) {

        String pathDirectory = "D:\\Sem 2\\Internet Technologies\\AAD\\Easy_Car_Rental_System\\BackEnd\\src\\main\\resources\\static\\image\\carImage\\";

        String[] carImageView = {"Front", "Back", "Side", "Interior"};

        for (int i = 0; i < multipartFile.length; i++) {
            String[] split = multipartFile[i].getContentType().split("/");
            if (split[1].equals("jpeg") || split[1].equals("png")) {
                String imageName = vehicleId + carImageView[i] + ".jpeg";
                /*/Files.copy(multipartFile[i].getInputStream(), Paths.get(pathDirectory + File.separator + imageName), StandardCopyOption.REPLACE_EXISTING);/*/
                fileUploadUtil.saveFile(pathDirectory+imageName , multipartFile[i]);

            } else {
                return new ResponseUtil(404, "please..  must be Car images type  jpeg or png", null);

            }

        }

        return new ResponseUtil(200, "Car images added complete", null);
    }

    @GetMapping(path = "getCarImage", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<?> getCarImage(@RequestParam String vehicleId, String view) {

        ImageDTO imageDto = new ImageDTO(vehicleId, "car", view);
        Resource fileAsResource1 = fileDownloadUtil.getFileAsResource(imageDto);

        if (fileAsResource1==null){
            return ResponseEntity.badRequest().contentType(MediaType.APPLICATION_JSON).body("Car Image not found");
        }
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(fileAsResource1);

    }



    @SneakyThrows
    @PostMapping(path = "updateCarImage", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCarImage(@RequestParam(value = "carImage") MultipartFile multipartFile, @RequestParam("vehicleId") String vehicleId, @RequestParam("view") String view) {

        String pathDirectory = "D:\\Sem 2\\Internet Technologies\\AAD\\Easy_Car_Rental_System\\BackEnd\\src\\main\\resources\\static\\image\\carImage\\";

        if (searchFile.searchFile(pathDirectory, vehicleId + view + ".jpeg")) {
            Files.copy(multipartFile.getInputStream(), Paths.get(pathDirectory + File.separator + vehicleId + view + ".jpeg"), StandardCopyOption.REPLACE_EXISTING);
            return new ResponseUtil(200, "car Image Updated", null);
        }
        return new ResponseUtil(200, "car Image Update Fail", null);
    }


    @SneakyThrows
    @DeleteMapping(path = "deleteCarImage", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCarAllImages(@RequestParam String vehicleId) {
        String pathDirectory = "D:\\Sem 2\\Internet Technologies\\AAD\\Easy_Car_Rental_System\\BackEnd\\src\\main\\resources\\static\\image\\carImage\\";
        String[] carImageView = {"Front", "Back", "Side", "Interior"};

        for (int i = 0; i < carImageView.length; i++) {
            Files.deleteIfExists(Paths.get(pathDirectory + File.separator + vehicleId + carImageView[i] + ".jpeg"));
        }

        return new ResponseUtil(200, "car Delete success", null);
    }

}
