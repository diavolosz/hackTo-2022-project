package com.example.demo.dao;

import com.example.demo.model.Conversation;
import com.example.demo.model.Job;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ConversationDao {

    int sendMessage(Conversation conv);

    List<Conversation> selectAllConversation ();

    List<Conversation> selectAllConversationById(UUID id);
}
