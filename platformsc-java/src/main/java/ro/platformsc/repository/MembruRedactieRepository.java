package ro.platformsc.repository;

import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import ro.teamnet.bootstrap.extend.AppRepository;

import ro.platformsc.domain.MembruRedactie;

/**
 * Spring Data JPA repository for the MembruRedactie entity.
 */
public interface MembruRedactieRepository extends AppRepository<MembruRedactie,Long>{


    @Override
    @Query("select membruRedactie from MembruRedactie membruRedactie left join fetch membruRedactie.angajat where membruRedactie.id =:id")
    MembruRedactie findOne(@Param("id") Long id);

}
