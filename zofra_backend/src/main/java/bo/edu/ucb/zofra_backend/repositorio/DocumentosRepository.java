package bo.edu.ucb.zofra_backend.repositorio;

import bo.edu.ucb.zofra_backend.entidad.Documentos;
import bo.edu.ucb.zofra_backend.entidad.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface DocumentosRepository extends JpaRepository<Documentos, Integer> {

    @Query(value = "SELECT * FROM documentos WHERE estadoD=true", nativeQuery = true)
    Optional<List<Documentos>> getDocumentosByEstadoD();


    @Query(value = "SELECT d.id_documentos, d.areaD, d.codeD,d.nameD, d.typeD, d.estadoD, d.id_usuarios FROM documentos d, usuarios u " +
            "WHERE u.id_usuarios = :idUsuarios and u.id_usuarios = d.id_usuarios", nativeQuery = true)
    Optional<List<Documentos>> getDocumentosByIdUsuarios(@Param("idUsuarios") Integer idUsuarios);

}
