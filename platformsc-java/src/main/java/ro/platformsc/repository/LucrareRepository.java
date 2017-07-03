package ro.platformsc.repository;

import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import ro.teamnet.bootstrap.extend.AppRepository;

import ro.platformsc.domain.Lucrare;

/**
 * Spring Data JPA repository for the Lucrare entity.
 */
public interface LucrareRepository extends AppRepository<Lucrare,Long>{

    @Query("select lucrare from Lucrare lucrare left join fetch lucrare.citaris left join fetch lucrare.conferintas where lucrare.id =:id")
    Lucrare findOneWithEagerRelationships(@Param("id") Long id);


}
