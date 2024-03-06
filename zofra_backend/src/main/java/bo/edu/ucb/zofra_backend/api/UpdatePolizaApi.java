package bo.edu.ucb.zofra_backend.api;


import bo.edu.ucb.zofra_backend.entidad.UpdateMercaderia;
import bo.edu.ucb.zofra_backend.entidad.UpdatePoliza;
import bo.edu.ucb.zofra_backend.servicios.UpdateMercaderiaService;
import bo.edu.ucb.zofra_backend.servicios.UpdatePolizaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class UpdatePolizaApi {


    private UpdatePolizaService upPoliServ;

    @Autowired
    public UpdatePolizaApi(UpdatePolizaService y){this.upPoliServ=y;}



    @GetMapping("/updatepoliza/file/{id}")
    public ResponseEntity<?> obtenerDocConFile(@PathVariable("id") Integer id){
        byte[] pdfFile = upPoliServ.downloadFile(id);
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_PDF).body(pdfFile);
    }

    @GetMapping("/updatepoliza/historial/{id}")
    public ResponseEntity<?> obtenerHistorialPoli(@PathVariable("id") Integer id){
        List<UpdatePoliza> respuesta5 = upPoliServ.obtenerHistorialUnUsuarioPoliza(id);
        return new ResponseEntity<>(respuesta5, HttpStatus.OK);
    }
}
