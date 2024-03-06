package bo.edu.ucb.zofra_backend.servicios;

import bo.edu.ucb.zofra_backend.entidad.Mercaderia;
import bo.edu.ucb.zofra_backend.entidad.UpdateDocumentos;
import bo.edu.ucb.zofra_backend.entidad.UpdateMercaderia;
import bo.edu.ucb.zofra_backend.repositorio.UpdateDocumentosRepository;
import bo.edu.ucb.zofra_backend.repositorio.UpdateMercaderiaRepository;
import bo.edu.ucb.zofra_backend.util.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UpdateMercaderiaService{
    private UpdateMercaderiaRepository upMercrep;


    @Autowired
    public UpdateMercaderiaService(UpdateMercaderiaRepository up){
        this.upMercrep=up;
    }

    public byte[] downloadFile(Integer id){
        Optional<UpdateMercaderia> doc2 = upMercrep.findById(id);
        byte[] pdfFile = FileUtils.decompressFile(doc2.get().getNewPdfM());
        return pdfFile;
    }

    public List<UpdateMercaderia> obtenerHistorialUnUsuarioMerc(Integer id){
        List<UpdateMercaderia> respons3 = upMercrep.getHistorialByIdUsuariosMerc(id).orElse(null);
        return respons3;
    }
}
