package bo.edu.ucb.zofra_backend.repositorio;

import bo.edu.ucb.zofra_backend.entidad.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuariosRepository extends JpaRepository<Usuarios,Integer> {

}
