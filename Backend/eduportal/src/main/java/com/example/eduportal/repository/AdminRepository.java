package com.example.eduportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.eduportal.model.Admin;

import jakarta.transaction.Transactional;

@Repository
public interface AdminRepository extends JpaRepository<Admin,Integer>
{
    @Transactional
    @Modifying
    @Query("DELETE FROM Admin a WHERE a.id=:id")
    public void deleteadmin(@Param("id") int id);
}
