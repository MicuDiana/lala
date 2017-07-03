package ro.platformsc.repository;

import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import ro.teamnet.bootstrap.extend.AppRepository;

import ro.platformsc.domain.Citari;

/**
 * Spring Data JPA repository for the Citari entity.
 */
public interface CitariRepository extends AppRepository<Citari,Long>{

    @Query("select citari from Citari citari  where citari.id =:id")
    Citari findOneWithEagerRelationships(@Param("id") Long id);


}
