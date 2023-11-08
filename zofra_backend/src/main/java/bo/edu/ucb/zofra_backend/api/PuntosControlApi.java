package bo.edu.ucb.zofra_backend.api;


import bo.edu.ucb.zofra_backend.entidad.PuntosControl;
import bo.edu.ucb.zofra_backend.servicios.PuntosControlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PuntosControlApi {
    private PuntosControlService ptserv;

    @Autowired
    public PuntosControlApi(PuntosControlService z){
        this.ptserv=z;
    }

    @GetMapping("/puntosControl")
    public List<PuntosControl> obtenerPuntosControl(){
        return ptserv.obtenerPuntosControl();
    }
}
