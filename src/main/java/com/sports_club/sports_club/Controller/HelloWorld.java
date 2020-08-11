package com.sports_club.sports_club.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//@Controller @ResponseBody //api형식이어서 추가. @RestController로 대치가능함
@RestController
public class HelloWorld {
    @GetMapping(value = "/api/helloworld") //mapping해 @RequestMapping(method = RequestMethod.GET) get에 응답하는 어노테이션
    public String HelloWorld(){
        return "HelloWrold";
    }
}
