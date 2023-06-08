package com.yuv.fullstack.service;

import java.io.Console;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yuv.fullstack.dao.UserRepo;
import com.yuv.fullstack.entity.User;

@Service
public class UserService {

	@Autowired
	private UserRepo userRepo;

	public User createUser(User user) {
		return userRepo.save(user);
	}

	public List<User> createUsers(List<User> users) {
		return userRepo.saveAll(users);
	}

	public User getUserById(int id) {
		return userRepo.findById(id).orElse(null);
	}

	public List<User> getAllUsers() {
		return userRepo.findAll();
	}

	public User updateUser(User user) {
		User oldUser = null;
		Optional<User> tempUser = this.userRepo.findById(user.getId());
		if (tempUser.isPresent()) {
			oldUser = tempUser.get();
			oldUser.setName(user.getName());
			oldUser.setCountry(user.getCountry());
			oldUser.setCity(user.getCity());
			oldUser.setJob(user.getJob());
//			System.out.println(user.getName());
			userRepo.save(oldUser);
			return oldUser;
		}
		 else {
			return new User();
		}
	}

	public User removeUserById(int id) {
		userRepo.deleteById(id);
		return new User();
	}
}
