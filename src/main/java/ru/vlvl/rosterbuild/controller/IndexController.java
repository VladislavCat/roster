package ru.vlvl.rosterbuild.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Objects;

@Controller
@RequiredArgsConstructor
public class IndexController {

    @GetMapping(value = "/index", produces = MediaType.TEXT_HTML_VALUE)
    public String findAllArmy() {
        return "index";
    }

    @GetMapping("/main")
    public String main() {
        return "main";
    }

    @GetMapping("/photoSession/{picturePath}")
    public ResponseEntity<Resource> download(@PathVariable("picturePath") String picturePath) {
        try (FileInputStream fileInputStream = new FileInputStream(picturePath)) {
            return ResponseEntity.ok()
                    .headers(new HttpHeaders())
                    .contentLength(fileInputStream.readAllBytes().length)
                    .contentType(MediaType.parseMediaType("application/octet-stream"))
                    .body(new ByteArrayResource(fileInputStream.readAllBytes()));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}