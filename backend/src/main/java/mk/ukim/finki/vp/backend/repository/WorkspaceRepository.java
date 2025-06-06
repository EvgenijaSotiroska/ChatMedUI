package mk.ukim.finki.vp.backend.repository;

import mk.ukim.finki.vp.backend.model.User;
import mk.ukim.finki.vp.backend.model.Workspace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WorkspaceRepository extends JpaRepository<Workspace, Long> {
    public Optional<Workspace> findByName(String name);
}
