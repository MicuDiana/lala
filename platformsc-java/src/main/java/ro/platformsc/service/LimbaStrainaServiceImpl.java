
package ro.platformsc.service; 

import ro.teamnet.bootstrap.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;

import ro.platformsc.domain.LimbaStraina;
import ro.platformsc.repository.LimbaStrainaRepository;
import org.springframework.transaction.annotation.Transactional;
import javax.inject.Inject;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
@Transactional(readOnly = true)
@SuppressWarnings("UnusedDeclaration")
public class LimbaStrainaServiceImpl extends AbstractServiceImpl<LimbaStraina,Long> implements LimbaStrainaService {

    private final Logger log = LoggerFactory.getLogger(LimbaStrainaServiceImpl.class);


    private LimbaStrainaRepository limbaStrainaRepository;

    @Inject
    public LimbaStrainaServiceImpl(LimbaStrainaRepository repository) {
        super(repository);
        this. limbaStrainaRepository=repository;
    }



}
