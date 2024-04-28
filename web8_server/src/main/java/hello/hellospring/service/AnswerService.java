package hello.hellospring.service;

import hello.hellospring.domain.Answer;
import hello.hellospring.repository.AnswerRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@Transactional
public class AnswerService {
    private final AnswerRepository answerRepository;
    @Autowired
    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public int save(Answer answer) {
        answerRepository.save(answer);
        return 1;
    }
    public List<Answer> findAnswers() {
        return answerRepository.findAll();
    }
}
