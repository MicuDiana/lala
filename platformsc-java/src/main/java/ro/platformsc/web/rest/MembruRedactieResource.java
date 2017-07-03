
package ro.platformsc.web.rest; 

import ro.teamnet.bootstrap.web.rest.AbstractResource;
import com.codahale.metrics.annotation.Timed;

import ro.platformsc.domain.MembruRedactie;
import ro.platformsc.service.MembruRedactieService;
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
 * REST controller for managing MembruRedactie.
 */
@RestController
@RequestMapping("/api/membruRedactie")
public class MembruRedactieResource extends AbstractResource<MembruRedactie,Long>{

    private final Logger log = LoggerFactory.getLogger(MembruRedactieResource.class);

    @Inject
    public MembruRedactieResource(MembruRedactieService service) {
        super(service);
    }

}
