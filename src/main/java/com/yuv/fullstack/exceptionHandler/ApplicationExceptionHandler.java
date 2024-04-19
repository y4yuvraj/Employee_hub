package com.yuv.fullstack.exceptionHandler;

import java.util.ArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;


@RestControllerAdvice
public class ApplicationExceptionHandler {
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(MethodArgumentNotValidException.class)
	private ArrayList<String> methodArgumentNotValidExceptionHandler(MethodArgumentNotValidException ex) {
//		System.out.println(ex.getMessage());
		ArrayList<String> list= new ArrayList<>();
		ex.getBindingResult().getFieldErrors().forEach(error->{
			list.add(error.getField()+" "+error.getDefaultMessage());
		});
		return list;
	}

}
