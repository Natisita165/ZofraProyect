package bo.edu.ucb.zofra_backend.entidad;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Blob;
import java.util.Date;

@Entity
@Table(name = "mercaderia")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Mercaderia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idMercaderia")
    private Integer idMercaderia;

    @ManyToOne
    @JoinColumn(name = "idUsuarios")
    //@Column(columnDefinition = "ON UPDATE CASCADE ON DELETE SET NULL")
    Usuarios idUsuarios;

    @ManyToOne
    @JoinColumn(name = "idPuntosControl")
    PuntosControl idPuntosControl;

    private String nameMerc;
    private double quantity;
    private double price;
    private String importer;
    private String type;
    private Date dateIn;


    @Lob
    @Column(length = 10000000)
    private byte[] pdfM;
    private String pdfTypeM;
    private String namePdfM;
    //private Blob pdfM;




}
