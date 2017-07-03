package ro.platformsc.repository;

import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import ro.teamnet.bootstrap.extend.AppRepository;

import ro.platformsc.domain.MembruAsocProf;

/**
 * Spring Data JPA repository for the MembruAsocProf entity.
 */
public interface MembruAsocProfRepository extends AppRepository<MembruAsocProf,Long>{


}
