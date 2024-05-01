package hello.hellospring.service;

import hello.hellospring.domain.SurveyResult;
import hello.hellospring.repository.SurveyResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SurveyResultService {

    @Autowired
    private SurveyResultRepository surveyResultRepository;

    @Transactional
    public void updateGenreCount(String genre) {
        SurveyResult surveyResult = surveyResultRepository.findByGenre(genre);
        if (surveyResult != null) {
            surveyResult.setCount(surveyResult.getCount() + 1);
            surveyResultRepository.save(surveyResult);
        } else {
            // 새로운 장르일 경우, 새로운 엔터티 생성 후 저장
            surveyResult = new SurveyResult();
            surveyResult.setGenre(genre);
            surveyResult.setCount(1);
            surveyResultRepository.save(surveyResult);
        }

    }
    @Transactional(readOnly = true)
    public int getTotalSurveyCount() {
        Iterable<SurveyResult> allSurveyResults = surveyResultRepository.findAll();
        int totalSurveyCount = 0;
        for (SurveyResult result : allSurveyResults) {
            totalSurveyCount += result.getCount();
        }
        return totalSurveyCount;
    }
}
