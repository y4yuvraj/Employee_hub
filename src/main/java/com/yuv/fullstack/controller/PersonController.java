package com.yuv.fullstack.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.yuv.fullstack.entity.Person;
import com.yuv.fullstack.service.PersonService;

@RestController
public class PersonController {

	
	@Autowired
	private PersonService personService;

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/addUser")
	public Person addUser(@RequestBody @Valid Person person) {
		return personService.createUser(person);
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/addUsers")
	public List<Person> addUsers(@RequestBody List<Person> persons) {
		return personService.createUsers(persons);
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/user/{id}")
	public Person getUserById(@PathVariable int id) {
		return personService.getUserById(id);
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/users")
	public List<Person> getAllUsers()
	{
		return personService.getAllUsers();
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/updateUser")
	public Person updateUser(@RequestBody Person person)
	{
		return personService.updateUser(person);
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/user/{id}")
	public String deleteUser(@PathVariable int id)
	{
		return personService.removeUserById(id); 
	}
}
