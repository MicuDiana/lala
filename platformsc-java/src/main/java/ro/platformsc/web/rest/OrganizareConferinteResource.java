
package ro.platformsc.web.rest; 

import ro.teamnet.bootstrap.web.rest.AbstractResource;
import com.codahale.metrics.annotation.Timed;

import ro.platformsc.domain.OrganizareConferinte;
import ro.platformsc.service.OrganizareConferinteService;
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
 * REST controller for managing OrganizareConferinte.
 */
@RestController
@RequestMapping("/api/organizareConferinte")
public class OrganizareConferinteResource extends AbstractResource<OrganizareConferinte,Long>{

    private final Logger log = LoggerFactory.getLogger(OrganizareConferinteResource.class);

    @Inject
    public OrganizareConferinteResource(OrganizareConferinteService service) {
        super(service);
    }

}
