package hello.hellospring;
import hello.hellospring.repository.*;
import hello.hellospring.service.AnswerService;
import hello.hellospring.service.TendencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {

    private final AnswerRepository answerRepository;
    private final TendencyRepository tendencyRepository;
    @Autowired
    public SpringConfig(AnswerRepository answerRepository, TendencyRepository tendencyRepository) {

        this.answerRepository = answerRepository;
        this.tendencyRepository = tendencyRepository;
    }
    @Bean
    public AnswerService answerService() {
        return new AnswerService(answerRepository);
    }
    @Bean
    public TendencyService tendencyService() {
        return new TendencyService(tendencyRepository);
    }

}