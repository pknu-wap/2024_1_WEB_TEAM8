package hello.hellospring.Controller;

import hello.hellospring.domain.*;
import hello.hellospring.service.AnswerService;
import hello.hellospring.service.TendencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class AnswerController {

    private int totalSize = 35; // 총 문항 개수
    private HashMap<String, Integer> answerMap = new HashMap<>();
    HashMap<String, String>[] maps;
    private final AnswerService answerService;
    private final TendencyService tendencyService;
    @Autowired // 생성자에 붙이면 스프링 컨테이너에 있는 스프링 빈과 자동으로 연결
    public AnswerController(AnswerService answerService, TendencyService tendencyService) {
        this.answerService = answerService;
        this.tendencyService = tendencyService;
    }
    @PostMapping("/answer")
    @ResponseBody
    public String answerResultFront(@RequestBody TestForm testForm) {
        // 프론트로부터 받아온 답변을 Map 형식으로 저장 (예시) { "pop1" : "2" }
        maps = new HashMap[]{testForm.getHip(), testForm.getPop(),
                testForm.getRb(), testForm.getRock(), testForm.getJazz()};
        for (HashMap<String, String> map : maps) {
            for (Map.Entry<String, String> entry : map.entrySet()) {
                System.out.println(entry.getKey() + " : " + entry.getValue());
            }
        }
        // tendency 저장: 편차 계산
        saveDeviation(getAverage());
        // statistics 저장: 통계 계산
        saveStatistics();
        return "Data received successfully";
    }
    private double getAverage() {

        int maxValue = -1;
        String maxGenre=null;

        int totalValue = 0;
        String genre=null;

        for (HashMap<String, String> map : maps) {
            int total = 0;
            for (Map.Entry<String, String> entry : map.entrySet()) {
                total+=Integer.parseInt(entry.getValue());
                genre = entry.getKey();
            }
            totalValue += total;
            System.out.println(genre + "의 총 점수는 " + total);
            if(maxValue < total) {
                maxValue = total;
                maxGenre = genre;
            }
        }
        System.out.println("가장 많은 점수를 받은 장르는 " + maxGenre + ", 점수는 " + maxValue);
        System.out.println("총 점수는 " + totalValue);
        double average = (double)totalValue / totalSize;
        return average;
    }
    private Integer getTotal(List<String> list) {
        int sum = 0;
        for (int i = 0; i<list.size(); i++) {
            sum += Integer.parseInt(list.get(i));
        }
        return sum;
    }

    public void saveDeviation(double aver) {
        // 누적 합을 위해 지금까지 저장되어 있는 값이 필요
        List<Tendency> tendencies = tendencyService.findTendencies();
        double deviation;
        int i = 0;
        for (HashMap<String, String> map : maps) {
            for (Map.Entry<String, String> answer : map.entrySet()) { // Latinjazz1 : 3
                int score =  Integer.parseInt(answer.getValue());
                deviation = Math.abs(score - aver); // 편차
                System.out.println(answer.getKey());

                double prevDeviation = tendencyService.findOne(answer.getKey()).get();
                Tendency newer = new Tendency();
                newer.setGenreName(answer.getKey());
                newer.setDeviation(deviation + prevDeviation);
                tendencyService.save(newer);
            }
        }
    }



    public void saveStatistics() {
        // 장르 중 가장 max 값을 가진 장르 찾아서 숫자 누적하기 - 예) LatinJazz1
        // 총 사용자도 누적해야함
    }


}
