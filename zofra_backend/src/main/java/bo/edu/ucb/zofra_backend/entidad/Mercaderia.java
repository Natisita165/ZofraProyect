package bo.edu.ucb.zofra_backend.entidad;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Blob;
import java.util.Date;

@Entity
@Table(name = "mercaderia")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Mercaderia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idMercaderia")
    private Integer idMercaderia;

    @ManyToOne
    @JoinColumn(name = "idUsuarios")
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
    //private Blob pdfM;




}
