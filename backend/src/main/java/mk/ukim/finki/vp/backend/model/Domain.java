package mk.ukim.finki.vp.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name="domains")
@NoArgsConstructor
@AllArgsConstructor
public class Domain {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String domain_id;
    private String domain_text;

    public Long getId() {
        return id;
    }

    public String getDomain_id() {
        return domain_id;
    }

    public String getDomain_text() {
        return domain_text;
    }
}
