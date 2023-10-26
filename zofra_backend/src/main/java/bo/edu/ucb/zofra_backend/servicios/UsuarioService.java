package bo.edu.ucb.zofra_backend.servicios;

import bo.edu.ucb.zofra_backend.entidad.Usuarios;
import bo.edu.ucb.zofra_backend.repositorio.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    private UsuariosRepository userRep;

    @Autowired
    public UsuarioService(UsuariosRepository x){
        this.userRep=x;
    }

    public List<Usuarios> obtenerUsuarios(){
        return userRep.findAll();
    }
}
