package mk.ukim.finki.vp.backend.web;

import mk.ukim.finki.vp.backend.model.Domain;
import mk.ukim.finki.vp.backend.model.Field;
import mk.ukim.finki.vp.backend.service.FieldService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/fields")
public class FieldController {
    private final FieldService fieldService;

    public FieldController(FieldService fieldService) {
        this.fieldService = fieldService;
    }

    @GetMapping
    public ResponseEntity<List<Field>> getFields() {
        return ResponseEntity.ok(fieldService.findAll());
    }

}
