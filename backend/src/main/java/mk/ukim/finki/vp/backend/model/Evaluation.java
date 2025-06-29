package mk.ukim.finki.vp.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name="evaluations")
@NoArgsConstructor
@AllArgsConstructor
public class Evaluation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private Question question;
    @ManyToOne
    private Model model;
    @ManyToOne
    private User user;
    private String comment;
    private double accuracy;
    private double comprehensiveness;
    private double clarity;
    private double empathy;
    private double bias;
    private double harm;
    private double relevance;
    private double currency;
    private double understanding;
    private double reasoning;
    private double factuality_verification;
    private double fabrication;
    private double falsification;
    private double plagiarism;

    public Long getId() {
        return id;
    }

    public Model getModel() {
        return model;
    }

    public User getUser() {
        return user;
    }

    public String getComment() {
        return comment;
    }

    public double getAccuracy() {
        return accuracy;
    }

    public double getComprehensiveness() {
        return comprehensiveness;
    }

    public double getClarity() {
        return clarity;
    }

    public double getEmpathy() {
        return empathy;
    }

    public double getBias() {
        return bias;
    }

    public double getHarm() {
        return harm;
    }

    public double getRelevance() {
        return relevance;
    }

    public double getCurrency() {
        return currency;
    }

    public double getUnderstanding() {
        return understanding;
    }

    public double getReasoning() {
        return reasoning;
    }

    public double getFactuality_verification() {
        return factuality_verification;
    }

    public double getFabrication() {
        return fabrication;
    }

    public double getFalsification() {
        return falsification;
    }

    public double getPlagiarism() {
        return plagiarism;
    }
}
