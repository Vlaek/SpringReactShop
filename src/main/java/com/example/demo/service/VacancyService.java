package com.example.demo.service;

import com.example.demo.dto.VacancyDTO;
import com.example.demo.entity.VacancyEntity;
import com.example.demo.repository.VacancyRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class VacancyService {

    private final VacancyRepository vacancyRepository;

    public VacancyEntity create(VacancyDTO dto) {
        VacancyEntity vacancy = VacancyEntity.builder()
                .name(dto.getName())
                .level(dto.getLevel())
                .category(dto.getCategory())
                .salary(dto.getSalary())
                .build();
        return vacancyRepository.save(vacancy);
    }

    public List<VacancyEntity> readAll() {
        return vacancyRepository.findAll();
    }

    public VacancyEntity update(VacancyEntity vacancy) {
        return vacancyRepository.save(vacancy);
    }

    public void delete(Long id) {
        vacancyRepository.deleteById(id);
    }
}
