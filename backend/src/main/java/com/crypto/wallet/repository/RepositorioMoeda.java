package com.crypto.wallet.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.crypto.wallet.model.Moeda;

public interface RepositorioMoeda extends JpaRepository<Moeda, Long>{
	
	@Query(value ="select a from Moeda a where a.id = %?1% ")
	Page<Moeda> findById(Long id, Pageable page);
	
	Page<Moeda> findAll(Pageable page);
}
