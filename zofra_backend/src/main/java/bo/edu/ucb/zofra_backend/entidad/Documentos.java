package bo.edu.ucb.zofra_backend.entidad;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Blob;


@Entity
@Table(name = "documentos")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Documentos {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idDocumentos")
    private Integer idDocumentos;

    @ManyToOne
    @JoinColumn(name = "idUsuarios")
//    @Column(columnDefinition = "ON UPDATE CASCADE ON DELETE SET NULL")
    Usuarios idUsuarios;

    private String areaD;
    private String typeD;
    private String codeD;
    private Boolean estadoD;

    // files
    @Lob
    @Column(length = 1000000)
    private byte[] pdfD;
    private String nameD;
    private String pdfType;
}
