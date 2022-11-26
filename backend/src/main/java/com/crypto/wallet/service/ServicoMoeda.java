package com.crypto.wallet.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.crypto.wallet.entity.Carteira;
import com.crypto.wallet.entity.Moeda;
import com.crypto.wallet.exception.BadResourceException;
import com.crypto.wallet.exception.ResourceAlreadyExistsException;
import com.crypto.wallet.exception.ResourceNotFoundException;
import com.crypto.wallet.repository.RepositorioMoeda;


@Service
public class ServicoMoeda {
	@Autowired
	private RepositorioMoeda repositorioMoeda;

	private boolean existsById(Long id) {
		return repositorioMoeda.existsById(id);
	}
	
	public Moeda findById(Long id) throws ResourceNotFoundException{
		Moeda moeda = repositorioMoeda.findById(id).orElse(null);
		if(moeda==null) {
			throw new ResourceNotFoundException("Moeda não encontrada com o id: "+id);
		}else return moeda;
	}
	
	public List<Moeda> findAll(){
		return repositorioMoeda.findAll();
	}
	
//	public Page<Moeda> findById(Long id, Pageable page){
//		Page<Moeda> moedas = repositorioMoeda.findById(id, page);
//		return moedas;
//	}
	
	public Moeda save(Moeda moeda) throws BadResourceException,ResourceAlreadyExistsException{
		if(!StringUtils.isEmpty(moeda.getNome())) {
			if(moeda.getId() != null && existsById(null)) {
				throw new ResourceAlreadyExistsException("Moeda com id: "+ moeda.getId()+"já existe.");
			}			
			return repositorioMoeda.save(moeda);
		}else {
			BadResourceException exc =  new BadResourceException("Erro ao salvar moeda");
			exc.addErrorMessages("Moeda está vazio ou é nulo");
			throw exc;
		}
	} 
	
	public void update(Moeda moeda) throws BadResourceException, ResourceNotFoundException{
		if(!StringUtils.isEmpty(moeda.getNome())) {
			if(!existsById(moeda.getId())) {
				throw new ResourceNotFoundException("Moeda não encontrado com o id: "+moeda.getId());
			}
			repositorioMoeda.save(moeda);
		}else {
			BadResourceException  exc = new BadResourceException ("Falha ao salvar moeda");
			exc.addErrorMessages("Moeda está nulo ou em branco");
			throw exc;
		}
		
	}
	
	public void deleteById(Long id){
		Moeda moeda = repositorioMoeda.findById(id).get();
		repositorioMoeda.delete(moeda);
		
	}
	public Long count(){
		return repositorioMoeda.count();
	}
}
