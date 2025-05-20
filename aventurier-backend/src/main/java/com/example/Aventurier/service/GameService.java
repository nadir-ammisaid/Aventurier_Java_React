package com.example.Aventurier.service;

import com.example.Aventurier.model.Position;
import com.example.Aventurier.utils.GameDataLoader;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class GameService {
    public GameService() {}

    public List<String> getMap() { return GameDataLoader.loadMap(); }

    public Position getInitialPosition()  {
        try {
            return GameDataLoader.loadInitialPosition();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public Position calculateNewPosition(char direction, Position lastPosition) {
        int nextX = lastPosition.getX();
        int nextY = lastPosition.getY();

        switch (direction) {
            case 'N' -> nextY--;
            case 'S' -> nextY++;
            case 'E' -> nextX++;
            case 'O' -> nextX--;
        }

        if (hasRights(nextX, nextY)) {
            Position newPosition = new Position(nextX, nextY);

            return newPosition;
        }

        return lastPosition;
    }

    private boolean hasRights(int x, int y) {
        var map = GameDataLoader.loadMap();

        // Check boundaries
        if (y < 0 || y >= map.size()) return false;
        if (x < 0 || x >= map.get(y).length()) return false;

        // Check free cell
        if (map.get(y).charAt(x) != ' ') return false;

        return true;
    }
}
