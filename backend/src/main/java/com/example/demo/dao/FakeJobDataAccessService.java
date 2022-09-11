package com.example.demo.dao;

import com.example.demo.model.Job;
import com.example.demo.model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("fakeJobDao")
public class FakeJobDataAccessService implements JobDao {
    private static List<Job> JobDB = new ArrayList<>();

    @Override
    public int insertJob(UUID id, Job job) {
        JobDB.add(new Job(id,
                job.getName(),
                job.getDescription(),
                job.getPostedBy(),
                Long.toString(System.currentTimeMillis())));
        return 1;
    }

    @Override
    public List<Job> selectAllJob() {
        return JobDB;
    }

    @Override
    public Optional<Job> selectJobById(UUID id) {
        return JobDB.stream()
                .filter(Job -> Job.getId().equals(id))
                .findFirst();
    }



}
