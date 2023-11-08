package bo.edu.ucb.zofra_backend.entidad;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Blob;


@Entity
@Table(name = "documentos")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Documentos {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idDocumentos")
    private Integer idDocumentos;

    @ManyToOne
    @JoinColumn(name = "idUsuarios")
    Usuarios idUsuarios;

    private String nameD;
    private String areaD;
    private String typeD;
    private String codeD;
    //private Blob pdfD;
}
