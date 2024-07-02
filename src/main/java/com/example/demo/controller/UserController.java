package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
import com.example.demo.entity.UserEntity;
import com.example.demo.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public ResponseEntity<List<UserEntity>> readAll() {
        try {
            List<UserEntity> users = userService.readAll();
            return mappingResponseListUser(users);
        } catch (Exception e) {
            List<UserEntity> errorList = new ArrayList<>();
            errorList.add(new UserEntity("Произошла ошибка при получении списка пользователей."));
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorList);
        }
    }

    @PostMapping
    public ResponseEntity<UserEntity> create(@RequestBody UserDTO dto) {
        if (!areRequiredFieldsFilled(dto)) {
            UserEntity errorUser = new UserEntity("Не все обязательные поля были заполнены.");
            return ResponseEntity.badRequest().body(errorUser);
        }

        return mappingResponseUser(userService.create(dto));
    }

    @PutMapping
    public ResponseEntity<UserEntity> update(@RequestBody UserEntity user) {
        if (!areRequiredFieldsFilled(user)) {
            UserEntity errorUser = new UserEntity("Не все поля были заполнены.");
            return ResponseEntity.badRequest().body(errorUser);
        }

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

    private boolean areRequiredFieldsFilled(UserDTO dto) {
        return dto.getUsername() != null && !dto.getUsername().isEmpty() &&
                dto.getEmail() != null && !dto.getEmail().isEmpty() &&
                dto.getPassword() != null && !dto.getPassword().isEmpty() &&
                dto.getRole() != null && !dto.getRole().isEmpty();
    }

    private boolean areRequiredFieldsFilled(UserEntity user) {
        return user.getId() != null &&
                user.getUsername() != null && !user.getUsername().isEmpty() &&
                user.getEmail() != null && !user.getEmail().isEmpty() &&
                user.getPassword() != null && !user.getPassword().isEmpty() &&
                user.getRole() != null && !user.getRole().isEmpty();
    }
}