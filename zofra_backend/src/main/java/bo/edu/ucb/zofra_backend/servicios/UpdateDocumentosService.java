package bo.edu.ucb.zofra_backend.servicios;


import bo.edu.ucb.zofra_backend.entidad.Documentos;
import bo.edu.ucb.zofra_backend.entidad.UpdateDocumentos;
import bo.edu.ucb.zofra_backend.repositorio.DocumentosRepository;
import bo.edu.ucb.zofra_backend.repositorio.UpdateDocumentosRepository;
import bo.edu.ucb.zofra_backend.util.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class UpdateDocumentosService {
    private UpdateDocumentosRepository updocrep;


    @Autowired
    public UpdateDocumentosService(UpdateDocumentosRepository up){
        this.updocrep=up;
    }


    public byte[] downloadFile(Integer id){
        Optional<UpdateDocumentos> doc = updocrep.findById(id);
        byte[] pdfFile = FileUtils.decompressFile(doc.get().getNewPdfD());
        return pdfFile;
    }

    public List<UpdateDocumentos> obtenerHistorialUnUsuario(Integer id){
        List<UpdateDocumentos> respons3 = updocrep.getHistorialByIdUsuarios(id).orElse(null);
        return respons3;
    }

}
