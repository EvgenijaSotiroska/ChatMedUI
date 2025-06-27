package mk.ukim.finki.vp.backend.repository;

import mk.ukim.finki.vp.backend.model.Model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModelRepository extends JpaRepository<Model, Long> {
}
