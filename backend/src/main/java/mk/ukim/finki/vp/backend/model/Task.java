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
    private User assignedTo;

    private LocalDate DueDate;

    private String ongoingTasks;

    private String taskPriority;


    public User getAssignedTo() {
        return assignedTo;
    }

    public LocalDate getDueDate() {
        return DueDate;
    }

    public Long getId() {
        return id;
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
