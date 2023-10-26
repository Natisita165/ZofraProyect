package bo.edu.ucb.zofra_backend.api;

import bo.edu.ucb.zofra_backend.entidad.Usuarios;
import bo.edu.ucb.zofra_backend.servicios.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UsuariosApi {

    private UsuarioService userServ;

    @Autowired
    public UsuariosApi(UsuarioService x){
        this.userServ=x;
    }

    @GetMapping("/usuario")
    public List<Usuarios> obtenerUsuarios(){
        return userServ.obtenerUsuarios();
    }

}
