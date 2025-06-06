package mk.ukim.finki.vp.backend.service;

import mk.ukim.finki.vp.backend.model.Task;
import mk.ukim.finki.vp.backend.model.Workspace;

import java.util.List;
import java.util.Optional;

public interface WorkSpaceService {
    List<Workspace> findAll();

    Optional<Workspace> findById(Long id);

    Optional<Workspace> findByName(String name);

    void deleteById(Long id);
    public List<Task> getTasksForWorkspace(Long workspaceId);
}
