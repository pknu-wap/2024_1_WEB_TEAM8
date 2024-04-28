package hello.hellospring.Controller;

import java.util.List;

public class GenreName {
    private List<String> popGenre;
    private List<String> jazzGenre;
    private List<String> hipGenre;
    private List<String> rockGenre;
    private List<String> rbGenre;

    public List<String> getPopGenre() {
        return popGenre;
    }

    public void setPopGenre(List<String> popGenre) {
        this.popGenre = popGenre;
    }

    public List<String> getJazzGenre() {
        return jazzGenre;
    }

    public void setJazzGenre(List<String> jazzGenre) {
        this.jazzGenre = jazzGenre;
    }

    public List<String> getHipGenre() {
        return hipGenre;
    }

    public void setHipGenre(List<String> hipGenre) {
        this.hipGenre = hipGenre;
    }

    public List<String> getRockGenre() {
        return rockGenre;
    }

    public void setRockGenre(List<String> rockGenre) {
        this.rockGenre = rockGenre;
    }

    public List<String> getRbGenre() {
        return rbGenre;
    }

    public void setRbGenre(List<String> rbGenre) {
        this.rbGenre = rbGenre;
    }
}
