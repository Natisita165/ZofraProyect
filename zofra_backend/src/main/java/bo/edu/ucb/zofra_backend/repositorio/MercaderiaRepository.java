package bo.edu.ucb.zofra_backend.repositorio;

import bo.edu.ucb.zofra_backend.entidad.Documentos;
import bo.edu.ucb.zofra_backend.entidad.Mercaderia;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MercaderiaRepository extends JpaRepository<Mercaderia, Integer> {
}
