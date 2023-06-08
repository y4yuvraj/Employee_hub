package com.yuv.fullstack.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.yuv.fullstack.entity.User;
import com.yuv.fullstack.service.UserService;

@RestController
public class UserController {

	
	@Autowired
	private UserService userService;

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/addUser")
	public User addUser(@RequestBody User user) {
		return userService.createUser(user);
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/addUsers")
	public List<User> addUsers(@RequestBody List<User> users) {
		return userService.createUsers(users);
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/user/{id}")
	public User getUserById(@PathVariable int id) {
		return userService.getUserById(id);
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/users")
	public List<User> getAllUsers()
	{
		return userService.getAllUsers();
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/updateUser")
	public User updateUser(@RequestBody User user)
	{
		return userService.updateUser(user);
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/user/{id}")
	public User deleteUser(@PathVariable int id)
	{
		return userService.removeUserById(id); 
	}
}
