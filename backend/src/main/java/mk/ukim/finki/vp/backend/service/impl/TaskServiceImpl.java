package mk.ukim.finki.vp.backend.service.impl;

import mk.ukim.finki.vp.backend.model.Task;
import mk.ukim.finki.vp.backend.repository.TaskRepository;
import mk.ukim.finki.vp.backend.service.TaskService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public List<Task> findAll() {
        return this.taskRepository.findAll();
    }

    @Override
    public Optional<Task> findById(Long id) {
        return this.taskRepository.findById(id);
    }

    @Override
    public Optional<Task> findByName(String name) {
        return this.taskRepository.findTaskByName(name);
    }

    @Override
    public Optional<Task> save(Task t) {
        return Optional.empty(); //TODO
    }

    @Override
    public Optional<Task> update() {
        return Optional.empty();
    }

    @Override
    public void deleteById(Long id) {
        this.taskRepository.deleteById(id);
    }
}
