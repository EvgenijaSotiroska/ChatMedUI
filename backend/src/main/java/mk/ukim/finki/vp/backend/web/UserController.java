package mk.ukim.finki.vp.backend.web;

import mk.ukim.finki.vp.backend.model.LoginDto;
import mk.ukim.finki.vp.backend.model.RegisterDro;
import mk.ukim.finki.vp.backend.model.User;
import mk.ukim.finki.vp.backend.model.exceptions.UserAlreadyExistsException;
import mk.ukim.finki.vp.backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok(userService.getAll());
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody RegisterDro registerDro) {
        if (userService.existsByUsername(registerDro.getUsername())) {
            throw new UserAlreadyExistsException(registerDro.getUsername());
        }
        User u = userService.saveUser(registerDro);
        return ResponseEntity.ok(u);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginDto loginDto) {
        boolean authenticated = userService.authenticate(loginDto.getUsername(), loginDto.getPassword());
        if (authenticated) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

}
