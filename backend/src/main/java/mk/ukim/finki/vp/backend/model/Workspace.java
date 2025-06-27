package mk.ukim.finki.vp.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="workspaces")
public class Workspace {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;

    @ManyToMany
    @JsonIgnore
    private List<Task> tasks;

    @ManyToMany
    @JsonIgnore
    private List<User> users;

    @ManyToMany
    @JsonIgnore
    private List<Question> questions;

    @ManyToMany
    @JsonIgnore
    private List<Model> models;

    public String getDescription() {
        return description;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public List<User> getUsers() {
        return users;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public List<Model> getModels() {
        return models;
    }
}
