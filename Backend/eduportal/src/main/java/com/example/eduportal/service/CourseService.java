package com.example.eduportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.eduportal.model.Course;
import com.example.eduportal.repository.CourseRepository;

@Service
public class CourseService 
{
    @Autowired
    CourseRepository repo;
    public void post(Course obj)
    {
        repo.save(obj);
    }
    public List<Course> getall()
    {
        return repo.findAll();
    }
    public Course dcourse(int id) 
    {
        Course obj=repo.findById(id).get();
        repo.delete(obj);
        return obj;
    }
    public void changecost(int id,int newcost) 
    {
        Course obj=repo.findById(id).get();
        obj.setCost(newcost);
        repo.save(obj);
    }
}
