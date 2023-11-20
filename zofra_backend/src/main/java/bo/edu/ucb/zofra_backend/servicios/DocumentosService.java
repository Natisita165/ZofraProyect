package bo.edu.ucb.zofra_backend.servicios;


import bo.edu.ucb.zofra_backend.entidad.Documentos;
import bo.edu.ucb.zofra_backend.entidad.Usuarios;
import bo.edu.ucb.zofra_backend.repositorio.DocumentosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
