package bo.edu.ucb.zofra_backend.servicios;


import bo.edu.ucb.zofra_backend.entidad.Documentos;
import bo.edu.ucb.zofra_backend.entidad.Usuarios;
import bo.edu.ucb.zofra_backend.repositorio.DocumentosRepository;
import bo.edu.ucb.zofra_backend.util.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class DocumentosService {
    private DocumentosRepository docRep;

    @Autowired
    public DocumentosService(DocumentosRepository y){
        this.docRep=y;
    }

    public List<Documentos> obtenerDocumentos(){
        return docRep.findAll();
    }

    public Documentos obtenerUnDocumento(Integer id) {
        return docRep.findById(id).orElse(null);
    }

    public Documentos crearDocumento(Documentos documentos){
        return docRep.save(documentos);
    }

    public  Documentos updateDocumento(Integer id, Documentos documento){
        Documentos documentoAntiguo=docRep.findById(id).orElse(null);
        if (documentoAntiguo == null){
            return null;
        }else {
            documentoAntiguo.setAreaD(documento.getAreaD());
            documentoAntiguo.setCodeD(documento.getCodeD());
            documentoAntiguo.setNameD(documento.getNameD());
            documentoAntiguo.setTypeD(documento.getTypeD());
            documentoAntiguo.setEstadoD(documento.getEstadoD());
            return docRep.save(documentoAntiguo);
        }
    }

    public boolean deleateDocumento(Integer id) {
        docRep.deleteById(id);
        return true;
    }

    public List<Documentos> obtenerDocsLocks(){
        List<Documentos> respons1 = docRep.getDocumentosByEstadoD().orElse(null);
        return respons1;
    }

    public List<Documentos> obtenerDocsUnUsuario(Integer id){
        List<Documentos> respons2 = docRep.getDocumentosByIdUsuarios(id).orElse(null);
        return respons2;
    }

//    public List<Documentos> obtenerDocsUnUsuarioJPQL(Integer id){
//        List<Documentos> respons2 = docRep.getDocumentosByIdUsuariosJPQL(id).orElse(null);
//        return respons2;
//    }

    //FILES
    public Documentos uploadFile(Integer id, MultipartFile file) throws IOException {
        Documentos documento = docRep.findById(id).orElse(null);
        if(documento != null) {
            documento.setAreaD(documento.getAreaD());
            documento.setCodeD(documento.getCodeD());
            documento.setTypeD(documento.getTypeD());
            documento.setEstadoD(documento.getEstadoD());

            documento.setNameD(documento.getNameD());
            documento.setPdfType(file.getContentType());
            documento.setPdfD(FileUtils.compressFile(file.getBytes()));
            return docRep.save(documento);
        }
        return null;
    }

    public byte[] downloadFile(Integer id){
        Optional<Documentos> doc = docRep.findById(id);
        byte[] pdfFile = FileUtils.decompressFile(doc.get().getPdfD());
        return pdfFile;
    }
}
