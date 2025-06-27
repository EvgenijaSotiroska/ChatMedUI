package mk.ukim.finki.vp.backend.repository;

import mk.ukim.finki.vp.backend.model.Domain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DomainRepository extends JpaRepository<Domain,Long> {
}
