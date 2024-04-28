package hello.hellospring.repository;
import hello.hellospring.domain.Tendency;
import java.util.List;
import java.util.Optional;

public interface TendencyRepository {
    Tendency save(Tendency tendency);
    Optional<Tendency> findById(Long id);
    List<Tendency> findAll();


}
