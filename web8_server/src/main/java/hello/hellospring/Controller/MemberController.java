package hello.hellospring.Controller;
import hello.hellospring.repository.MemberRepository;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import hello.hellospring.domain.Member;
import hello.hellospring.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller // 스프링 컨테이너가 관리
public class MemberController {
    // memberService를 여러 곳에서 생성해서 쓰는 문제를 없애기 위해 스프링 컨테이너에 등록하고 쓰는 것이 좋다.
    // 스프링 컨테이너에 등록하면 딱 하나만 등록된다.
    // 애노테이션 결어두지 않았다면 순수한 자바 클래스, 스프링이 알수없고 관리하지 않음
    private final MemberService memberService;

    @Autowired // 생성자에 붙이면 스프링 컨테이너에 있는 스프링 빈과  자동으로 연결해줌
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/members/new")
    public String createForm() {
        return "members/createMemberForm";
    }
    @PostMapping("/members/new")
    public String create(MemberForm form) {
        Member member = new Member();
        member.setName(form.getName());
        memberService.join(member);
        System.out.println(member.getName());
        return "redirect:/";
    }
    @GetMapping("/members")
    @ResponseBody
    public List<Member> list() {
        List<Member> members = memberService.findMembers();
        return members;
    }

}

