package mk.ukim.finki.vp.backend.service.impl;

import mk.ukim.finki.vp.backend.model.RegisterDro;
import mk.ukim.finki.vp.backend.model.User;
import mk.ukim.finki.vp.backend.repository.UserRepository;
import mk.ukim.finki.vp.backend.service.UserService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public boolean existsByUsername(String username) {
        return userRepository.existsUserByUsername(username);
    }

    @Override
    public User saveUser(RegisterDro registerDto) {
        String hashedPassword = passwordEncoder.encode(registerDto.getPassword());
        User u = new User(
                registerDto.getUsername(),
                hashedPassword,
                registerDto.getFirstName(),
                registerDto.getLastName()
        );
        return userRepository.save(u);
    }


    @Override
    public boolean authenticate(String username, String password) {
        return userRepository.findByUsername(username)
                .map(user -> passwordEncoder.matches(password, user.getPassword()))
                .orElse(false);
    }


    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));
    }
}
