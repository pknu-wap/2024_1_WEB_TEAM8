package hello.hellospring.Controller;

import hello.hellospring.domain.*;
import hello.hellospring.service.AnswerService;
import hello.hellospring.service.TendencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class AnswerController {

    private static final int TOTAL_SIZE = 60; // 총 문항 개수
    HashMap<String, String>[] answerMap; // 문항에 대한 답변을 map으로 저장함. answerMap[5] = {hip, pop, rb, rock, jazz}
    private final AnswerService answerService;
    private final TendencyService tendencyService;
    @Autowired // 생성자에 붙이면 스프링 컨테이너에 있는 스프링 빈과 자동으로 연결
    public AnswerController(AnswerService answerService, TendencyService tendencyService) {
        this.answerService = answerService;
        this.tendencyService = tendencyService;
    }

    @GetMapping("/")
    @ResponseBody
    public String home() {
        return "home";
    }
    @PostMapping("/answer")
    @ResponseBody
    public String answerResultFront(@RequestBody AnswerForm answerForm) { // front로부터 받은 사용자 답변 처리
        answerMap = new HashMap[]{answerForm.getHip(), answerForm.getPop(),
                answerForm.getRb(), answerForm.getRock(), answerForm.getJazz()};
        for (HashMap<String, String> map : answerMap) {
            for (Map.Entry<String, String> entry : map.entrySet()) {
                // key는 장르 이름, value는 답변 번호
                System.out.println(entry.getKey() + " : " + entry.getValue());
            }
        }
        // tendency 저장: 편차 계산
        saveDeviation(getAverage());
        return "Data received successfully";
    }
    private double getAverage() { // 편차 계산을 위한 평균 계산

        int maxValue = -1;
        String maxGenre = null;

        int totalValue = 0;
        String currentGenre = null;

        for (HashMap<String, String> map : answerMap) {
            int totalGenre = 0;
            for (Map.Entry<String, String> entry : map.entrySet()) { // 각 장르마다 답변의 합을 구함
                totalGenre+=Integer.parseInt(entry.getValue());
                currentGenre = entry.getKey();
            }
            totalValue += totalGenre;
            System.out.println(currentGenre + "의 총 점수는 " + totalGenre);
            if(maxValue < totalGenre) { // 각 장르 중 가장 많은 점수를 받은 장르 찾기
                maxValue = totalGenre;
                maxGenre = currentGenre;
            }
        }
        System.out.println("가장 많은 점수를 받은 장르는 " + maxGenre + ", 점수는 " + maxValue);
        System.out.println("총 점수는 " + totalValue);
        double average = (double)totalValue / TOTAL_SIZE;
        return average;
    }

    public void saveDeviation(double aver) { // 편차 누적
        double deviation;
        for (HashMap<String, String> map : answerMap) {
            for (Map.Entry<String, String> answer : map.entrySet()) { // Latinjazz1 : 3
                int score =  Integer.parseInt(answer.getValue());
                deviation = Math.abs(score - aver); // 편차
                System.out.println(answer.getKey());
                // 누적 합을 위해 지금까지 저장되어 있는 값이 필요: db에서 findOne으로 이전 누적값 찾아옴
                double prevDeviation = tendencyService.findOne(answer.getKey()).get();
                Tendency newer = new Tendency();
                newer.setGenreName(answer.getKey());
                newer.setDeviation(deviation + prevDeviation);
                tendencyService.save(newer);
            }
        }
    }
    @GetMapping("/tendency")
    public String showTendencyList(Model model) {
        List<Tendency> list = tendencyService.findTendencies();
        model.addAttribute("list", list);
        return "tendency-list";
    }
}
