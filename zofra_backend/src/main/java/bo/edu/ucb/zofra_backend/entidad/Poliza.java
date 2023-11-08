package bo.edu.ucb.zofra_backend.entidad;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.SpringBootVersion;
import org.springframework.boot.autoconfigure.web.WebProperties;

import java.sql.Blob;

@Entity
@Table(name = "poliza")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Poliza {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idPoliza")
    private Integer idPoliza;
    private String typeP;
    private String codeP;
    private String areaP;
    private String stateP;
    //private Blob pdfP;
}
