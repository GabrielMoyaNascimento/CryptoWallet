package com.crypto.wallet.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.crypto.wallet.entity.Carteira;
import com.crypto.wallet.exception.BadResourceException;
import com.crypto.wallet.exception.ResourceAlreadyExistsException;
import com.crypto.wallet.exception.ResourceNotFoundException;
import com.crypto.wallet.repository.RepositorioCarteira;

@Service
public class ServicoCarteira {
	@Autowired
	private RepositorioCarteira repositorioCarteira;

	private boolean existsById(Long id) {
		return repositorioCarteira.existsById(id);
	}
	
	public Carteira findById(Long id) throws ResourceNotFoundException{
		Carteira carteira = repositorioCarteira.findById(id).orElse(null);
		if(carteira==null) {
			throw new ResourceNotFoundException("Carteira não encontrada com o id: "+id);
		}else return carteira;
	}
	
	public Page<Carteira> findAll(Pageable pageable){
		return repositorioCarteira.findAll(pageable);
	}
	
	public Page<Carteira> findById(Long id, Pageable page){
		Page<Carteira> carteiras = repositorioCarteira.findById(id, page);
		return carteiras;
	}
	
	public Carteira save(Carteira carteira) throws BadResourceException,ResourceAlreadyExistsException{
		if(!StringUtils.isEmpty(carteira.getNome())) {
			if(carteira.getId() != null && existsById(null)) {
				throw new ResourceAlreadyExistsException("Carteira com id: "+ carteira.getId()+"já existe.");
			}			
			return repositorioCarteira.save(carteira);
		}else {
			BadResourceException exc =  new BadResourceException("Erro ao salvar carteira");
			exc.addErrorMessages("Carteira está vazio ou é nulo");
			throw exc;
		}
	} 
	
	public void update(Carteira carteira) throws BadResourceException, ResourceNotFoundException{
		if(!StringUtils.isEmpty(carteira.getNome())) {
			if(!existsById(carteira.getId())) {
				throw new ResourceNotFoundException("Moeda não encontrado com o id: "+carteira.getId());
			}
			repositorioCarteira.save(carteira);
		}else {
			BadResourceException  exc = new BadResourceException ("Falha ao salvar carteira");
			exc.addErrorMessages("Carteira está nulo ou em branco");
			throw exc;
		}
		
	}
	
	public void deleteById(Long id) throws ResourceNotFoundException{
		if(!existsById(id)) {
			throw new  ResourceNotFoundException("usuario não encontrado com o id: "+id);
		}
		else {
			repositorioCarteira.deleteById(id);
		}
	}
	
	public Long count(){
		return repositorioCarteira.count();
	}

}
