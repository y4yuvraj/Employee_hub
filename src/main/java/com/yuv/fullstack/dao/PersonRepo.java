package com.yuv.fullstack.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yuv.fullstack.entity.Person;

public interface PersonRepo extends JpaRepository<Person, Integer > {

}
