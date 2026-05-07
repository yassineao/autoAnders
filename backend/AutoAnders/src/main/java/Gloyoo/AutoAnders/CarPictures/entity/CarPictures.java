package Gloyoo.AutoAnders.CarPictures.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "CarPictures")
public class CarPictures {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String imageAlt;
    private String imagePath;
    private

}
