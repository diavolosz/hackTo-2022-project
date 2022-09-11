package com.example.demo.service;

import com.example.demo.dao.ConversationDao;
import com.example.demo.dao.JobDao;
import com.example.demo.model.Conversation;
import com.example.demo.model.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ConversationService {


    private final ConversationDao conversationDao;

    @Autowired
    public ConversationService(@Qualifier("fakeConversationDao")  ConversationDao conversationDao) {
        this.conversationDao = conversationDao;
        populateSomeRandomConversations();
    }

    private void populateSomeRandomConversations(){
       sentMessage(new Conversation("binit","micheal", "hi, how are you?" ,""));
        sentMessage(new Conversation("micheal","binit", "I am fine, thank you!" ,""));
        sentMessage(new Conversation("binit","micheal", "Have you completed workshop" ,""));
        sentMessage(new Conversation("micheal","binit", "yes, I aced it" ,""));
}

    public int sentMessage(Conversation conv){
        return conversationDao.sendMessage(conv);
    }

    public List<Conversation> getAllConv(){
        return conversationDao.selectAllConversation();
    }

    public List<Conversation> getAllConvById(UUID id){
        return conversationDao.selectAllConversationById(id);
    }
}
