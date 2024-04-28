package hello.hellospring.repository;
import hello.hellospring.domain.Tendency;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface TendencyRepository {
    Tendency save(Tendency tendency);
    Optional<Tendency> findByGenreName(String genreName);
    List<Tendency> findAll();

    @Query("SELECT t.deviation FROM Tendency t WHERE t.genreName = :genreName")
    Optional<Double> findOneDeviations(@Param("genreName") String genreName);

}
