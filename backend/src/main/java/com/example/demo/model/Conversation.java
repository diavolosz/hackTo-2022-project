package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class Conversation {

    private final String userid;
    private final String mentorid;
    private final String message;
    private final String timestamp;

    public Conversation(@JsonProperty("userid") String userid,
               @JsonProperty("mentorid") String mentorid,
               @JsonProperty("message") String message,
               @JsonProperty("timestamp") String timestamp) {

        this.userid = userid;
        this.mentorid = mentorid;
        this.message = message;
        this.timestamp = timestamp;
    }

}
