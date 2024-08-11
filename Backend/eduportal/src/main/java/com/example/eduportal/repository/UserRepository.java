package com.example.eduportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.eduportal.model.User;

import jakarta.transaction.Transactional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer>
{
    User findByEmail(String username);
    @Transactional
    @Modifying
    @Query("DELETE FROM User u WHERE u.id=:id")
    void deleteuser(@Param("id")int id);
    
}