package mk.ukim.finki.vp.backend.web;

import mk.ukim.finki.vp.backend.model.Evaluation;
import mk.ukim.finki.vp.backend.model.Task;
import mk.ukim.finki.vp.backend.service.EvaluationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/evaluations")
public class EvaluationController {
    private final EvaluationService evaluationService;

    public EvaluationController(EvaluationService evaluationService) {
        this.evaluationService = evaluationService;
    }

    @GetMapping
    public ResponseEntity<List<Evaluation>> getEvaluations() {
        return ResponseEntity.ok(evaluationService.findAll());
    }
}
