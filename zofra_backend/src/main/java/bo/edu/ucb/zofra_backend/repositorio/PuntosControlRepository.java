package bo.edu.ucb.zofra_backend.repositorio;

import bo.edu.ucb.zofra_backend.entidad.Documentos;
import bo.edu.ucb.zofra_backend.entidad.PuntosControl;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PuntosControlRepository extends JpaRepository<PuntosControl, Integer> {
}
