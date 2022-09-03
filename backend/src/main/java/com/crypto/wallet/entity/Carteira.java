package com.crypto.wallet.entity;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import lombok.Data;

@Entity
@Table(name = "carteira")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Data
public class Carteira {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String nome;
	private int usuario;
	private boolean ativo;
	private Timestamp dataCadastro;
}
