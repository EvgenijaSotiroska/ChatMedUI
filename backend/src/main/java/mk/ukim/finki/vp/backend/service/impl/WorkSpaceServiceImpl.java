package mk.ukim.finki.vp.backend.service.impl;

import org.springframework.transaction.annotation.Transactional;
import mk.ukim.finki.vp.backend.model.Task;
import mk.ukim.finki.vp.backend.model.Workspace;
import mk.ukim.finki.vp.backend.repository.WorkspaceRepository;
import mk.ukim.finki.vp.backend.service.WorkSpaceService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WorkSpaceServiceImpl implements WorkSpaceService {
   private final WorkspaceRepository workspaceRepository;

    public WorkSpaceServiceImpl(WorkspaceRepository workspaceRepository) {
        this.workspaceRepository = workspaceRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Workspace> findAll() {
        return this.workspaceRepository.findAllWithAdmin();
    }

    @Override
    public Optional<Workspace> findById(Long id) {
        return this.workspaceRepository.findById(id);
    }

    @Override
    public Optional<Workspace> findByName(String name) {
        return this.workspaceRepository.findByName(name);
    }

    @Override
    public void deleteById(Long id) {
        this.workspaceRepository.deleteById(id);
    }

    @Override
    public List<Task> getTasksForWorkspace(Long workspaceId) {
        Workspace workspace = workspaceRepository.findById(workspaceId)
                .orElseThrow(() -> new RuntimeException("Workspace not found"));
        return workspace.getTasks();
    }
}
