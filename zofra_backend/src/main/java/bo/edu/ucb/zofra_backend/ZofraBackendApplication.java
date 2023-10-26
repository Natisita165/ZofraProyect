package bo.edu.ucb.zofra_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class ZofraBackendApplication {

	public static void main(String[] args) {

		SpringApplication.run(ZofraBackendApplication.class, args);
		//EntityManagerFactory emf = Persistence.createEntityManagerFactory("PersistanceAppPU");
		//EntityManager em = emf.createEntityManager();

	}

}
