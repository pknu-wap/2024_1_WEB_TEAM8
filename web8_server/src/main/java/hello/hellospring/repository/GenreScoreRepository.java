package hello.hellospring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import hello.hellospring.domain.GenreScore;

@Repository
public interface GenreScoreRepository extends JpaRepository<GenreScore, Long> {
    Optional<GenreScore> findByGenre(String genre);
}
