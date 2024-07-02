package com.example.demo.service;

import com.example.demo.dto.MessageDTO;
import com.example.demo.entity.MessageEntity;
import com.example.demo.repository.MessageRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MessageService {
    private final MessageRepository messageRepository;

    public MessageEntity create(MessageDTO dto) {
        MessageEntity message = MessageEntity.builder()
                .name(dto.getName())
                .email(dto.getEmail())
                .phone(dto.getPhone())
                .text(dto.getText())
                .build();
        return messageRepository.save(message);
    }

    public List<MessageEntity> readAll() {
        return messageRepository.findAll();
    }

    public MessageEntity update(MessageEntity message) {
        return messageRepository.save(message);
    }

    public void delete(Long id) {
        messageRepository.deleteById(id);
    }
}
