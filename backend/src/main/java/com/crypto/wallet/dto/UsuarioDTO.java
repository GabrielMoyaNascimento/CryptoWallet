package com.crypto.wallet.dto;

import java.util.Date;

import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;

import com.crypto.wallet.model.Usuario;

import lombok.Data;

@Data
public class UsuarioDTO {
	private String nome;
	private String email;
	private String cpf;
	private String observacao;
	private Date dataCadastro;
	
	public UsuarioDTO converter(Usuario usuario) {
		BeanUtils.copyProperties(usuario, this);
		return this;
	}
	
	public Page<UsuarioDTO> converterListaUsuarioDTO(Page<Usuario> pageUsuario){
		Page<UsuarioDTO> listaUsuarioDTO = pageUsuario.map(this::converter);
		return listaUsuarioDTO;
	}
}
