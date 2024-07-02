package com.example.demo.controller;

import com.example.demo.dto.MessageDTO;
import com.example.demo.entity.MessageEntity;
import com.example.demo.service.MessageService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/messages")
@AllArgsConstructor
public class MessageController {
    private final MessageService messageService;

    @PostMapping
    public ResponseEntity<MessageEntity> create(@RequestBody MessageDTO dto) {
        return mappingResponse(messageService.create(dto));
    }

    @GetMapping
    public ResponseEntity<List<MessageEntity>> readAll() {
        return mappingResponseList(messageService.readAll());
    }

    @PutMapping
    public ResponseEntity<MessageEntity> update(@RequestBody MessageEntity message) {
        return mappingResponse(messageService.update(message));
    }

    @DeleteMapping("/{id}")
    public HttpStatus delete(@PathVariable Long id) {
        messageService.delete(id);
        return HttpStatus.OK;
    }

    private ResponseEntity<MessageEntity> mappingResponse(MessageEntity message) {
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    private ResponseEntity<List<MessageEntity>> mappingResponseList(List<MessageEntity> messages) {
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }
}
