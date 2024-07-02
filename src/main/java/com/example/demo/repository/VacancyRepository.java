package com.example.demo.repository;

import com.example.demo.entity.VacancyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VacancyRepository extends JpaRepository<VacancyEntity, Long> {
}
