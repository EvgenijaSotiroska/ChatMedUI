package mk.ukim.finki.vp.backend.repository;

import mk.ukim.finki.vp.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    boolean existsUserByUsername(String username);
    Optional<User> findByUsername(String username);
}
