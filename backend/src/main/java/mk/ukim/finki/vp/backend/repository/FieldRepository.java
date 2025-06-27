package mk.ukim.finki.vp.backend.repository;

import mk.ukim.finki.vp.backend.model.Field;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FieldRepository extends JpaRepository<Field,Long> {
}
