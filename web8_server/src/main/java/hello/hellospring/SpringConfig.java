package hello.hellospring;
import hello.hellospring.repository.*;
import hello.hellospring.service.UserAnswerService;
import hello.hellospring.service.TendencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {

    private final UserAnswerRepository answerRepository;
    private final TendencyRepository tendencyRepository;
    @Autowired
    public SpringConfig(UserAnswerRepository answerRepository, TendencyRepository tendencyRepository) {

        this.answerRepository = answerRepository;
        this.tendencyRepository = tendencyRepository;
    }
    @Bean
    public UserAnswerService answerService() {
        return new UserAnswerService(answerRepository);
    }
    @Bean
    public TendencyService tendencyService() {
        return new TendencyService(tendencyRepository);
    }

}