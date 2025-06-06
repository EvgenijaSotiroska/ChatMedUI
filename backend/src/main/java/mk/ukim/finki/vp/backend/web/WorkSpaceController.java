package mk.ukim.finki.vp.backend.web;

import mk.ukim.finki.vp.backend.model.Task;
import mk.ukim.finki.vp.backend.model.Workspace;
import mk.ukim.finki.vp.backend.service.WorkSpaceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/workspace")
public class WorkSpaceController {
    private final WorkSpaceService workSpaceService;

    public WorkSpaceController(WorkSpaceService workSpaceService) {
        this.workSpaceService = workSpaceService;
    }

    @GetMapping
    public ResponseEntity<List<Workspace>> getWorkspaces() {
        return ResponseEntity.ok(workSpaceService.findAll());
    }

}
