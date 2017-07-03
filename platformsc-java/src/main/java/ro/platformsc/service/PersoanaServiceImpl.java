
package ro.platformsc.service; 

import ro.teamnet.bootstrap.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;

import ro.platformsc.domain.Persoana;
import ro.platformsc.repository.PersoanaRepository;
import org.springframework.transaction.annotation.Transactional;
import javax.inject.Inject;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
@Transactional(readOnly = true)
@SuppressWarnings("UnusedDeclaration")
public class PersoanaServiceImpl extends AbstractServiceImpl<Persoana,Long> implements PersoanaService {

    private final Logger log = LoggerFactory.getLogger(PersoanaServiceImpl.class);


    private PersoanaRepository persoanaRepository;

    @Inject
    public PersoanaServiceImpl(PersoanaRepository repository) {
        super(repository);
        this. persoanaRepository=repository;
    }



}
