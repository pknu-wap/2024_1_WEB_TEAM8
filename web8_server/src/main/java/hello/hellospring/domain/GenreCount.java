package hello.hellospring.domain;

import javax.persistence.*;

@Entity
@Table(name = "survey_result") // survey_result 테이블과 매핑
public class GenreCount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String genre;
    private int count;

    public void setGenre(String genre) {
    }

    public void setCount(int i) {
    }

    public int getCount() {
        return count;
    }

    // 생성자, getter, setter
}
