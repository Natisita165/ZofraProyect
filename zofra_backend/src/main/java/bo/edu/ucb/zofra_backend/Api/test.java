package bo.edu.ucb.zofra_backend.Api;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class test {
    @GetMapping("/hola")
    public String nombre(){
        return ("Holi boli");
    }
}
