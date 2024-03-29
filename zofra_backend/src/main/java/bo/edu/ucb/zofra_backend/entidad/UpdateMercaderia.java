package bo.edu.ucb.zofra_backend.entidad;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name = "updatemercaderia")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class UpdateMercaderia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUpdateMercaderia")
    private Integer idUpdateMercaderia;
    private Integer newIdMercaderia;
    private Integer newIdUsuarios;
    private Integer newIdPuntosControl;
    private String newNameMerc;
    private double newQuantity;
    private double newPrice;
    private String newImporter;
    private String newType;
    private Date newDateIn;
    private String changeDateM;


    @Lob
    @Column(length = 1000000)
    private byte[] newPdfM;
    private String newNamePdfM;
    private String newPdfTypeM;
}
