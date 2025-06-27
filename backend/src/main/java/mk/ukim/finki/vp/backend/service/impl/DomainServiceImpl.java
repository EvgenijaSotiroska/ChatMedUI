package mk.ukim.finki.vp.backend.service.impl;

import mk.ukim.finki.vp.backend.model.Domain;
import mk.ukim.finki.vp.backend.repository.DomainRepository;
import mk.ukim.finki.vp.backend.service.DomainService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DomainServiceImpl implements DomainService {
    private final DomainRepository domainRepository;

    public DomainServiceImpl(DomainRepository domainRepository) {
        this.domainRepository = domainRepository;
    }

    @Override
    public List<Domain> findAll() {
        return domainRepository.findAll();
    }
}
