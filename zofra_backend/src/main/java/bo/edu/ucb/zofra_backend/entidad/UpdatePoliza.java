package bo.edu.ucb.zofra_backend.entidad;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Entity
@Table(name = "updatepoliza")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UpdatePoliza {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUpdatePoliza")
    private Integer idUpdatePoliza;
    private Integer newIdPoliza;
    private String newTypeP;
    private String newCodeP;
    private String newAreaP;
    private String newStateP;
    private Timestamp changeDateP;


    @Lob
    @Column(length = 1000000)
    private byte[] newPdfP;
    private String newNameP;
    private String newPdfType;
}
