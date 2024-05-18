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
    HashMap<String, String>[] maps;
    HashMap<String, Map> answerMap = new HashMap<>();
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
    public String answerResultFront(@RequestBody AnswerForm answerForm) {
        // answerMap = { "hip" : Hashmap <String, String> hip , "pop" : Hashmap <String, String> pop , ... }
        // answerMap의 키는 장위 장르 이름, 밸류는 각 장르별 답변 모음 (맵)
        // 상위장르 이름(hip,pop,rb,jazz,rock)이 필요하면 이 방식으로 사용, 
        /*
        answerMap.put("hip", answerForm.getHip());
        answerMap.put("pop", answerForm.getPop());
        answerMap.put("rb", answerForm.getRb());
        answerMap.put("jazz", answerForm.getJazz());
        answerMap.put("rock", answerForm.getRock());
        for (Map.Entry<String, Map> entry : answerMap.entrySet()) {
            System.out.println(entry.getKey() + "장르에 대한 답변";
            HashMap<String, String> answers = (HashMap<String, String>) entry.getValue();
            for (Map.Entry<String, String> entry2 : answers.entrySet()) {
                System.out.println(entry2.getKey() + " : " + entry2.getValue());
            }
        }
        */
        // 상위장르 이름 필요 없으면 이 방식 사용
        // 프론트로부터 받아온 답변을 Map 형식으로 저장 (예시) { "pop1" : "2" }
        maps = new HashMap[]{answerForm.getHip(), answerForm.getPop(),
                answerForm.getRb(), answerForm.getRock(), answerForm.getJazz()};
        for (HashMap<String, String> map : maps) {
            for (Map.Entry<String, String> entry : map.entrySet()) {
                System.out.println(entry.getKey() + " : " + entry.getValue());
            }
        }
        // tendency 저장: 편차 계산
        saveDeviation(getAverage());
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
        double average = (double)totalValue / TOTAL_SIZE;
        return average;
    }
    private Integer getTotal(List<String> list) {
        int sum = 0;
        for (int i = 0; i<list.size(); i++) {
            sum += Integer.parseInt(list.get(i));
        }
        return sum;
    }

    public void saveDeviation(double aver) { // 편차 누적
        double deviation;
        for (HashMap<String, String> map : maps) {
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
