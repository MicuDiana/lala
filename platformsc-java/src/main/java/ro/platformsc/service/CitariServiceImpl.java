
package ro.platformsc.service; 

import ro.teamnet.bootstrap.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;

import ro.platformsc.domain.Citari;
import ro.platformsc.repository.CitariRepository;
import org.springframework.transaction.annotation.Transactional;
import javax.inject.Inject;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
@Transactional(readOnly = true)
@SuppressWarnings("UnusedDeclaration")
public class CitariServiceImpl extends AbstractServiceImpl<Citari,Long> implements CitariService {

    private final Logger log = LoggerFactory.getLogger(CitariServiceImpl.class);


    private CitariRepository citariRepository;

    @Inject
    public CitariServiceImpl(CitariRepository repository) {
        super(repository);
        this. citariRepository=repository;
    }



}
