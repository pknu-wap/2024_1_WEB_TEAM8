package hello.hellospring.repository;

import hello.hellospring.domain.Answer;

import java.util.List;
import java.util.Optional;

public interface UserAnswerRepository {
    Answer save(Answer answer);
    Optional<Answer> findById(int id);
    List<Answer> findAll();


}
