package bo.edu.ucb.zofra_backend.repositorio;

import bo.edu.ucb.zofra_backend.entidad.UpdateDocumentos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UpdateDocumentosRepository extends JpaRepository<UpdateDocumentos, Integer> {

    @Query(value = "SELECT * FROM updatedocumentos WHERE new_id_documentos=:idDocumentos", nativeQuery = true)
    Optional<List<UpdateDocumentos>> getHistorialByIdUsuarios(@Param("idDocumentos") Integer idDocumentos);
}
