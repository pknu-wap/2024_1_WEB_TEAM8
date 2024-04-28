package hello.hellospring.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
public class Answer {

    @Id
    private String genreName;
    private int genreValue;

    public String getGenreName() {
        return genreName;
    }

    public void setGenreName(String genreName) {
        this.genreName = genreName;
    }

    public int getGenreValue() {
        return genreValue;
    }

    public void setGenreValue(int genreValue) {
        this.genreValue = genreValue;
    }
}
