
package ro.platformsc.web.rest; 

import ro.teamnet.bootstrap.web.rest.AbstractResource;
import com.codahale.metrics.annotation.Timed;

import ro.platformsc.domain.Lucrare;
import ro.platformsc.service.LucrareService;
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
 * REST controller for managing Lucrare.
 */
@RestController
@RequestMapping("/api/lucrare")
public class LucrareResource extends AbstractResource<Lucrare,Long>{

    private final Logger log = LoggerFactory.getLogger(LucrareResource.class);

    @Inject
    public LucrareResource(LucrareService service) {
        super(service);
    }

}
