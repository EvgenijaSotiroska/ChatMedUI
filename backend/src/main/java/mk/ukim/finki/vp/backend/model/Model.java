package mk.ukim.finki.vp.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Data
@Entity
@Table(name="models")
@NoArgsConstructor
@AllArgsConstructor
public class Model {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String model_name;
    private LocalDate release_date;

    public Long getId() {
        return id;
    }

    public String getModel_name() {
        return model_name;
    }

    public LocalDate getRelease_date() {
        return release_date;
    }
}
