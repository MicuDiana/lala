
package ro.platformsc.service; 

import ro.teamnet.bootstrap.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;

import ro.platformsc.domain.Premiu;
import ro.platformsc.repository.PremiuRepository;
import org.springframework.transaction.annotation.Transactional;
import javax.inject.Inject;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
@Transactional(readOnly = true)
@SuppressWarnings("UnusedDeclaration")
public class PremiuServiceImpl extends AbstractServiceImpl<Premiu,Long> implements PremiuService {

    private final Logger log = LoggerFactory.getLogger(PremiuServiceImpl.class);


    private PremiuRepository premiuRepository;

    @Inject
    public PremiuServiceImpl(PremiuRepository repository) {
        super(repository);
        this. premiuRepository=repository;
    }



}
