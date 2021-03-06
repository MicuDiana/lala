
package ro.platformsc.web.rest; 

import ro.teamnet.bootstrap.web.rest.AbstractResource;
import com.codahale.metrics.annotation.Timed;

import ro.platformsc.domain.Proiect;
import ro.platformsc.service.ProiectService;
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
 * REST controller for managing Proiect.
 */
@RestController
@RequestMapping("/api/proiect")
public class ProiectResource extends AbstractResource<Proiect,Long>{

    private final Logger log = LoggerFactory.getLogger(ProiectResource.class);

    @Inject
    public ProiectResource(ProiectService service) {
        super(service);
    }

}
