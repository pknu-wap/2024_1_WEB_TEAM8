package hello.hellospring.repository;

import hello.hellospring.domain.GenreScore;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface GenreScoreRepository extends JpaRepository<GenreScore, Long> {
    Optional<GenreScore> findByGenre(String genre);
}