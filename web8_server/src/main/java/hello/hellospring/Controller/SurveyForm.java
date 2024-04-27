package hello.hellospring.Controller;

import java.util.List;
import java.util.Map;

public class SurveyForm {
    List<AnswerForm> answers;

    public List<AnswerForm> getAnswers() {
        return answers;
    }

    public void setAnswers(List<AnswerForm> answers) {
        this.answers = answers;
    }
}
