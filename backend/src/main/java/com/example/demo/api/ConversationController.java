package com.example.demo.api;

import com.example.demo.model.Conversation;
import com.example.demo.model.Job;
import com.example.demo.service.ConversationService;
import com.example.demo.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("api/v1/conversation")
@RestController

public class ConversationController {

    private final ConversationService conversationService;

    @Autowired
    public ConversationController(ConversationService conversationService){
        this.conversationService = conversationService;
    }

    @GetMapping
    public List<Conversation> getAllConverstation(){
        return conversationService.getAllConv();
    }

    @GetMapping(path = "{id}")
    public List<Conversation> getAllConverstationById(@PathVariable("id") UUID id){
        return conversationService.getAllConvById(id);
    }

    @PostMapping
    public boolean sendMessage(@NonNull @RequestBody Conversation conv){
        System.out.println("new conv: " +  conv.getMessage());
        conversationService.sentMessage(conv);
        return true;
    }

}
