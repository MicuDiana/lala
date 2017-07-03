package ro.platformsc.repository;

import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import ro.teamnet.bootstrap.extend.AppRepository;

import ro.platformsc.domain.Angajat;

/**
 * Spring Data JPA repository for the Angajat entity.
 */
public interface AngajatRepository extends AppRepository<Angajat,Long>{


}
