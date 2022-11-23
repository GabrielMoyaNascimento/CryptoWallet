package com.crypto.wallet.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.crypto.wallet.entity.Trade;

public interface RepositorioTrade extends JpaRepository<Trade, Long>{
	
	@Query(value ="select t from Trade t where t.id = ?1 ")
	Page<Trade> findById(Long id, Pageable page);
	
	Page<Trade> findAll(Pageable page);
}
