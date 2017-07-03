
package ro.platformsc.service; 

import ro.teamnet.bootstrap.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;

import ro.platformsc.domain.Angajat;
import ro.platformsc.repository.AngajatRepository;
import org.springframework.transaction.annotation.Transactional;
import javax.inject.Inject;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
@Transactional(readOnly = true)
@SuppressWarnings("UnusedDeclaration")
public class AngajatServiceImpl extends AbstractServiceImpl<Angajat,Long> implements AngajatService {

    private final Logger log = LoggerFactory.getLogger(AngajatServiceImpl.class);


    private AngajatRepository angajatRepository;

    @Inject
    public AngajatServiceImpl(AngajatRepository repository) {
        super(repository);
        this. angajatRepository=repository;
    }



}
