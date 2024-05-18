package hello.hellospring.Controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;
import java.io.InputStream;

@RestController
public class MusicController {
    @GetMapping("/music/{fileName}")
    public ResponseEntity<byte[]> getMusic(@PathVariable("fileName") String fileName) throws IOException {
        // 클래스패스 상의 리소스를 로드
        Resource resource = new ClassPathResource("static/music/" + fileName + ".mp3");

        // 리소스가 존재하는지 확인
        if (resource.exists() && resource.isReadable()) {
            // 리소스를 InputStream으로 읽어들임
            InputStream inputStream = resource.getInputStream();
            // InputStream에서 바이트 배열로 데이터를 읽어옴
            byte[] audioBytes = inputStream.readAllBytes();

            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .body(audioBytes);
        } else {
            // 파일이 존재하지 않거나 읽을 수 없는 경우 예외 처리
            throw new RuntimeException("Could not read the file!");
        }
    }
}