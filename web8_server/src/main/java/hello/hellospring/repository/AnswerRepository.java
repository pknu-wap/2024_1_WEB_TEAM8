package hello.hellospring.repository;

import hello.hellospring.domain.Answer;

import java.util.List;
import java.util.Optional;

public interface AnswerRepository {
    Answer save(Answer answer);
    List<Answer> findAll();

}
