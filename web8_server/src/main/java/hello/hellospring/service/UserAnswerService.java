package hello.hellospring.service;

import hello.hellospring.domain.Answer;
import hello.hellospring.repository.UserAnswerRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@Transactional
public class UserAnswerService {
    private final UserAnswerRepository answerRepository;
    @Autowired
    public UserAnswerService(UserAnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public int save(Answer answer) {
        answerRepository.save(answer);
        return 1;
    }
    public List<Answer> findAnswers() {
        return answerRepository.findAll();
    }
    public Optional<Answer> findOne(int questionId) {
        return answerRepository.findById(questionId);
    }
}
