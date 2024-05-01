package hello.hellospring.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "survey_result")
public class SurveyResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "genre")
    private String genre;

    @Column(name = "count")
    private int count;

    public void setGenre(String genre) {
    }

    public void setCount(int i) {
    }

    public int getCount() {
        return 0;
    }

    // 생성자, 게터, 세터
}


