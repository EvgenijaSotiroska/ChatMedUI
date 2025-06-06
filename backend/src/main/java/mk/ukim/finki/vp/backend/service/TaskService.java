package mk.ukim.finki.vp.backend.service;

import mk.ukim.finki.vp.backend.model.Task;

import java.util.List;
import java.util.Optional;

public interface TaskService {
    List<Task> findAll();

    Optional<Task> findById(Long id);

    Optional<Task> findByName(String name);

    Optional<Task> save(Task t);

    Optional<Task> update();

    void deleteById(Long id);

}
