
package ro.platformsc.web.rest; 

import ro.teamnet.bootstrap.web.rest.AbstractResource;
import com.codahale.metrics.annotation.Timed;

import ro.platformsc.domain.Persoana;
import ro.platformsc.service.PersoanaService;
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
 * REST controller for managing Persoana.
 */
@RestController
@RequestMapping("/api/persoana")
public class PersoanaResource extends AbstractResource<Persoana,Long>{

    private final Logger log = LoggerFactory.getLogger(PersoanaResource.class);

    @Inject
    public PersoanaResource(PersoanaService service) {
        super(service);
    }

}
