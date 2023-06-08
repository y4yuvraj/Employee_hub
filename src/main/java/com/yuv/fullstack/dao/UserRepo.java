package com.yuv.fullstack.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yuv.fullstack.entity.User;

public interface UserRepo extends JpaRepository<User, Integer > {

}
