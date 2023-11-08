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

    public Usuarios crearUsuario(Usuarios usuario){
        return userRep.save(usuario);
    }

    public Usuarios actualizarUsuario(Integer id, Usuarios usuario){
        Usuarios usuarioAntiguo = userRep.findById(id).orElse(null);
        if(usuarioAntiguo == null){
            return null;
        }
        else{
            usuarioAntiguo.setArea(usuario.getArea());
            usuarioAntiguo.setLastname(usuario.getLastname());
            usuarioAntiguo.setMail(usuario.getMail());
            usuarioAntiguo.setName(usuario.getName());
            usuarioAntiguo.setPasswords(usuario.getPasswords());
            usuarioAntiguo.setUser(usuario.getUser());
            return userRep.save(usuarioAntiguo);
        }
    }

    public boolean eliminarUsuario(Integer id){
        userRep.deleteById(id);
        return true;
    }

    public Usuarios encontrarUnUsuario(Integer id){

        return userRep.findById(id).orElse(null);
    }

    public Usuarios obenerUserandPass(Usuarios usuario){
        Usuarios respons1 = userRep.getUsuariosByCredential(usuario.getUser(),usuario.getPasswords()).orElse(null);
        return respons1;
    }

}
