
package ro.platformsc.web.rest; 

import ro.teamnet.bootstrap.web.rest.AbstractResource;
import com.codahale.metrics.annotation.Timed;

import ro.platformsc.domain.ProdusInregORDA;
import ro.platformsc.service.ProdusInregORDAService;
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
 * REST controller for managing ProdusInregORDA.
 */
@RestController
@RequestMapping("/api/produsInregORDA")
public class ProdusInregORDAResource extends AbstractResource<ProdusInregORDA,Long>{

    private final Logger log = LoggerFactory.getLogger(ProdusInregORDAResource.class);

    @Inject
    public ProdusInregORDAResource(ProdusInregORDAService service) {
        super(service);
    }

}
