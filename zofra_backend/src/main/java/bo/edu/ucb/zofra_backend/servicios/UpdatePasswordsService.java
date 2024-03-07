package bo.edu.ucb.zofra_backend.servicios;


import bo.edu.ucb.zofra_backend.entidad.Documentos;
import bo.edu.ucb.zofra_backend.entidad.Mercaderia;
import bo.edu.ucb.zofra_backend.entidad.UpdatePasswords;
import bo.edu.ucb.zofra_backend.repositorio.UpdateMercaderiaRepository;
import bo.edu.ucb.zofra_backend.repositorio.UpdatePasswordsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UpdatePasswordsService {


    private UpdatePasswordsRepository upPassrep;


    @Autowired
    public UpdatePasswordsService(UpdatePasswordsRepository up){
        this.upPassrep=up;
    }


    public Integer compararPass(Integer id, String passw) {
        System.out.println(id+" "+passw);
        List<UpdatePasswords> historypasswords = upPassrep.getCheckHistory(id, passw);
        System.out.println(historypasswords.size());
        return historypasswords.size();

    }

}
