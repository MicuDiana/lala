package ro.platformsc.repository;

import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import ro.teamnet.bootstrap.extend.AppRepository;

import ro.platformsc.domain.Proiect;

/**
 * Spring Data JPA repository for the Proiect entity.
 */
public interface ProiectRepository extends AppRepository<Proiect,Long>{


}
