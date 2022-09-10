package com.example.demo.api;

import com.example.demo.model.Job;
import com.example.demo.model.User;
import com.example.demo.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/job")
@RestController

public class JobsController {

    private final JobService jobService;

    @Autowired
    public JobsController(JobService jobService){
        this.jobService = jobService;
    }

    @GetMapping
    public List<Job> getAllJobs(){
        return jobService.getAllJob();
    }

    @PostMapping
    public boolean postJob(@NonNull @RequestBody Job job){
        System.out.println("new job: " +  job.getName());
        jobService.postJob(job);
        return true;
    }

}
