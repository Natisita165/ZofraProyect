package bo.edu.ucb.zofra_backend.repositorio;

import bo.edu.ucb.zofra_backend.entidad.UpdateMercaderia;
import bo.edu.ucb.zofra_backend.entidad.UpdatePasswords;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UpdatePasswordsRepository extends JpaRepository<UpdatePasswords, Integer> {
    @Query(value = "SELECT * FROM updatepasswords WHERE new_id_usuario=:idUsuario and new_passwords=sha1(:passwords)", nativeQuery = true)
    List<UpdatePasswords> getCheckHistory(@Param("idUsuario") Integer idUsuario, @Param("passwords") String passwords);
}
