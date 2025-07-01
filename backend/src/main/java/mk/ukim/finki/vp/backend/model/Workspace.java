package mk.ukim.finki.vp.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinTable(
            name = "workspace_admin",
            joinColumns = @JoinColumn(name = "workspace_id"),
            inverseJoinColumns = @JoinColumn(name = "user_username")
    )
    private User admin;

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

    public User getAdmin() {
        return admin;
    }
}
