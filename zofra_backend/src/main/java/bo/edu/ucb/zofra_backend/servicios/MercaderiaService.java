package bo.edu.ucb.zofra_backend.servicios;


import bo.edu.ucb.zofra_backend.entidad.Mercaderia;
import bo.edu.ucb.zofra_backend.entidad.Usuarios;
import bo.edu.ucb.zofra_backend.repositorio.MercaderiaRepository;
import bo.edu.ucb.zofra_backend.repositorio.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
