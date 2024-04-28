package hello.hellospring.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Tendency {
    @Id
    private String genreName;
    private double deviation;

    public String getGenreName() {
        return genreName;
    }

    public void setGenreName(String genreName) {
        this.genreName = genreName;
    }

    public double getDeviation() {
        return deviation;
    }

    public void setDeviation(double deviation) {
        this.deviation = deviation;
    }
}
