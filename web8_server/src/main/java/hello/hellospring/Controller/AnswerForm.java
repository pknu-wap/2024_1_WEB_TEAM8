package hello.hellospring.Controller;

/*
front에서 받는 데이터 형식, 변수명 맞추기
 */
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
