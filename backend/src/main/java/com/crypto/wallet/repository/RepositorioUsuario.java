package com.crypto.wallet.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.crypto.wallet.entity.Usuario;

public interface RepositorioUsuario extends JpaRepository<Usuario, Long>{
	
	@Query(value ="select a from Usuario a where a.cpf=?1 ")
	Page<Usuario> findByCpf(String cpf, Pageable page);
	
	Page<Usuario> findAll(Pageable page);

}
