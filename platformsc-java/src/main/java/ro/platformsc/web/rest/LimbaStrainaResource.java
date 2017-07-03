
package ro.platformsc.web.rest; 

import ro.teamnet.bootstrap.web.rest.AbstractResource;
import com.codahale.metrics.annotation.Timed;

import ro.platformsc.domain.LimbaStraina;
import ro.platformsc.service.LimbaStrainaService;
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
 * REST controller for managing LimbaStraina.
 */
@RestController
@RequestMapping("/api/limbaStraina")
public class LimbaStrainaResource extends AbstractResource<LimbaStraina,Long>{

    private final Logger log = LoggerFactory.getLogger(LimbaStrainaResource.class);

    @Inject
    public LimbaStrainaResource(LimbaStrainaService service) {
        super(service);
    }

}
