package hello.hellospring.Controller;

import hello.hellospring.service.SurveyResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SurveyController {

    @Autowired
    private SurveyResultService surveyResultService;

    @PostMapping("/survey")
    public void submitSurveyResult(@RequestBody String genre) {
        surveyResultService.updateGenreCount(genre);
    }
}
