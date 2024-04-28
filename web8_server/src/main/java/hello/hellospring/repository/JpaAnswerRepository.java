package hello.hellospring.repository;

import hello.hellospring.domain.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaAnswerRepository extends JpaRepository<Answer, String>, AnswerRepository {

}