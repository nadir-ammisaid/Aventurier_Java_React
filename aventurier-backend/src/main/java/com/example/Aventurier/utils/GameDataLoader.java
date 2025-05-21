package com.example.Aventurier.utils;

import com.example.Aventurier.model.Position;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.stream.Collectors;

public class GameDataLoader {

    public static List<String> loadMap() {
        InputStream inputStream = GameDataLoader.class.getClassLoader().getResourceAsStream("map.txt");

        List<String> lines = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8))
                .lines()
                .map(String::stripTrailing)
                .collect(Collectors.toList());

        int maxLength = lines.stream().mapToInt(String::length).max().orElse(0);

        return lines.stream()
                .map(line -> String.format("%-" + maxLength + "s", line))
                .collect(Collectors.toList());
    }





    public static Position loadInitialPosition() throws IOException {
        InputStream inputStream = GameDataLoader.class.getClassLoader().getResourceAsStream("initial_position.txt");

        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8));

        String firstLine = reader.readLine();

        if (firstLine == null || !firstLine.contains(",")) {
            throw new IllegalArgumentException("Format invalide pour initial_position.txt");
        }

        String[] coords = firstLine.split(",");
        int x = Integer.parseInt(coords[0].trim());
        int y = Integer.parseInt(coords[1].trim());

        return new Position(x, y);
    }
}
