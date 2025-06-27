package mk.ukim.finki.vp.backend.service.impl;

import mk.ukim.finki.vp.backend.model.Evaluation;
import mk.ukim.finki.vp.backend.repository.EvaluationRepository;
import mk.ukim.finki.vp.backend.service.EvaluationService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EvaluationServiceImpl implements EvaluationService {
    private final EvaluationRepository evaluationRepository;

    public EvaluationServiceImpl(EvaluationRepository evaluationRepository) {
        this.evaluationRepository = evaluationRepository;
    }

    @Override
    public List<Evaluation> findAll() {
        return evaluationRepository.findAll();
    }
}
