package hello.hellospring.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Music {
    @Id
    private Long questionId;
    private String filePath;

    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public String getfilePath() {
        return filePath;
    }

    public void setfilePath(String fileAddress) {
        this.filePath = fileAddress;
    }
}
