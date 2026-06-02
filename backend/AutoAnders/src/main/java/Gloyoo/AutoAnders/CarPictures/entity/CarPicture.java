package Gloyoo.AutoAnders.CarPictures.entity;


import Gloyoo.AutoAnders.Cars.entity.Car;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Repository
@Entity
@Table(name = "car_pictures"
        )
public class CarPicture {
    @GeneratedValue(strategy = GenerationType.UUID)
    @Id
    private UUID id;

    @Column(name = "storage_path", nullable = false)
    private String storagePath;

    private String title;

    private String description;

    private Integer width;
    private Integer height;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "car_id", nullable = false)
    private Car car;

}
