package com.crypto.wallet.entity;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="usuario")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String nome;
	private String senha;
	private String cpf;
	private String email;
	private String telefone;
	private boolean admin;
	private boolean ativo;
	private Timestamp dataCadastro;
	
	
}
