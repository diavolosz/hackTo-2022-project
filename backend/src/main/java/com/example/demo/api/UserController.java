package com.example.demo.api;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;


@RequestMapping("api/v1/user")
@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public boolean login(){
        return true;
    }

    @PostMapping
    public void addUser(@NonNull @RequestBody User user){
        System.out.println("new user: " +  user.getName());
        userService.addUser(user);
    }
}
