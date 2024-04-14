package com.example.demo.service;

import com.example.demo.dto.ProductDTO;
import com.example.demo.entity.ProductEntity;
import com.example.demo.repository.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    private final CategoryService categoryService;

    public ProductEntity create(ProductDTO dto) {
        ProductEntity product = ProductEntity.builder()
                .name(dto.getName())
                .amount(dto.getAmount())
                .category(categoryService.readById(dto.getCategoryId()))
                .build();
        return productRepository.save(product);
    }

    public List<ProductEntity> readAll() {
        return productRepository.findAll();
    }

    public List<ProductEntity> readByCategoryId(Long id) {
        return productRepository.findByCategoryId(id);
    }

    public ProductEntity update(ProductEntity product) {
        return productRepository.save(product);
    }

    public void delete(Long id) {
        productRepository.deleteById(id);
    }
}
