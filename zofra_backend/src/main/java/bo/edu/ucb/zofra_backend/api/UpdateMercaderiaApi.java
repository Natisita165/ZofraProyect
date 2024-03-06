package bo.edu.ucb.zofra_backend.api;


import bo.edu.ucb.zofra_backend.entidad.UpdateDocumentos;
import bo.edu.ucb.zofra_backend.entidad.UpdateMercaderia;
import bo.edu.ucb.zofra_backend.servicios.UpdateMercaderiaService;
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
public class UpdateMercaderiaApi {

    private UpdateMercaderiaService upMercServ;

    @Autowired
    public UpdateMercaderiaApi(UpdateMercaderiaService y){this.upMercServ=y;}



    @GetMapping("/updatemercaderia/file/{id}")
    public ResponseEntity<?> obtenerDocConFile(@PathVariable("id") Integer id){
        byte[] pdfFile = upMercServ.downloadFile(id);
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_PDF).body(pdfFile);
    }

    @GetMapping("/updatemercaderia/historial/{id}")
    public ResponseEntity<?> obtenerHistorialMerc(@PathVariable("id") Integer id){
        List<UpdateMercaderia> respuesta5 = upMercServ.obtenerHistorialUnUsuarioMerc(id);
        return new ResponseEntity<>(respuesta5, HttpStatus.OK);
    }

}
