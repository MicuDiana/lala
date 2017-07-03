package ro.platformsc.repository;

import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import ro.teamnet.bootstrap.extend.AppRepository;

import ro.platformsc.domain.Persoana;

/**
 * Spring Data JPA repository for the Persoana entity.
 */
public interface PersoanaRepository extends AppRepository<Persoana,Long>{


    @Override
    @Query("select persoana from Persoana persoana left join fetch persoana.proiect where persoana.id =:id")
    Persoana findOne(@Param("id") Long id);

}
