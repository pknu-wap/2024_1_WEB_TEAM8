package hello.hellospring.repository;

import hello.hellospring.domain.GenreCount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreCountRepository extends JpaRepository<GenreCount, Long> {
    GenreCount findByGenre(String genre);
}