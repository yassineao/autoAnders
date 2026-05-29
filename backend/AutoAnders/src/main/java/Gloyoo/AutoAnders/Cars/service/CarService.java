package Gloyoo.AutoAnders.Cars.service;

import Gloyoo.AutoAnders.Cars.dto.CarRequest;
import Gloyoo.AutoAnders.Cars.entity.*;
import Gloyoo.AutoAnders.Cars.repository.CarRepository;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CarService {
    CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public Car addCar(CarRequest carRequest) {
        if (carRepository.existsByLicensePlate(carRequest.licensePlate())) {
            throw new IllegalArgumentException("Car already exists with this license plate");
        }
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

        return carRepository.save(car);
    }

    public Car updateCar(Car car) {
        return carRepository.save(car);
    }

    public void deleteCar(UUID id) {
        carRepository.deleteById(id);
    }

    public List<Car> findAllCars() {
        return carRepository.findAll();
    }

    public Optional<Car> findCarById(UUID id) {
        return carRepository.findById(id);
    }
}
