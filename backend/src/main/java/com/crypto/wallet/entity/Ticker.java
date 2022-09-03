package com.crypto.wallet.entity;

import lombok.Data;

@Data
public class Ticker {
	private Double high;
	private Double low;
	private Double vol;
	private Double last;
	private Double buy;
	private Double sell;
	private int date;
}
