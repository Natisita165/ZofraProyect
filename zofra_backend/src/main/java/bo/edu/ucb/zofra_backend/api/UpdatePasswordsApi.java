package bo.edu.ucb.zofra_backend.api;


import bo.edu.ucb.zofra_backend.entidad.Mercaderia;
import bo.edu.ucb.zofra_backend.entidad.UpdatePasswords;
import bo.edu.ucb.zofra_backend.servicios.MercaderiaService;
import bo.edu.ucb.zofra_backend.servicios.UpdatePasswordsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class UpdatePasswordsApi {



    private UpdatePasswordsService passServ;

    @Autowired
    public UpdatePasswordsApi(UpdatePasswordsService x){

        this.passServ=x;
    }

    @PostMapping("/updatepass/{id}")
    public ResponseEntity<?> updatePasswords(@PathVariable("id") Integer id,@RequestBody UpdatePasswords updatePasswords){
        Integer respuesta = passServ.compararPass(id, updatePasswords.getNewPasswords());
        return new ResponseEntity<>(respuesta, HttpStatus.OK);

    }
}
