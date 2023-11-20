package bo.edu.ucb.zofra_backend.api;


import bo.edu.ucb.zofra_backend.entidad.Mercaderia;
import bo.edu.ucb.zofra_backend.entidad.Usuarios;
import bo.edu.ucb.zofra_backend.servicios.MercaderiaService;
import bo.edu.ucb.zofra_backend.servicios.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class MercaderiaApi {
    private MercaderiaService mercServ;

    @Autowired
    public MercaderiaApi(MercaderiaService x){

        this.mercServ=x;
    }

    @GetMapping("/mercaderia")
    public List<Mercaderia> obtenerMervaderia(){

        return mercServ.obtenerMervaderia();
    }

    @PostMapping("/mercaderia")
    public Mercaderia crearMercaderia(@RequestBody Mercaderia mercaderia){

        return mercServ.crearMercaderia(mercaderia);
    }

    @PutMapping("/mercaderia/{id}")
    public ResponseEntity<?> updateMercaderia(@PathVariable("id") Integer id, @RequestBody Mercaderia mercaderia){
        Mercaderia respuesta = mercServ.updateMercaderia(id, mercaderia);
        if(respuesta == null){
            return new ResponseEntity<>("El id no existe", HttpStatus.NOT_FOUND);
        }
        else{
            return new ResponseEntity<>(respuesta, HttpStatus.OK);
        }

}

    @DeleteMapping("/mercaderia/{id}")
    public ResponseEntity<?> deleteMercaderia(@PathVariable("id") Integer id){
        boolean resp = mercServ.deleteMercaderia(id);
        return new ResponseEntity<>("Eliminado correctamente", HttpStatus.OK);
    }

}
