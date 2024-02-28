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
    public UsuarioService(UsuariosRepository x) {
        this.userRep = x;
    }

    public List<Usuarios> obtenerUsuarios() {
        return userRep.findAll();
    }

    public Usuarios crearUsuario(Usuarios usuario) {
        return userRep.save(usuario);
    }

    public Usuarios actualizarUsuario(Integer id, Usuarios usuario) {
        Usuarios usuarioAntiguo = userRep.findById(id).orElse(null);
        if (usuarioAntiguo == null) {
            return null;
        } else {
            if(usuario.getArea() != null) usuarioAntiguo.setArea(usuario.getArea());
            if(usuario.getMail() != null) usuarioAntiguo.setMail(usuario.getMail());
            if(usuario.getLastname() != null) usuarioAntiguo.setLastname(usuario.getLastname());
            if(usuario.getName() != null) usuarioAntiguo.setName(usuario.getName());
            if(usuario.getPasswords() != null) usuarioAntiguo.setPasswords(usuario.getPasswords());
            if(usuario.getUser() != null) usuarioAntiguo.setUser(usuario.getUser());
            if(usuario.isFirst() == true) usuarioAntiguo.setFirst(false);
            return userRep.save(usuarioAntiguo);
        }
    }

    public boolean eliminarUsuario(Integer id) {
        userRep.deleteById(id);
        return true;
    }

    public Usuarios encontrarUnUsuario(Integer id) {

        return userRep.findById(id).orElse(null);
    }

    public Usuarios obenerUserandPass(Usuarios usuario) {
        Usuarios respons1 = userRep.getUsuariosByCredential(usuario.getUser(), usuario.getPasswords()).orElse(null);
        return respons1;
    }

    public Usuarios actualizarPassword(Integer id, Usuarios usuario) {
        Usuarios usuarioAntiguo2 = userRep.findById(id).orElse(null);
        if (usuarioAntiguo2 == null) {
            return null;
        } else {
            System.out.println(usuarioAntiguo2);
            if(usuario.getArea() != null) usuarioAntiguo2.setArea(usuario.getArea());
            if(usuario.getMail() != null) usuarioAntiguo2.setMail(usuario.getMail());
            if(usuario.getLastname() != null) usuarioAntiguo2.setLastname(usuario.getLastname());
            if(usuario.getName() != null) usuarioAntiguo2.setName(usuario.getName());
            if(usuario.getPasswords() != null) usuarioAntiguo2.setPasswords(usuario.getPasswords());
            if(usuario.getUser() != null) usuarioAntiguo2.setUser(usuario.getUser());
            if(usuario.isFirst() == false) usuarioAntiguo2.setFirst(true);
            System.out.println(usuario.isFirst());
            System.out.println(usuarioAntiguo2);
            return userRep.save(usuarioAntiguo2);
        }
    }

}
