package bo.edu.ucb.zofra_backend.repositorio;

import bo.edu.ucb.zofra_backend.entidad.UpdateMercaderia;
import bo.edu.ucb.zofra_backend.entidad.UpdatePoliza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UpdatePolizaRepository extends JpaRepository<UpdatePoliza, Integer> {


    @Query(value = "SELECT * FROM updatepoliza WHERE new_id_poliza=:idPoliza", nativeQuery = true)
    Optional<List<UpdatePoliza>> getHistorialByIdUsuariosPoliza(@Param("idPoliza") Integer idPoliza);

}
