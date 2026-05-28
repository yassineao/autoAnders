package Gloyoo.AutoAnders.Cars.service;

import Gloyoo.AutoAnders.Cars.entity.Car;
import Gloyoo.AutoAnders.Cars.repository.CarRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class CarService {
    CarRepository carRepository;
    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }
    public Car addCar(Car car) {
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
        return carRepository.findById( id);
    }
}
