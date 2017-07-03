    package ro.platformsc.repository;

    import org.springframework.data.repository.query.Param;
    import org.springframework.data.jpa.repository.Query;
    import ro.teamnet.bootstrap.extend.AppRepository;

    import ro.platformsc.domain.LimbaStraina;

    /**
     * Spring Data JPA repository for the LimbaStraina entity.
     */
    public interface LimbaStrainaRepository extends AppRepository<LimbaStraina,Long>{

        @Query("select limbaStraina from LimbaStraina limbaStraina  where limbaStraina.id =:id")
        LimbaStraina findOneWithEagerRelationships(@Param("id") Long id);


    }
