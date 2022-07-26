package com.crypto.wallet.model;

import lombok.Data;

@Data
public class Trade {
	private Double date;
	private Double price;
	private Double amount;
	private int tid;
	private String type;
}
