package com.example.Aventurier.controller;

import com.example.Aventurier.model.NewPositionRequest;
import com.example.Aventurier.model.Position;
import com.example.Aventurier.service.GameService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class GameController {

    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping("/map")
    public List<String> getMap() {
        return gameService.getMap();
    }

    @GetMapping("/initial-position")
    public Position getInitialPosition() {
        return gameService.getInitialPosition();
    }

    @PostMapping("/new-position")
    public Position calculateNewPosition(@RequestBody NewPositionRequest request) {
        return gameService.calculateNewPosition(request.direction.charAt(0), request.lastPosition);
    }
}
