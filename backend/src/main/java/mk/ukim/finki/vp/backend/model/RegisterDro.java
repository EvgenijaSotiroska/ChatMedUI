package mk.ukim.finki.vp.backend.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterDro {
    private String username;
    private String password;
    private String firstName;
    private String lastName;

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return username;
    }
}
