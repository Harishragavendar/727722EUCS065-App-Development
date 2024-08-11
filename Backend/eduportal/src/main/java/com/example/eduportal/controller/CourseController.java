package com.example.eduportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.eduportal.model.Course;
import com.example.eduportal.service.CourseService;

@RestController
@RequestMapping("/course")
public class CourseController 
{
    @Autowired
    CourseService service;
    //to post the course object
    @PostMapping("/post")
    public Course post(@RequestBody Course obj)
    {
        service.post(obj);
        return obj;
    }
    // to get the list of all courses
    @GetMapping("/get")
    public List<Course> findall()
    {
        return service.getall();
    }
    //to delete all the users
    @DeleteMapping("/dcourse/{id}")
    public Course dCourse(@PathVariable int id)
    {
        return service.dcourse(id);
    }
    //to change the cost of a course
    @PutMapping("/changecost/{id}/{newcost}")
    public String changecost(@PathVariable int id,@PathVariable int newcost)
    {
        service.changecost(id,newcost);
        return "cost updated";
    }
}
