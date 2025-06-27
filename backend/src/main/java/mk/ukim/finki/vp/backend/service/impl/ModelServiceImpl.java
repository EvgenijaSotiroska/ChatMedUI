package mk.ukim.finki.vp.backend.service.impl;

import mk.ukim.finki.vp.backend.model.Model;
import mk.ukim.finki.vp.backend.repository.ModelRepository;
import mk.ukim.finki.vp.backend.service.ModelService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModelServiceImpl implements ModelService {
    private final ModelRepository modelRepository;

    public ModelServiceImpl(ModelRepository modelRepository) {
        this.modelRepository = modelRepository;
    }

    @Override
    public List<Model> findAll() {
        return modelRepository.findAll();
    }
}
