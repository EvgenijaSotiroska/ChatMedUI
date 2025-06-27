package mk.ukim.finki.vp.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name="questions")
@NoArgsConstructor
@AllArgsConstructor
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Field field;
    @ManyToOne
    private Domain domain;

    public Long getId() {
        return id;
    }

    public Field getField() {
        return field;
    }

    public Domain getDomain() {
        return domain;
    }
}
