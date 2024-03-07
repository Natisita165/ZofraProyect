package bo.edu.ucb.zofra_backend.entidad;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "updatepasswords")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class UpdatePasswords {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUpdatePasswords")
    private Integer idUpdatePasswords;
    private String newPasswords;
    private Integer newIdUsuario;
}
