
package ro.platformsc.service; 

import ro.teamnet.bootstrap.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;

import ro.platformsc.domain.OrganizareConferinte;
import ro.platformsc.repository.OrganizareConferinteRepository;
import org.springframework.transaction.annotation.Transactional;
import javax.inject.Inject;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
@Transactional(readOnly = true)
@SuppressWarnings("UnusedDeclaration")
public class OrganizareConferinteServiceImpl extends AbstractServiceImpl<OrganizareConferinte,Long> implements OrganizareConferinteService {

    private final Logger log = LoggerFactory.getLogger(OrganizareConferinteServiceImpl.class);


    private OrganizareConferinteRepository organizareConferinteRepository;

    @Inject
    public OrganizareConferinteServiceImpl(OrganizareConferinteRepository repository) {
        super(repository);
        this. organizareConferinteRepository=repository;
    }



}
