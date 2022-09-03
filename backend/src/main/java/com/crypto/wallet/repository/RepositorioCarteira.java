package com.crypto.wallet.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.crypto.wallet.entity.Carteira;

public interface RepositorioCarteira extends JpaRepository<Carteira, Long> {
	
	@Query(value ="select a from Carteira a where a.id =?1 ")
	Page<Carteira> findById(Long id, Pageable page);
	
	Page<Carteira> findAll(Pageable page);

}
