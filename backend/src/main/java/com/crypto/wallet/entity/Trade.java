package com.crypto.wallet.entity;

import lombok.Data;

@Data
public class Trade {
	private Double date;
	private Double price;
	private Double amount;
	private int tid;
	private String type = "compra";
	private Double total = 100.00;
}
