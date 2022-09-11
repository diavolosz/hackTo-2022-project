package com.example.demo.dao;

import com.example.demo.model.Conversation;
import com.example.demo.model.Job;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static java.util.stream.Collectors.toList;

@Repository("fakeConversationDao")
public class FakeConvDataAccessService implements ConversationDao {
    private static List<Conversation> ConvDB = new ArrayList<>();

    @Override
    public int sendMessage(Conversation conv) {
        ConvDB.add(new Conversation(conv.getUserid(),
                conv.getMentorid(),
                conv.getMessage(),
                Long.toString(System.currentTimeMillis())));
        return 1;
    }

    @Override
    public List<Conversation> selectAllConversation() {
        return ConvDB;
    }

    @Override
    public List<Conversation> selectAllConversationById(UUID id) {
        return ConvDB.stream()
                .filter(Conv -> Conv.getUserid().equals(id))
                .collect(toList());
    }
}
