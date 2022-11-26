package com.crypto.wallet.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.crypto.wallet.entity.Carteira;
import com.crypto.wallet.exception.BadResourceException;
import com.crypto.wallet.exception.ResourceAlreadyExistsException;
import com.crypto.wallet.exception.ResourceNotFoundException;
import com.crypto.wallet.service.ServicoCarteira;

@RestController
@RequestMapping("/api")
public class ControleCarteira {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private ServicoCarteira servicoCarteira;

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping(value = "/carteira")
	public List<Carteira> findAll() {
		return servicoCarteira.findAll();		
	}
	
	
//	public ResponseEntity<Page<Carteira>> findAll(Pageable pageable){
//		return ResponseEntity.ok(servicoCarteira.findAll(pageable));
//	}
//	
	
	
//	@GetMapping(value = "/carteira/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
//	@CrossOrigin(origins = "http://localhost:3000")
//	public ResponseEntity<Carteira> findCarteiraById(@PathVariable long id) {
//		try {
//			Carteira carteira = servicoCarteira.findById(id);
//			return ResponseEntity.ok(carteira);
//		} catch (ResourceNotFoundException ex) {
//			logger.error(ex.getMessage());
//			throw new ResponseStatusException(HttpStatus.NOT_FOUND, ex.getMessage(), ex);
//		}
//	}
	
	@PostMapping(value = "/carteira")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<Carteira> addCarteira(@RequestBody Carteira carteira) throws URISyntaxException {
		try {
			Carteira novaCarteira = servicoCarteira.save(carteira);
			return ResponseEntity.created(new URI("/api/usuario/" + novaCarteira.getId())).body(novaCarteira);
		} catch (ResourceAlreadyExistsException ex) {
			logger.error(ex.getMessage());
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		} catch (BadResourceException ex) {
			logger.error(ex.getMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping(value = "/carteira/{id}")
	public ResponseEntity<Carteira> updateCarteira(@RequestBody Carteira carteira, @PathVariable long id) {
		try {
			carteira.setId(id);
			servicoCarteira.update(carteira);
			return ResponseEntity.ok().build();
		} catch (ResourceNotFoundException ex) {
			logger.error(ex.getMessage());
			return ResponseEntity.notFound().build();
		} catch (BadResourceException ex) {
			logger.error(ex.getMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping(path = "/carteira/{id}")
	public ResponseEntity<Carteira> deleteCarteiraById(@PathVariable("id") Long id) {
			servicoCarteira.deleteById(id);
			return ResponseEntity.ok().build();
	}
}
