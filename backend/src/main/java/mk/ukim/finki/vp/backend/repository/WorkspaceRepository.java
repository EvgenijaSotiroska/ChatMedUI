package mk.ukim.finki.vp.backend.repository;

import mk.ukim.finki.vp.backend.model.User;
import mk.ukim.finki.vp.backend.model.Workspace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WorkspaceRepository extends JpaRepository<Workspace, Long> {
    Optional<Workspace> findByName(String name);
    @Query("SELECT w FROM Workspace w LEFT JOIN FETCH w.admin")
    List<Workspace> findAllWithAdmin();
}
