
package ro.platformsc.web.rest; 

import ro.teamnet.bootstrap.web.rest.AbstractResource;
import com.codahale.metrics.annotation.Timed;

import ro.platformsc.domain.Citari;
import ro.platformsc.service.CitariService;
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
 * REST controller for managing Citari.
 */
@RestController
@RequestMapping("/api/citari")
public class CitariResource extends AbstractResource<Citari,Long>{

    private final Logger log = LoggerFactory.getLogger(CitariResource.class);

    @Inject
    public CitariResource(CitariService service) {
        super(service);
    }

}
