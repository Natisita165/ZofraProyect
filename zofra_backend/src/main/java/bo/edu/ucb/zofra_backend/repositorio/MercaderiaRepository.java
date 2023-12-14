package bo.edu.ucb.zofra_backend.repositorio;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import bo.edu.ucb.zofra_backend.entidad.Mercaderia;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MercaderiaRepository extends JpaRepository<Mercaderia, Integer> {

    @Query(value = "SELECT * FROM mercaderia WHERE MONTH(date_in) = :mes AND YEAR(date_in) = :year", nativeQuery = true)
    List<Mercaderia> findByMes(@Param("mes") int mes, @Param("year") int year);
}
