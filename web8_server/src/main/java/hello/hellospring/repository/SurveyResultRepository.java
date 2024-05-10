package hello.hellospring.repository;

import hello.hellospring.domain.SurveyResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SurveyResultRepository extends JpaRepository<SurveyResult, Long> {
    SurveyResult findByGenre(String genre);
}