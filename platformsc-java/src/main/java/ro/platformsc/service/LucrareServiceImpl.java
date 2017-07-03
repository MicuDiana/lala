
package ro.platformsc.service; 

import ro.teamnet.bootstrap.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;

import ro.platformsc.domain.Lucrare;
import ro.platformsc.repository.LucrareRepository;
import org.springframework.transaction.annotation.Transactional;
import javax.inject.Inject;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
@Transactional(readOnly = true)
@SuppressWarnings("UnusedDeclaration")
public class LucrareServiceImpl extends AbstractServiceImpl<Lucrare,Long> implements LucrareService {

    private final Logger log = LoggerFactory.getLogger(LucrareServiceImpl.class);


    private LucrareRepository lucrareRepository;

    @Inject
    public LucrareServiceImpl(LucrareRepository repository) {
        super(repository);
        this. lucrareRepository=repository;
    }



}
