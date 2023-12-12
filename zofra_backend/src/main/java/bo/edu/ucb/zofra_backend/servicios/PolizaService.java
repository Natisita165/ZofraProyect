package bo.edu.ucb.zofra_backend.servicios;


import bo.edu.ucb.zofra_backend.entidad.Documentos;
import bo.edu.ucb.zofra_backend.entidad.Mercaderia;
import bo.edu.ucb.zofra_backend.entidad.Poliza;
import bo.edu.ucb.zofra_backend.entidad.Usuarios;
import bo.edu.ucb.zofra_backend.repositorio.PolizaRepository;
import bo.edu.ucb.zofra_backend.repositorio.UsuariosRepository;
import bo.edu.ucb.zofra_backend.util.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class PolizaService {

    private PolizaRepository polirep;

    @Autowired
    public PolizaService(PolizaRepository pr){
        this.polirep=pr;
    }


    public List<Poliza> obtenerPoliza() {
        return polirep.findAll();
    }

    public Poliza crearPoliza(Poliza poliza){
        return polirep.save(poliza);

    }

    public Poliza actualizarPoliza(Integer id, Poliza poliza){
        Poliza polizaAntiguo = polirep.findById(id).orElse(null);
        if (polizaAntiguo==null){
            return null;
        }else{
            polizaAntiguo.setAreaP(poliza.getAreaP());
            polizaAntiguo.setCodeP(poliza.getCodeP());
            polizaAntiguo.setStateP(poliza.getStateP());
            polizaAntiguo.setTypeP(poliza.getTypeP());
            return polirep.save(polizaAntiguo);
        }

    }

    public boolean eliminarPoliza(Integer id) {
        polirep.deleteById(id);
        return true;
    }


    public Poliza uploadFile(Integer id, MultipartFile file) throws IOException {
        Poliza poliza = polirep.findById(id).orElse(null);
        if(poliza != null) {
            poliza.setTypeP(poliza.getTypeP());
            poliza.setCodeP(poliza.getCodeP());
            poliza.setAreaP(poliza.getAreaP());
            poliza.setStateP(poliza.getStateP());

            poliza.setNameP(file.getName());
            poliza.setPdfType(file.getContentType());
            poliza.setPdfP(FileUtils.compressFile(file.getBytes()));

            return polirep.save(poliza);
        }
        return null;
    }

    public byte[] downloadFile(Integer id){
        Optional<Poliza> doc = polirep.findById(id);
        byte[] pdfFile = FileUtils.decompressFile(doc.get().getPdfP());
        return pdfFile;
    }


    public Poliza obtenerPolizaById(Integer id) {
        Poliza variablePoli=polirep.findById(id).orElse(null);
        return variablePoli;
    }
}
