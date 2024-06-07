package hello.hellospring.domain;

import java.util.HashMap;
import java.util.Map;

public enum MusicCode {
    Pop1(1), Pop2(2), Hip1(3), Hip2(4), Rock1(5), Rock2(6), RB1(7), RB2(8), Jazz1(9), Jazz2(10);
    private final int value;
    private static final Map<Integer, String> codeToGenre = new HashMap<>();
    MusicCode(int i) {
        this.value = i;
    }
    public int getValue() {
        return value;
    }
    public static MusicCode getMusicName(int value) {
        for (MusicCode code : values()) {
            if (code.getValue() == value) {
                return code;
            }
        }
        throw new IllegalArgumentException("Invalid value: " + value);
    }
}
