package hello.hellospring.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.Map;

@Controller
public class AnswerController {

    @GetMapping("/answer")
    public String answer() {
        return "answer-test";
    }

    @PostMapping("/answer")
    public void answerResult(@ModelAttribute SurveyForm surveyForm) {
        SurveyForm result = surveyForm;
        List<AnswerForm> answers =  result.getAnswers();
        if (answers != null) {
            for (AnswerForm answer : answers) {
                System.out.println(answer.getOption());
            }
        } else {
            System.out.println("폼 데이터를 받아올 수 없습니다.");
        }
    }
}
