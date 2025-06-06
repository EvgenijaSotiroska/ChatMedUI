package mk.ukim.finki.vp.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne
    @JsonIgnore
    private User assignedTo;

    private LocalDate DueDate;

    private String ongoingTasks;

    private String taskPriority;

    @ElementCollection
    @JsonIgnore
    private List<String> attachedFiles;

    @ElementCollection
    @JsonIgnore
    private List<String> linkedItems;

    public User getAssignedTo() {
        return assignedTo;
    }

    public List<String> getAttachedFiles() {
        return attachedFiles;
    }

    public LocalDate getDueDate() {
        return DueDate;
    }

    public Long getId() {
        return id;
    }

    public List<String> getLinkedItems() {
        return linkedItems;
    }

    public String getName() {
        return name;
    }

    public String getOngoingTasks() {
        return ongoingTasks;
    }

    public String getTaskPriority() {
        return taskPriority;
    }
}
