package bo.edu.ucb.zofra_backend.api;


import bo.edu.ucb.zofra_backend.entidad.Mercaderia;
import bo.edu.ucb.zofra_backend.entidad.Poliza;
import bo.edu.ucb.zofra_backend.entidad.Usuarios;
import bo.edu.ucb.zofra_backend.servicios.PolizaService;
import bo.edu.ucb.zofra_backend.servicios.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("*")
public class PolizaApi {


    private PolizaService poliserv;

    @Autowired
    public PolizaApi(PolizaService ps){
        this.poliserv=ps;
    }

    @GetMapping("/poliza")
    public List<Poliza> obtenerPoliza(){
        return poliserv.obtenerPoliza();
    }

    @PostMapping("/poliza")
    public Poliza crearPoliza(@RequestBody Poliza poliza){
        return poliserv.crearPoliza(poliza);
    }

    @PutMapping("/poliza/{id}")
    public ResponseEntity<?> actualizarPoliza(@PathVariable("id") Integer id, @RequestBody Poliza poliza){
        Poliza respuesta = poliserv.actualizarPoliza(id, poliza);
        if(respuesta == null){
            return new ResponseEntity<>("El id no existe", HttpStatus.NOT_FOUND);
        }
        else{
            return new ResponseEntity<>(respuesta, HttpStatus.OK);
        }

    }

    @DeleteMapping("/poliza/{id}")
    public ResponseEntity<?> eliminarPoliza(@PathVariable("id") Integer id){
        boolean resp = poliserv.eliminarPoliza(id);
        return new ResponseEntity<>("Eliminado correctamente", HttpStatus.OK);
    }

    @GetMapping("/poliza/{id}")
    public ResponseEntity<?> obtenerPolizaById(@PathVariable("id") Integer id){
        Poliza respuestaIdP=poliserv.obtenerPolizaById(id);
        return new ResponseEntity<>(respuestaIdP, HttpStatus.OK);
    }


    @PutMapping("/poliza/file/{id}")
    public ResponseEntity<?> crearDocConFile(@PathVariable("id") Integer id, @RequestParam("pdfD") MultipartFile pdfD) throws IOException {
        // todo manejar el null
        return new ResponseEntity<>(poliserv.uploadFile(id, pdfD), HttpStatus.OK);
    }

    @GetMapping("/poliza/file/{id}")
    public ResponseEntity<?> obtenerDocConFile(@PathVariable("id") Integer id){
        byte[] pdfFile = poliserv.downloadFile(id);
        //return new ResponseEntity<>(pdfFile, HttpStatus.OK);
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_PDF).body(pdfFile);
    }

}
