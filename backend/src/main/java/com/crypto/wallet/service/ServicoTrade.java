package com.crypto.wallet.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.crypto.wallet.entity.Trade;

@Service
public class ServicoTrade {
	public Trade buscarTrades(String acronimoMoeda) {
		String url = "https://www.mercadobitcoin.net/api/"+acronimoMoeda+"/trades";
		RestTemplate rest = new RestTemplate();
		Trade trade = rest.getForObject(url, Trade.class);
		return trade;
	}
}

