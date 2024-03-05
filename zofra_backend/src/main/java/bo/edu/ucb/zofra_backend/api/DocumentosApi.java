package bo.edu.ucb.zofra_backend.api;


import bo.edu.ucb.zofra_backend.entidad.Documentos;
import bo.edu.ucb.zofra_backend.entidad.UpdateDocumentos;
import bo.edu.ucb.zofra_backend.entidad.Usuarios;
import bo.edu.ucb.zofra_backend.repositorio.DocumentosRepository;
import bo.edu.ucb.zofra_backend.servicios.DocumentosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("*")
public class DocumentosApi {

    private DocumentosService docServ;

    @Autowired
    public DocumentosApi(DocumentosService y){this.docServ=y;}


    @GetMapping("/documento")
    public List<Documentos> obtenerDocumentos(){
        return docServ.obtenerDocumentos();
    }

    @GetMapping("/documento/{id}")
    public ResponseEntity<?> obtenerUnDocumento(@PathVariable("id") Integer id){
        Documentos respuesta = docServ.obtenerUnDocumento(id);
        if(respuesta==null){
            return new ResponseEntity<>("El documento no existe", HttpStatus.NOT_FOUND);

        }else {
            return new ResponseEntity<>(respuesta, HttpStatus.OK);
        }
    }

    @PostMapping("/documento")
    public Documentos crearDocumento(@RequestBody Documentos documento){
        return docServ.crearDocumento(documento);
    }

    @PutMapping("/documento/{id}")
    public ResponseEntity<?> updateDocumento(@PathVariable("id") Integer id, @RequestBody Documentos documento){
        Documentos respuesta2 = docServ.updateDocumento(id, documento);
        if (respuesta2==null){
            return new ResponseEntity<>("El id del documento no existe", HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(respuesta2, HttpStatus.OK);
        }

    }

    @DeleteMapping("/documento/{id}")
    public ResponseEntity<?> deleateDocumento(@PathVariable("id") Integer id){
        boolean resp = docServ.deleateDocumento(id);
        return new ResponseEntity<>("Eliminado correctamente", HttpStatus.OK);
    }


    @GetMapping("/documento/publico")
    public ResponseEntity<?> obtenerDocsLock(){
        List<Documentos> respuesta3 = docServ.obtenerDocsLocks();
        return new ResponseEntity<>(respuesta3, HttpStatus.OK);

    }

    @GetMapping("/documento/docsUsuario/{id}")
    public ResponseEntity<?> obtenerDocsUnUsuario(@PathVariable("id") Integer id){
        List<Documentos> respuesta4 = docServ.obtenerDocsUnUsuario(id);
        return new ResponseEntity<>(respuesta4, HttpStatus.OK);
    }


//    @GetMapping("/documento/docsUsuarioJPQL/{id}")
//    public ResponseEntity<?> obtenerDocsUnUsuarioJPQL(@PathVariable("id") Integer id){
//        List<Documentos> respuesta4 = docServ.obtenerDocsUnUsuarioJPQL(id);
//        return new ResponseEntity<>(respuesta4, HttpStatus.OK);
//    }

    @PutMapping("/documento/file/{id}")
    public ResponseEntity<?> crearDocConFile(@PathVariable("id") Integer id, @RequestParam("pdfD")MultipartFile pdfD) throws IOException {
        // todo manejar el null
        return new ResponseEntity<>(docServ.uploadFile(id, pdfD), HttpStatus.OK);
    }

    @GetMapping("/documento/file/{id}")
    public ResponseEntity<?> obtenerDocConFile(@PathVariable("id") Integer id){
        byte[] pdfFile = docServ.downloadFile(id);
        //return new ResponseEntity<>(pdfFile, HttpStatus.OK);
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_PDF).body(pdfFile);
    }


}
