package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class User {

    private final UUID id;
    private final String name;
    private final String type;
    private final String password;
    private final String phone;
    private final String email;
    private final String resume;

    public User(@JsonProperty("id") UUID id,
                @JsonProperty("username") String name,
                @JsonProperty("password") String password,
                @JsonProperty("usertype") String type,
                @JsonProperty("phone") String phone,
                @JsonProperty("email") String email,
                @JsonProperty("resume") String resume) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.password = password;
        this.phone = phone;
        this.email = email;
        this.resume = resume;
    }

}
