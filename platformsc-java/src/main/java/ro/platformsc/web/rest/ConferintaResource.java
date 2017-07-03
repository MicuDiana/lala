
package ro.platformsc.web.rest; 

import ro.teamnet.bootstrap.web.rest.AbstractResource;
import com.codahale.metrics.annotation.Timed;

import ro.platformsc.domain.Conferinta;
import ro.platformsc.service.ConferintaService;
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
 * REST controller for managing Conferinta.
 */
@RestController
@RequestMapping("/api/conferinta")
public class ConferintaResource extends AbstractResource<Conferinta,Long>{

    private final Logger log = LoggerFactory.getLogger(ConferintaResource.class);

    @Inject
    public ConferintaResource(ConferintaService service) {
        super(service);
    }

}
