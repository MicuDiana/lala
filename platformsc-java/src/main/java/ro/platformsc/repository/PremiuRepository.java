package ro.platformsc.repository;

import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import ro.teamnet.bootstrap.extend.AppRepository;

import ro.platformsc.domain.Premiu;

/**
 * Spring Data JPA repository for the Premiu entity.
 */
public interface PremiuRepository extends AppRepository<Premiu,Long>{


    @Override
    @Query("select premiu from Premiu premiu left join fetch premiu.persoana where premiu.id =:id")
    Premiu findOne(@Param("id") Long id);

}
