
package ro.platformsc.service; 

import ro.teamnet.bootstrap.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;

import ro.platformsc.domain.ProdusInregORDA;
import ro.platformsc.repository.ProdusInregORDARepository;
import org.springframework.transaction.annotation.Transactional;
import javax.inject.Inject;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
@Transactional(readOnly = true)
@SuppressWarnings("UnusedDeclaration")
public class ProdusInregORDAServiceImpl extends AbstractServiceImpl<ProdusInregORDA,Long> implements ProdusInregORDAService {

    private final Logger log = LoggerFactory.getLogger(ProdusInregORDAServiceImpl.class);


    private ProdusInregORDARepository produsInregORDARepository;

    @Inject
    public ProdusInregORDAServiceImpl(ProdusInregORDARepository repository) {
        super(repository);
        this. produsInregORDARepository=repository;
    }



}
