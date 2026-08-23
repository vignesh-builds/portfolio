package com.vignesh.portfolio_backend.repository;

import com.vignesh.portfolio_backend.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}