package Gloyoo.AutoAnders.Cars.controller;

import Gloyoo.AutoAnders.Cars.dto.CarDeleteRequest;
import Gloyoo.AutoAnders.Cars.dto.CarRequest;
import Gloyoo.AutoAnders.Cars.entity.Car;
import Gloyoo.AutoAnders.Cars.entity.Status;
import Gloyoo.AutoAnders.Cars.service.CarService;
import jakarta.persistence.PostUpdate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/cars")
public class CarController {

    private final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @PostMapping
    public ResponseEntity<Car> addCar(@RequestBody CarRequest carRequest) {

        Car savedCar = carService.addCar(carRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCar);
    }

    @GetMapping
    public ResponseEntity<List<Car>> getAllCars() {
        return ResponseEntity.ok(carService.findAllCars());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable UUID id) {
        return carService.findCarById(id)
                .map(ResponseEntity::ok)
                .orElseThrow(() -> new IllegalArgumentException("Car not found"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCar(@PathVariable UUID id) {
        if (carService.findCarById(id).isEmpty()) {
            throw new IllegalArgumentException("Car not found");
        }

        carService.deleteCar(id);
        return ResponseEntity.noContent().build();
    }
    @PostMapping("/{id}")
    public ResponseEntity<?> updateCar(@PathVariable UUID id , @RequestBody CarRequest carRequest) {
        try  {
            Car savedCar = carService.updateCar(id, carRequest);
            return ResponseEntity.ok(savedCar);
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @PostMapping("/statusUpdate/{id}")
    public ResponseEntity<?> updateCarStatus(@PathVariable UUID id , @RequestBody Status status) {
        try {
            if (status==null) throw new IllegalArgumentException("Status cannot be null");
            Car updatedCar = carService.updateCarStatus(id, status);
            return ResponseEntity.status(HttpStatus.OK).body(updatedCar);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

}