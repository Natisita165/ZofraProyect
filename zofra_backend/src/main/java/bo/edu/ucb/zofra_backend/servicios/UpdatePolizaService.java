package bo.edu.ucb.zofra_backend.servicios;


import bo.edu.ucb.zofra_backend.entidad.UpdateMercaderia;
import bo.edu.ucb.zofra_backend.entidad.UpdatePoliza;
import bo.edu.ucb.zofra_backend.repositorio.UpdateMercaderiaRepository;
import bo.edu.ucb.zofra_backend.repositorio.UpdatePolizaRepository;
import bo.edu.ucb.zofra_backend.util.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UpdatePolizaService {

    private UpdatePolizaRepository upPolirep;


    @Autowired
    public UpdatePolizaService(UpdatePolizaRepository up){
        this.upPolirep=up;
    }

    public byte[] downloadFile(Integer id){
        Optional<UpdatePoliza> doc2 = upPolirep.findById(id);
        byte[] pdfFile = FileUtils.decompressFile(doc2.get().getNewPdfP());
        return pdfFile;
    }

    public List<UpdatePoliza> obtenerHistorialUnUsuarioPoliza(Integer id){
        List<UpdatePoliza> respons4 = upPolirep.getHistorialByIdUsuariosPoliza(id).orElse(null);
        return respons4;
    }
}
