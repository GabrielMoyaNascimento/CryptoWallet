package com.crypto.wallet.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.crypto.wallet.model.Ticker;

@Service
public class ServicoOrderbook {
	
	public Ticker buscarOrderbook(String acronimoMoeda) {
		String url = "https://www.mercadobitcoin.net/api/"+acronimoMoeda+"/orderbook";
		RestTemplate rest = new RestTemplate();
		Ticker ticker = rest.getForObject(url, Ticker.class);
		return ticker;
	}
	
}

