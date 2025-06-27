package mk.ukim.finki.vp.backend.service.impl;

import mk.ukim.finki.vp.backend.model.Question;
import mk.ukim.finki.vp.backend.repository.QuestionRepository;
import mk.ukim.finki.vp.backend.service.QuestionService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionServiceImpl(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public List<Question> findAll() {
        return questionRepository.findAll();
    }
}
