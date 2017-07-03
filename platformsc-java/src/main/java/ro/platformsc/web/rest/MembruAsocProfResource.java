
package ro.platformsc.web.rest; 

import ro.teamnet.bootstrap.web.rest.AbstractResource;
import com.codahale.metrics.annotation.Timed;

import ro.platformsc.domain.MembruAsocProf;
import ro.platformsc.service.MembruAsocProfService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing MembruAsocProf.
 */
@RestController
@RequestMapping("/api/membruAsocProf")
public class MembruAsocProfResource extends AbstractResource<MembruAsocProf,Long>{

    private final Logger log = LoggerFactory.getLogger(MembruAsocProfResource.class);

    @Inject
    public MembruAsocProfResource(MembruAsocProfService service) {
        super(service);
    }

}
