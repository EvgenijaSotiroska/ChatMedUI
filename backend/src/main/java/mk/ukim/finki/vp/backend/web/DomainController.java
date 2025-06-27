package mk.ukim.finki.vp.backend.web;

import mk.ukim.finki.vp.backend.model.Domain;
import mk.ukim.finki.vp.backend.model.Evaluation;
import mk.ukim.finki.vp.backend.service.DomainService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/domains")
public class DomainController {
    private final DomainService domainService;

    public DomainController(DomainService domainService) {
        this.domainService = domainService;
    }

    @GetMapping
    public ResponseEntity<List<Domain>> getDomains() {
        return ResponseEntity.ok(domainService.findAll());
    }

}
