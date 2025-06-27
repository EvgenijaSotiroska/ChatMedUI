package mk.ukim.finki.vp.backend.web;

import mk.ukim.finki.vp.backend.model.Evaluation;
import mk.ukim.finki.vp.backend.model.Model;
import mk.ukim.finki.vp.backend.service.ModelService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/models")
public class ModelController {
    private final ModelService modelService;

    public ModelController(ModelService modelService) {
        this.modelService = modelService;
    }

    @GetMapping
    public ResponseEntity<List<Model>> getModels() {
        return ResponseEntity.ok(modelService.findAll());
    }

}
