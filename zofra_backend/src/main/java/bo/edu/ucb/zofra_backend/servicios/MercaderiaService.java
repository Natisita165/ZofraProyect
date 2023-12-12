package bo.edu.ucb.zofra_backend.servicios;


import bo.edu.ucb.zofra_backend.entidad.Mercaderia;
import bo.edu.ucb.zofra_backend.entidad.Usuarios;
import bo.edu.ucb.zofra_backend.repositorio.MercaderiaRepository;
import bo.edu.ucb.zofra_backend.repositorio.UsuariosRepository;
import bo.edu.ucb.zofra_backend.util.FileUtils;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class MercaderiaService {
    private MercaderiaRepository mercRep;

    @Autowired
    public MercaderiaService(MercaderiaRepository x){
        this.mercRep=x;
    }

    public List<Mercaderia> obtenerMervaderia() {
        return mercRep.findAll();
    }

    public Mercaderia crearMercaderia(Mercaderia mercaderia) {

        return mercRep.save(mercaderia);
    }


    public Mercaderia updateMercaderia(Integer id, Mercaderia mercaderia) {
        Mercaderia usuarioAntiguo2 = mercRep.findById(id).orElse(null);
        if(usuarioAntiguo2 == null){
            return null;
        }else{
            usuarioAntiguo2.setDateIn(mercaderia.getDateIn());
            usuarioAntiguo2.setImporter(mercaderia.getImporter());
            usuarioAntiguo2.setNameMerc(mercaderia.getNameMerc());
            usuarioAntiguo2.setPrice(mercaderia.getPrice());
            usuarioAntiguo2.setQuantity(mercaderia.getQuantity());
            usuarioAntiguo2.setType(mercaderia.getType());
            return mercRep.save(usuarioAntiguo2);
        }
    }

    public boolean deleteMercaderia(Integer id){
        mercRep.deleteById(id);
        return true;
    }



    public Mercaderia uploadFileMerc(Integer id, MultipartFile file) throws IOException {
        Mercaderia mercaderia = mercRep.findById(id).orElse(null);
        if(mercaderia != null){
            mercaderia.setDateIn(mercaderia.getDateIn());
            mercaderia.setImporter(mercaderia.getImporter());
            mercaderia.setNameMerc(mercaderia.getNameMerc());
            mercaderia.setPrice(mercaderia.getPrice());
            mercaderia.setQuantity(mercaderia.getQuantity());
            mercaderia.setType(mercaderia.getType());

            mercaderia.setNamePdfM(file.getName());
            mercaderia.setPdfTypeM(file.getContentType());
            mercaderia.setPdfM(FileUtils.compressFile(file.getBytes()));
            return mercRep.save(mercaderia);
        }
        return null;
    }

    public byte[] downloadFileMerc(Integer id){
        Optional<Mercaderia> merc = mercRep.findById(id);
        byte[] pdfFileMerc = FileUtils.decompressFile(merc.get().getPdfM());
        return pdfFileMerc;
    }

    public Mercaderia obtenerMercaderia(Integer id) {
        Mercaderia variableMerc=mercRep.findById(id).orElse(null);
        return variableMerc;
    }
}
