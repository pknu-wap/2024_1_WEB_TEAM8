package hello.hellospring.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Tendency {
    @Id
    private Long questionId;
    private String totalDeviation;

    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public String getTotalDeviation() {
        return totalDeviation;
    }

    public void setTotalDeviation(String totalDeviation) {
        this.totalDeviation = totalDeviation;
    }
}
