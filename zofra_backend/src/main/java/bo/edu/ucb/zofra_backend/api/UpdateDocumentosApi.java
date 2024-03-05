package bo.edu.ucb.zofra_backend.api;

import bo.edu.ucb.zofra_backend.entidad.UpdateDocumentos;
import bo.edu.ucb.zofra_backend.servicios.DocumentosService;
import bo.edu.ucb.zofra_backend.servicios.UpdateDocumentosService;
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
public class UpdateDocumentosApi {

    private UpdateDocumentosService updocServ;

    @Autowired
    public UpdateDocumentosApi(UpdateDocumentosService y){this.updocServ=y;}




    @GetMapping("/updatedocumento/file/{id}")
    public ResponseEntity<?> obtenerDocConFile(@PathVariable("id") Integer id){
        byte[] pdfFile = updocServ.downloadFile(id);
        //return new ResponseEntity<>(pdfFile, HttpStatus.OK);
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_PDF).body(pdfFile);
    }

    @GetMapping("/updatedocumento/historial/{id}")
    public ResponseEntity<?> obtenerHistorial(@PathVariable("id") Integer id){
        List<UpdateDocumentos> respuesta5 = updocServ.obtenerHistorialUnUsuario(id);
        return new ResponseEntity<>(respuesta5, HttpStatus.OK);
    }
}
