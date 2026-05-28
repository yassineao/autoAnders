package Gloyoo.AutoAnders.Cars.controller;

import Gloyoo.AutoAnders.Cars.dto.CarDeleteRequest;
import Gloyoo.AutoAnders.Cars.dto.CarRequest;
import Gloyoo.AutoAnders.Cars.entity.Car;
import Gloyoo.AutoAnders.Cars.repository.CarRepository;
import Gloyoo.AutoAnders.Cars.service.CarService;
import Gloyoo.AutoAnders.user.repository.UserRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/Car")
public class CarController {
    private CarService carService;
    private UserRepository userRepository;
    public CarController(CarService carService, UserRepository userRepository) {
        this.carService = carService;
        this.userRepository = userRepository;
    }

    @PostMapping("/add")
    public Car addCar(@RequestBody CarRequest carRequest) {
        Car car = new Car(

                carRequest.title(),
                carRequest.subtitle(),
                carRequest.yearOfManufacture(),
                carRequest.mileage(),
                carRequest.power(),
                carRequest.referenceNumber(),
                carRequest.price(),
                carRequest.firstRegistrationDate(),
                carRequest.numberOfDoors(),
                carRequest.wheelbase(),
                carRequest.numberOfCylinders(),
                carRequest.motorVehicleTax(),
                carRequest.modelDateFrom(),
                carRequest.modelDateTo(),
                carRequest.maxTowingWeight(),
                carRequest.maxTowingWeightUnbraked(),
                carRequest.urbanFuelConsumption(),
                carRequest.combinedFuelConsumption(),
                carRequest.motorwayFuelConsumption(),
                carRequest.co2Emissions(),
                carRequest.taxDeductible(),
                carRequest.chassisNumber(),
                carRequest.numberOfKeys(),
                carRequest.licensePlate(),
                carRequest.engineDisplacement(),
                carRequest.colour(),
                carRequest.emptyWeight(),
                carRequest.taxAdditionPercentage(),
                carRequest.apkMotDate(),
                carRequest.serviceDocumentation(),
                carRequest.location(),
                carRequest.financialLeasePricePerMonth(),
                carRequest.leasePrice60Months(),
                carRequest.leasePrice48Months(),
                carRequest.leasePrice36Months(),
                carRequest.bodyType(),
                carRequest.gearbox(),
                carRequest.fuel(),
                carRequest.emissionClass(),
                carRequest.energyLabel(),
                carRequest.paintType(),
                carRequest.upholstery()
        );
        return carService.addCar(car);
    }

    @PostMapping("/Delete")
    public void deleteCar(@RequestBody CarDeleteRequest carDeleteRequest) {
        if(carService.findCarById(carDeleteRequest.id()).isPresent()){
            carService.deleteCar(carDeleteRequest.id());

        }
        else {
            throw new IllegalArgumentException("Car not found");
        }

    }

}
