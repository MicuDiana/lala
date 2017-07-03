
package ro.platformsc.service; 

import ro.teamnet.bootstrap.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;

import ro.platformsc.domain.Conferinta;
import ro.platformsc.repository.ConferintaRepository;
import org.springframework.transaction.annotation.Transactional;
import javax.inject.Inject;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
@Transactional(readOnly = true)
@SuppressWarnings("UnusedDeclaration")
public class ConferintaServiceImpl extends AbstractServiceImpl<Conferinta,Long> implements ConferintaService {

    private final Logger log = LoggerFactory.getLogger(ConferintaServiceImpl.class);


    private ConferintaRepository conferintaRepository;

    @Inject
    public ConferintaServiceImpl(ConferintaRepository repository) {
        super(repository);
        this. conferintaRepository=repository;
    }



}
