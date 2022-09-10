package com.example.demo.service;

import com.example.demo.dao.JobDao;
import com.example.demo.model.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class JobService {

    private final JobDao jobDao;

    @Autowired
    public JobService(@Qualifier("fakeJobDao") JobDao jobDao) {
        this.jobDao = jobDao;
        populateSomeRandomJobs();

    }

    private void populateSomeRandomJobs(){
        for(int i= 0; i< 5; i++){
            UUID id = UUID.randomUUID();
            Job j = new Job(id,"helper", "dollarama","sayon","10-dec-2022");
            postJob(j);
        }
    }

    public int postJob(Job job){
        return jobDao.insertJob(job);
    }

    public List<Job> getAllJob(){
        return jobDao.selectAllJob();
    }
}

