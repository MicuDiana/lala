package ro.platformsc.repository;

import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import ro.teamnet.bootstrap.extend.AppRepository;

import ro.platformsc.domain.Conferinta;

/**
 * Spring Data JPA repository for the Conferinta entity.
 */
public interface ConferintaRepository extends AppRepository<Conferinta,Long>{


}
