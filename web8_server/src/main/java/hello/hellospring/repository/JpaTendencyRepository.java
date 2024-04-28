package hello.hellospring.repository;
import hello.hellospring.domain.Tendency;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaTendencyRepository extends JpaRepository<Tendency, Long>, TendencyRepository {

}