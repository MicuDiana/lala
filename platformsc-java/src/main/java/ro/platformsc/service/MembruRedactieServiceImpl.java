
package ro.platformsc.service; 

import ro.teamnet.bootstrap.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;

import ro.platformsc.domain.MembruRedactie;
import ro.platformsc.repository.MembruRedactieRepository;
import org.springframework.transaction.annotation.Transactional;
import javax.inject.Inject;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
@Transactional(readOnly = true)
@SuppressWarnings("UnusedDeclaration")
public class MembruRedactieServiceImpl extends AbstractServiceImpl<MembruRedactie,Long> implements MembruRedactieService {

    private final Logger log = LoggerFactory.getLogger(MembruRedactieServiceImpl.class);


    private MembruRedactieRepository membruRedactieRepository;

    @Inject
    public MembruRedactieServiceImpl(MembruRedactieRepository repository) {
        super(repository);
        this. membruRedactieRepository=repository;
    }



}
