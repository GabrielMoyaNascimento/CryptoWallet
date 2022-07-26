package com.crypto.wallet.model;

import java.util.List;

import lombok.Data;

@Data
public class Orderbook {
	private List<Double> bids;
	private List<Double> asks;
}
