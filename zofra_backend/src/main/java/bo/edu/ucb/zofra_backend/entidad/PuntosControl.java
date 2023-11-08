package bo.edu.ucb.zofra_backend.entidad;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Blob;

@Entity
@Table(name = "puntoscontrol")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PuntosControl {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idPuntosControl")
    private Integer idPuntosControl;
    private String namePC;
    //private Blob imagenPC;

}
