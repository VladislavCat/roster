package ru.vlvl.rosterbuild.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import java.io.IOException;
import java.io.InputStream;

@Controller
@RequiredArgsConstructor
public class IndexController {

    @GetMapping("/main")
    public String main() {
        return "main";
    }

    public ResponseEntity<Resource> download(@PathVariable("picturePath") String picturePath) {
        try (InputStream fileInputStream = IndexController.class.getResourceAsStream("/icons/" + picturePath)) {
            ByteArrayResource byteArrayResource = new ByteArrayResource(fileInputStream.readAllBytes());
            return ResponseEntity.ok()
                    .headers(new HttpHeaders())
                    .contentLength(fileInputStream.readAllBytes().length)
                    .contentType(MediaType.parseMediaType("application/octet-stream"))
                    .body(byteArrayResource);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}