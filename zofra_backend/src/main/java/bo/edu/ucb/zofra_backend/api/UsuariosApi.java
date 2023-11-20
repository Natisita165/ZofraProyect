package bo.edu.ucb.zofra_backend.api;

import bo.edu.ucb.zofra_backend.entidad.Usuarios;
import bo.edu.ucb.zofra_backend.servicios.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
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

    // POST: nuevo usuario
    @PostMapping("/usuario")
    public Usuarios crearUsuario(@RequestBody Usuarios usuario){

        return userServ.crearUsuario(usuario);
    }

    // PUT: editar usuario
    @PutMapping("/usuario/{id}")
    public ResponseEntity<?> updateUsuario(@PathVariable("id") Integer id, @RequestBody Usuarios usuario){
        Usuarios respuesta = userServ.actualizarUsuario(id, usuario);
        if(respuesta == null){
            return new ResponseEntity<>("El id no existe", HttpStatus.NOT_FOUND);
        }
        else{
            return new ResponseEntity<>(respuesta, HttpStatus.OK);
        }
    }

    // DELETE: eliminar usuario
    @DeleteMapping("/usuario/{id}")
    public ResponseEntity<?> deleteUsuario(@PathVariable("id") Integer id){
        boolean resp = userServ.eliminarUsuario(id);
        return new ResponseEntity<>("Eliminado correctamente", HttpStatus.OK);
    }

    // GET: usuario especifico

    @GetMapping("/usuario/{id}")
    public ResponseEntity<?> obtenerUnUsuario(@PathVariable("id") Integer id){
        Usuarios respuesta2 = userServ.encontrarUnUsuario(id);
        if(respuesta2 == null){
            return new ResponseEntity<>("El usuario no existe", HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(respuesta2,HttpStatus.OK);
        }
    }

    @PostMapping("/usuario/login")
    public ResponseEntity<?> obenerUserandPass(@RequestBody Usuarios usuario){

        Usuarios respuesta3 = userServ.obenerUserandPass(usuario);
        if(respuesta3==null){
            return new ResponseEntity<>("Credenciales invalidas", HttpStatus.NOT_FOUND);
        }else {

            return new ResponseEntity<>(respuesta3,HttpStatus.OK);
        }
    }


}
