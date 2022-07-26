 package com.crypto.wallet.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.crypto.wallet.model.Ticker;

@Service
public class ServicoTicker {

	public Ticker buscarTicker(String acronimoMoeda) {
		String url = "https://www.mercadobitcoin.net/api/"+acronimoMoeda+"/ticker";
		RestTemplate rest = new RestTemplate();
		Ticker ticker = rest.getForObject(url, Ticker.class);
		return ticker;
	}
}

