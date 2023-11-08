package bo.edu.ucb.zofra_backend.servicios;


import bo.edu.ucb.zofra_backend.entidad.PuntosControl;
import bo.edu.ucb.zofra_backend.repositorio.PuntosControlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PuntosControlService {

    private PuntosControlRepository ptrep;

    @Autowired
    public PuntosControlService(PuntosControlRepository z){
        this.ptrep=z;
    }

    public List<PuntosControl> obtenerPuntosControl(){
        return ptrep.findAll();
    }

}
