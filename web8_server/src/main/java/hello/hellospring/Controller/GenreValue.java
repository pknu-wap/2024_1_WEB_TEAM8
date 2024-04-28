package hello.hellospring.Controller;

import java.util.List;

public class GenreValue {
    private List<String> popValue;
    private List<String> jazzValue;
    private List<String> hipValue;
    private List<String> rockValue;
    private List<String> rbValue;

    public List<String> getPopValue() {
        return popValue;
    }

    public void setPopValue(List<String> popValue) {
        this.popValue = popValue;
    }

    public List<String> getJazzValue() {
        return jazzValue;
    }

    public void setJazzValue(List<String> jazzValue) {
        this.jazzValue = jazzValue;
    }

    public List<String> getHipValue() {
        return hipValue;
    }

    public void setHipValue(List<String> hipValue) {
        this.hipValue = hipValue;
    }

    public List<String> getRockValue() {
        return rockValue;
    }

    public void setRockValue(List<String> rockValue) {
        this.rockValue = rockValue;
    }

    public List<String> getRbValue() {
        return rbValue;
    }

    public void setRbValue(List<String> rbValue) {
        this.rbValue = rbValue;
    }
}
