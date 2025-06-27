package mk.ukim.finki.vp.backend.service;

import mk.ukim.finki.vp.backend.model.Domain;

import java.util.List;

public interface DomainService {
    List<Domain> findAll();
}
