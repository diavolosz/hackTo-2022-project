package com.example.demo.dao;

import com.example.demo.model.Job;
import com.example.demo.model.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface JobDao {


    int insertJob(UUID id, Job job);

    default int insertJob(Job job){
        UUID id = UUID.randomUUID();
        return insertJob(id,job);
    }

    List<Job> selectAllJob ();

    Optional<Job> selectJobById(UUID id);

}
