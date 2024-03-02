package bo.edu.ucb.zofra_backend.entidad;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name = "updatedocumentos")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UpdateDocumentos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUpdateDocumentos")
    private Integer idUpdateDocumentos;
    private Integer newIdUsuarios;
    private String newTypeD;
    private String newestadoD;
    private String newcodeD;
    private Timestamp changeDateD;


    @Lob
    @Column(length = 1000000)
    private byte[] newPdfD;
    private String newnameD;
    private String newPdfType;
}
