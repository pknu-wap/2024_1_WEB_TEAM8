package hello.hellospring.Controller;

import hello.hellospring.domain.GenreName;
import hello.hellospring.domain.GenreValue;

public class AnswerForm {
    GenreName genreName;
    GenreValue genreValue;

    public GenreName getGenreName() {
        return genreName;
    }

    public void setGenreName(GenreName genreName) {
        this.genreName = genreName;
    }

    public GenreValue getGenreValue() {
        return genreValue;
    }

    public void setGenreValue(GenreValue genreValue) {
        this.genreValue = genreValue;
    }
}
