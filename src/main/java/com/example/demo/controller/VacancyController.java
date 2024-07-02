package com.example.demo.controller;

import com.example.demo.dto.VacancyDTO;
import com.example.demo.entity.VacancyEntity;
import com.example.demo.service.VacancyService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vacancies")
@AllArgsConstructor
public class VacancyController {

    private final VacancyService vacancyService;

    @PostMapping
    public ResponseEntity<VacancyEntity> create(@RequestBody VacancyDTO dto) {
        return mappingResponse(vacancyService.create(dto));
    }

    @GetMapping
    public ResponseEntity<List<VacancyEntity>> readAll() {
        return mappingResponseList(vacancyService.readAll());
    }

    @PutMapping
    public ResponseEntity<VacancyEntity> update(@RequestBody VacancyEntity vacancy) {
        return mappingResponse(vacancyService.update(vacancy));
    }

    @DeleteMapping("/{id}")
    public HttpStatus delete(@PathVariable Long id) {
        vacancyService.delete(id);
        return HttpStatus.OK;
    }

    private ResponseEntity<VacancyEntity> mappingResponse(VacancyEntity vacancy) {
        return new ResponseEntity<>(vacancy, HttpStatus.OK);
    }

    private ResponseEntity<List<VacancyEntity>> mappingResponseList(List<VacancyEntity> vacancies) {
        return new ResponseEntity<>(vacancies, HttpStatus.OK);
    }
}
