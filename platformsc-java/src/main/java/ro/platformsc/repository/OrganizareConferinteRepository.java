package ro.platformsc.repository;

import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import ro.teamnet.bootstrap.extend.AppRepository;

import ro.platformsc.domain.OrganizareConferinte;

/**
 * Spring Data JPA repository for the OrganizareConferinte entity.
 */
public interface OrganizareConferinteRepository extends AppRepository<OrganizareConferinte,Long>{


    @Override
    @Query("select organizareConferinte from OrganizareConferinte organizareConferinte left join fetch organizareConferinte.persoana where organizareConferinte.id =:id")
    OrganizareConferinte findOne(@Param("id") Long id);

}
