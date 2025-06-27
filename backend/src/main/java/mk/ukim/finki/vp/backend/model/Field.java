package mk.ukim.finki.vp.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name="fields")
@NoArgsConstructor
@AllArgsConstructor
public class Field {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String field_id;
    private String field_text;

    public Long getId() {
        return id;
    }

    public String getField_id() {
        return field_id;
    }

    public String getField_text() {
        return field_text;
    }
}
