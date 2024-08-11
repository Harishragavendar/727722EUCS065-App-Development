package com.example.eduportal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.eduportal.model.PaymentInfo;
import com.example.eduportal.model.User;
import com.example.eduportal.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService service;
    //to post the user details
    @PostMapping("/post")
    public User post(@RequestBody User obj)
    {
        service.post(obj);
        return obj;
    }
    //to retrieve the list of all users
    @GetMapping("/get")
    public List<User> findall()
    {
        return service.findall();
    }
    //to enroll in a course
    @PutMapping("/{userid}/{courseid}")
    public String enroll(@PathVariable int userid,@PathVariable int courseid)
    {
        service.enroll(userid, courseid);
        return "updated";
    }
    //to delete the user
     @DeleteMapping("/duser/{id}")
    public String duser(@PathVariable int id)
    {
        service.removeuser(id);
        return "user deleted successfully";
    }
    // to get the user id by details
    @GetMapping("/get/{id}")
    public User getUserById(@PathVariable int id) {
        Optional<User> user = service.getUserById(id);
        return user.get();
    }
    //to change the password of a user
    @PutMapping("newp/{userid}/{pass}")
    public String newp(@PathVariable int userid,@PathVariable String pass)
    {
        service.edit(userid, pass);
        return "password updated successfully";
    }
    //to retrieve the list of payments done by a user
    @GetMapping("/payments/{name}")
    public List<PaymentInfo> getp(@PathVariable String name)
    {
        return service.getPayments(name);
    }
    //to upgrade the user's premium
    @PutMapping("/upgrade/{id}")
    public String upgrade(@PathVariable int id)
    {
        service.upgrade(id);
        return "upgraded to premium";
    }
    
}
