package bo.edu.ucb.zofra_backend.servicios;


import bo.edu.ucb.zofra_backend.entidad.Poliza;
import bo.edu.ucb.zofra_backend.entidad.Usuarios;
import bo.edu.ucb.zofra_backend.repositorio.PolizaRepository;
import bo.edu.ucb.zofra_backend.repositorio.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

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
}
