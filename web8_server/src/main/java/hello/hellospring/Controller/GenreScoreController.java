package hello.hellospring.Controller;

import hello.hellospring.service.GenreScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GenreScoreController {

    @Autowired
    private GenreScoreService service;

    @PostMapping("/incrementScore")
    public void incrementScore(@RequestParam String genre) {
        service.incrementScore(genre);
    }
}
