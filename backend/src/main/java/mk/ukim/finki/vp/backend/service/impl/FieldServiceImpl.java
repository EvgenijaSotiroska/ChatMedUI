package mk.ukim.finki.vp.backend.service.impl;

import mk.ukim.finki.vp.backend.model.Field;
import mk.ukim.finki.vp.backend.repository.FieldRepository;
import mk.ukim.finki.vp.backend.service.FieldService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FieldServiceImpl implements FieldService {
    private final FieldRepository fieldRepository;

    public FieldServiceImpl(FieldRepository fieldRepository) {
        this.fieldRepository = fieldRepository;
    }

    @Override
    public List<Field> findAll() {
        return fieldRepository.findAll();
    }
}
