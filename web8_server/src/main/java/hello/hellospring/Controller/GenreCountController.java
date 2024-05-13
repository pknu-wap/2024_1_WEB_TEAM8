package hello.hellospring.Controller;

import hello.hellospring.domain.GenreCount;
import hello.hellospring.repository.GenreCountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/genre")
public class GenreCountController {

    @Autowired
    private GenreCountRepository genreCountRepository;

    @PostMapping("/{genre}")
    public GenreCount incrementGenreCount(@PathVariable String genre) {
        GenreCount genreCount = genreCountRepository.findByGenre(genre);
        if (genreCount == null) {
            genreCount = new GenreCount();
            genreCount.setGenre(genre);
            genreCount.setCount(1);
        } else {
            genreCount.setCount(genreCount.getCount() + 1);
        }
        return genreCountRepository.save(genreCount);
    }

    @GetMapping("/{genre}")
    public GenreCount getGenreCount(@PathVariable String genre) {
        return genreCountRepository.findByGenre(genre);
    }
}
