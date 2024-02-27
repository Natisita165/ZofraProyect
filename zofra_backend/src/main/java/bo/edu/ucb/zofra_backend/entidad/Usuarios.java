package bo.edu.ucb.zofra_backend.entidad;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Blob;

@Entity
@Table(name = "usuarios")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Usuarios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUsuarios")
    private Integer idUsuarios;
    private String user;
    private String passwords;
    private String name;
    private String lastname;
    private String area;
    private String mail;
    private Boolean first;
    //private Blob imagen;




}
