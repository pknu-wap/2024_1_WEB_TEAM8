package hello.hellospring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import hello.hellospring.repository.GenreScoreRepository;
import hello.hellospring.domain.GenreScore;

@Service
public class GenreScoreService {

    private final GenreScoreRepository repository;

    @Autowired
    public GenreScoreService(GenreScoreRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public void incrementScore(String genre) {
        GenreScore genreScore = repository.findByGenre(genre)
                .orElseGet(() -> {
                    GenreScore newScore = new GenreScore();
                    newScore.setGenre(genre);
                    newScore.setScore(0);
                    return newScore;
                });
        genreScore.setScore(genreScore.getScore() + 1);
        repository.save(genreScore);
    }
}
