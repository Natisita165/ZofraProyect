package bo.edu.ucb.zofra_backend.repositorio;

import bo.edu.ucb.zofra_backend.entidad.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface UsuariosRepository extends JpaRepository<Usuarios,Integer> {



    //@Query(value = "SELECT (user,passwords) FROM Usuarios WHERE user = :user AND passwords = :passwords", nativeQuery = true)
    @Query(value = "SELECT * FROM usuarios WHERE user = :user AND passwords = sha1(:passwords)", nativeQuery = true)
    //@Transactional(readOnly = true)
    Optional<Usuarios> getUsuariosByCredential(@Param("user") String user, @Param("passwords") String passwords);



//    @Query(value = "INSERT INTO ")



}
