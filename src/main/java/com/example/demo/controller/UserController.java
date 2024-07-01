package com.example.demo.controller;
import com.example.demo.dto.UserDTO;
import com.example.demo.entity.ProductEntity;
import com.example.demo.entity.UserEntity;
import com.example.demo.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

//    @GetMapping("/")
//    public ResponseEntity<String> getUsers() {
//        try {
//            return ResponseEntity.ok("Сервер работает");
//        } catch (Exception e) {
//            return ResponseEntity.badRequest().body("Произошла ошибка");
//        }
//    }

    @GetMapping
    public ResponseEntity<List<UserEntity>> readAll() {
        return mappingResponseListUser(userService.readAll());
    }

    @PostMapping
    public ResponseEntity<UserEntity> create(@RequestBody UserDTO dto) {
        return mappingResponseUser(userService.create(dto));
    }

    @PutMapping
    public ResponseEntity<UserEntity> update(@RequestBody UserEntity user) {
        return mappingResponseUser(userService.update(user));
    }

    @DeleteMapping("/{id}")
    public HttpStatus delete(@PathVariable Long id) {
        userService.delete(id);
        return HttpStatus.OK;
    }

    private ResponseEntity<UserEntity> mappingResponseUser(UserEntity user) {
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    private ResponseEntity<List<UserEntity>> mappingResponseListUser(List<UserEntity> users) {
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
}