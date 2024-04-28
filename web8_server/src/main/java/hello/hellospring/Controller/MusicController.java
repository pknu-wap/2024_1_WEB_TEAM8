package hello.hellospring.Controller;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

public class MusicController {
    @GetMapping("/music/{fileName:.+}")
    public ResponseEntity<Resource> getMusic(@PathVariable String fileName) throws MalformedURLException {
        // 음악 파일의 경로를 가져오는 코드 (파일명은 URI로부터 가져온다고 가정)
        String filePath = "C:/music/" + fileName;

        // 음악 파일을 Resource로 변환
        Path path = Paths.get(filePath);
        UrlResource resource = new UrlResource(path.toUri());

        // 미디어 타입을 설정
        MediaType mediaType = MediaType.parseMediaType("audio/mpeg");

        return ResponseEntity.ok()
                .contentType(mediaType)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }
}