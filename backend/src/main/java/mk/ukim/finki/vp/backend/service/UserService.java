package mk.ukim.finki.vp.backend.service;

import mk.ukim.finki.vp.backend.model.RegisterDro;
import mk.ukim.finki.vp.backend.model.User;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

public interface UserService {
    boolean existsByUsername(String email);
    User saveUser(RegisterDro registerDto);
    boolean authenticate(String email, String password);
    List<User> getAll();
    UserDetails loadUserByUsername(String username);
}

