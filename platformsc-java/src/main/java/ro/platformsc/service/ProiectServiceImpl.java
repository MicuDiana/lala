
package ro.platformsc.service; 

import ro.teamnet.bootstrap.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;

import ro.platformsc.domain.Proiect;
import ro.platformsc.repository.ProiectRepository;
import org.springframework.transaction.annotation.Transactional;
import javax.inject.Inject;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
@Transactional(readOnly = true)
@SuppressWarnings("UnusedDeclaration")
public class ProiectServiceImpl extends AbstractServiceImpl<Proiect,Long> implements ProiectService {

    private final Logger log = LoggerFactory.getLogger(ProiectServiceImpl.class);


    private ProiectRepository proiectRepository;

    @Inject
    public ProiectServiceImpl(ProiectRepository repository) {
        super(repository);
        this. proiectRepository=repository;
    }



}
