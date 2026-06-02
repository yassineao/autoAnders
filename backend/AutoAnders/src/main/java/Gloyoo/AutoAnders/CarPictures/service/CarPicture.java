package Gloyoo.AutoAnders.CarPictures.service;

import Gloyoo.AutoAnders.CarPictures.repository.CarPictureRepository;

public class CarPicture {
    CarPictureRepository carPictureRepository;
    public CarPicture(CarPictureRepository carPictureRepository) {
        this.carPictureRepository = carPictureRepository;
    }

}
