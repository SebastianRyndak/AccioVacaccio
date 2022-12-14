package com.codecool.travelhelper.userPage.webclients;

import com.codecool.travelhelper.aws.database.models.MessageTable;
import com.codecool.travelhelper.aws.database.models.MyUserTable;
import com.codecool.travelhelper.aws.database.repositories.MessageRepository;
import com.codecool.travelhelper.aws.database.repositories.UserRepository;
import com.codecool.travelhelper.login_registration_logout.webclients.LoginImpl;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Component
public class MailBoxImpl {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LoginImpl loginImpl;

    public void addNewMessage(String messageData){
        Long userId = loginImpl.getCurrentUserId();
        MyUserTable fromUser = userRepository.findAllById(userId);

        JsonParser jsonParser = new JsonParser();
        JsonObject commentJsonObject = (JsonObject)jsonParser.parse(messageData);

        String messageText = commentJsonObject.get("messageText").getAsString();
        Long toUserId = Long.parseLong(commentJsonObject.get("toUserId").getAsString());

        MyUserTable toUser = userRepository.findAllById(toUserId);


        messageRepository.save(new MessageTable(messageText, fromUser, toUser));
    }

    public List<MyUserTable> getAllPenFriends(){
        List<MyUserTable> allPenFriends = new ArrayList<>();
        Long userId = loginImpl.getCurrentUserId();
        MyUserTable me = userRepository.findAllById(userId);

        List<MessageTable> allMyMails = messageRepository.findAllByFromUserOrToUser(me, me);


        for (MessageTable mail : allMyMails){
            if (!allPenFriends.contains(mail.getToUser())){
                allPenFriends.add(mail.getToUser());
            }
            if (!allPenFriends.contains(mail.getFromUser())){
                allPenFriends.add(mail.getFromUser());
            }
        }

        return allPenFriends;
    }

    public void newChat(String toUserId) {
        Long userId = loginImpl.getCurrentUserId();
        MyUserTable fromUser = userRepository.findAllById(userId);
        MyUserTable toUser = userRepository.findAllById(Long.parseLong(toUserId));

        messageRepository.save(new MessageTable("Hello!", fromUser, toUser));
    }


    public List<MessageTable> getMessages(String toUserId){
        List<MessageTable> allMessages = new ArrayList<>();

        Long userId = loginImpl.getCurrentUserId();
        MyUserTable fromUser = userRepository.findAllById(userId);
        MyUserTable toUser = userRepository.findAllById(Long.parseLong(toUserId));

        List<MessageTable> messagesToMe = messageRepository.findAllByFromUserAndToUser(fromUser, toUser);
        List<MessageTable> messagesFromMe = messageRepository.findAllByFromUserAndToUser(toUser, fromUser);

        allMessages.addAll(messagesToMe);
        allMessages.addAll(messagesFromMe);

        Collections.sort(allMessages);
        return allMessages;
    }
}
