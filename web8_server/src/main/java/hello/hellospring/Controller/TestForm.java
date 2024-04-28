package hello.hellospring.Controller;

import java.util.HashMap;
import java.util.Map;

public class TestForm {
    private HashMap<String, String> pop;
    private HashMap<String, String> hip;
    private HashMap<String, String> jazz;
    private HashMap<String, String> rb;
    private HashMap<String, String> rock;

    public HashMap<String, String> getPop() {
        return pop;
    }

    public void setPop(HashMap<String, String> pop) {
        this.pop = pop;
    }

    public HashMap<String, String> getHip() {
        return hip;
    }

    public void setHip(HashMap<String, String> hip) {
        this.hip = hip;
    }

    public HashMap<String, String> getJazz() {
        return jazz;
    }

    public void setJazz(HashMap<String, String> jazz) {
        this.jazz = jazz;
    }

    public HashMap<String, String> getRb() {
        return rb;
    }

    public void setRb(HashMap<String, String> rb) {
        this.rb = rb;
    }

    public HashMap<String, String> getRock() {
        return rock;
    }

    public void setRock(HashMap<String, String> rock) {
        this.rock = rock;
    }
}