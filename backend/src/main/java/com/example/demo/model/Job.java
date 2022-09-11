package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class Job {

    private final UUID id;
    private final String name;
    private final String description;
    private final String postedBy;
    private final String timestamp;

    public Job(@JsonProperty("id") UUID id,
               @JsonProperty("jobname") String name,
               @JsonProperty("jobdescription") String description,
               @JsonProperty("postedby") String postedBy,
               @JsonProperty("timestamp") String timestamp) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.postedBy = postedBy;
        this.timestamp = timestamp;
    }

}
