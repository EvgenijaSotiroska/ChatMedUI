package mk.ukim.finki.vp.backend.service;

import mk.ukim.finki.vp.backend.model.Question;

import java.util.List;

public interface QuestionService {
    List<Question> findAll();
}
