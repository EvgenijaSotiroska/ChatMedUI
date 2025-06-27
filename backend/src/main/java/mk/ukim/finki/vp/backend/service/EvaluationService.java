package mk.ukim.finki.vp.backend.service;

import mk.ukim.finki.vp.backend.model.Evaluation;

import java.util.List;

public interface EvaluationService {
    List<Evaluation> findAll();
}
