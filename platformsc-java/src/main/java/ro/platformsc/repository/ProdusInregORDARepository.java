package ro.platformsc.repository;

import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import ro.teamnet.bootstrap.extend.AppRepository;

import ro.platformsc.domain.ProdusInregORDA;

/**
 * Spring Data JPA repository for the ProdusInregORDA entity.
 */
public interface ProdusInregORDARepository extends AppRepository<ProdusInregORDA,Long>{


}
