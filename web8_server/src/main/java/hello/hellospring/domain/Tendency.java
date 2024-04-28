package hello.hellospring.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Tendency {
    @Id
    private Long questionId;
    private double deviation;

    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public double getDeviation() {
        return deviation;
    }

    public void setDeviation(double deviation) {
        this.deviation = deviation;
    }
}
