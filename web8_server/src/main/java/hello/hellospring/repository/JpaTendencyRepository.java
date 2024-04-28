package hello.hellospring.repository;
import hello.hellospring.domain.Tendency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface JpaTendencyRepository extends JpaRepository<Tendency, String>, TendencyRepository {

}