package hello.hellospring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import hello.hellospring.service.GenreScoreService;

@RestController
public class GenreScoreController {

    private final GenreScoreService service;

    @Autowired
    public GenreScoreController(GenreScoreService service) {
        this.service = service;
    }

    @PostMapping("/incrementScore")
    public void incrementScore(@RequestParam String genre) {
        service.incrementScore(genre);
    }
}
