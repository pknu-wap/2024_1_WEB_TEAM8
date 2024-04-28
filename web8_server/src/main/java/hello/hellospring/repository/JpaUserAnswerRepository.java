package hello.hellospring.repository;

import hello.hellospring.domain.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaUserAnswerRepository extends JpaRepository<Answer, Integer>, UserAnswerRepository {

}