
package ro.platformsc.service; 

import ro.teamnet.bootstrap.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;

import ro.platformsc.domain.MembruAsocProf;
import ro.platformsc.repository.MembruAsocProfRepository;
import org.springframework.transaction.annotation.Transactional;
import javax.inject.Inject;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
@Transactional(readOnly = true)
@SuppressWarnings("UnusedDeclaration")
public class MembruAsocProfServiceImpl extends AbstractServiceImpl<MembruAsocProf,Long> implements MembruAsocProfService {

    private final Logger log = LoggerFactory.getLogger(MembruAsocProfServiceImpl.class);


    private MembruAsocProfRepository membruAsocProfRepository;

    @Inject
    public MembruAsocProfServiceImpl(MembruAsocProfRepository repository) {
        super(repository);
        this. membruAsocProfRepository=repository;
    }



}
