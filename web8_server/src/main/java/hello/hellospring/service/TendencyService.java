package hello.hellospring.service;

import hello.hellospring.domain.Tendency;
import hello.hellospring.repository.TendencyRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@Transactional
public class TendencyService {
    private final TendencyRepository tendencyRepository;
    @Autowired
    public TendencyService(TendencyRepository tendencyRepository) {
        this.tendencyRepository = tendencyRepository;
    }
    public String save(Tendency tendency) {
        tendencyRepository.save(tendency);
        return tendency.getGenreName();
    }
    public List<Tendency> findTendencies() {
        return tendencyRepository.findAll();
    }
    public Optional<Double> findOne(String genreName) {
        return tendencyRepository.findOneDeviations(genreName);
    }
}
