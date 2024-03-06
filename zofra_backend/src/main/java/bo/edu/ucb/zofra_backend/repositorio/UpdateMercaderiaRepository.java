package bo.edu.ucb.zofra_backend.repositorio;

import bo.edu.ucb.zofra_backend.entidad.Mercaderia;
import bo.edu.ucb.zofra_backend.entidad.UpdateDocumentos;
import bo.edu.ucb.zofra_backend.entidad.UpdateMercaderia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UpdateMercaderiaRepository extends JpaRepository<UpdateMercaderia, Integer> {

    @Query(value = "SELECT * FROM updatemercaderia WHERE new_id_mercaderia=:idMercaderia", nativeQuery = true)
    Optional<List<UpdateMercaderia>> getHistorialByIdUsuariosMerc(@Param("idMercaderia") Integer idMercaderia);
}
