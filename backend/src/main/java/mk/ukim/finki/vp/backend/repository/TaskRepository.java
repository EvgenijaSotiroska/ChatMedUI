package mk.ukim.finki.vp.backend.repository;

import mk.ukim.finki.vp.backend.model.Task;
import mk.ukim.finki.vp.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    public Optional<Task> findTaskByName(String name);

}
