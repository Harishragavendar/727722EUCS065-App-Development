package com.example.eduportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.eduportal.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course,Integer>
{
    
}
