package hello.hellospring.Controller;

import hello.hellospring.domain.*;
import hello.hellospring.service.UserAnswerService;
import hello.hellospring.service.TendencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class AnswerController {
    public static final int N = 60;
    public static int n = 1;
    private final UserAnswerService userAnswerService;
    private final TendencyService tendencyService;
    @Autowired // 생성자에 붙이면 스프링 컨테이너에 있는 스프링 빈과  자동으로 연결해줌
    public AnswerController(UserAnswerService userAnswerService, TendencyService tendencyService) {
        this.userAnswerService = userAnswerService;
        this.tendencyService = tendencyService;
    }

    public void calc(double[] doubles) {
        double aver = 0.0;
        for (double i : doubles) {
            aver += i;
        }
        aver /= N; //평균
        System.out.println("평균 = " + aver);
        for(int i = 1; i<doubles.length; i++) {
            double deviation = Math.abs(doubles[i]-aver);
            Tendency t = new Tendency();
            t.setQuestionId((long)i);
            t.setDeviation(deviation);
            tendencyService.save(t);
        }

    }

    @PostMapping("/answer")
    @ResponseBody
    public String answerResultFront(@RequestBody AnswerForm answerForm) {
        // 프론트에서 전달 받은 장르 이름, 장르 값(사용자 입력값)
        GenreName genreName = answerForm.getGenreName();
        GenreValue genreValue = answerForm.getGenreValue();

        set(genreName.getPopGenre(), genreValue.getPopValue());
        set(genreName.getJazzGenre(), genreValue.getJazzValue());
        set(genreName.getHipGenre(), genreValue.getHipValue());
        set(genreName.getRbGenre(), genreValue.getRbValue());
        set(genreName.getRockGenre(), genreValue.getRockValue());

        return "Data received successfully";
    }
    public void set(List<String> name, List<String> value) {
        if(name.isEmpty() || value.isEmpty()) {
            return;
        }
        Answer answer = new Answer();
        for(int i = 0; i<name.size();i++) {
            answer.setGenreName(name.get(i));
            answer.setGenreValue(Integer.parseInt(value.get(i)));
            int id = userAnswerService.save(answer);
            System.out.println(n + "저장");
            n++;
        }

    }
}
