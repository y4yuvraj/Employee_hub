package com.yuv.fullstack.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yuv.fullstack.dao.PersonRepo;
import com.yuv.fullstack.entity.Person;

@Service
public class PersonService {

	@Autowired
	private PersonRepo personRepo;

	public Person createUser(Person person) {
		return personRepo.save(person);
	}

	public List<Person> createUsers(List<Person> persons) {
		return personRepo.saveAll(persons);
	}

	public Person getUserById(int id) {
		return personRepo.findById(id).orElse(null);
	}

	public List<Person> getAllUsers() {
		return personRepo.findAll();
	}

	public Person updateUser(Person person) {
		Person oldUser = null;
		Optional<Person> tempUser = this.personRepo.findById(person.getId());
		if (tempUser.isPresent()) {
			oldUser = tempUser.get();
			oldUser.setName(person.getName());
			oldUser.setCountry(person.getCountry());
			oldUser.setCity(person.getCity());
			oldUser.setJob(person.getJob());
//			System.out.println(user.getName());
			personRepo.save(oldUser);
			return oldUser;
		}
		 else {
			return new Person();
		}
	} 

	public String removeUserById(int id) {
		personRepo.deleteById(id);
		return "user deleted";
	}
}
