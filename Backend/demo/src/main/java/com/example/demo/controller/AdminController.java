package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Orders;
import com.example.demo.entity.PaymentInfo;
import com.example.demo.entity.UserInfo;
import com.example.demo.service.AdminService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin")
public class AdminController 
{
    @Autowired
    AdminService service;
    @PostMapping("/post/admin")
    public String addadmin(@RequestBody UserInfo obj)
    {
        obj.setRoles("ROLE_ADMIN");
        service.addadmin(obj);
        return "admin added successfully";
    }
    @PostMapping("/post/user")
    public String adduser(@RequestBody UserInfo obj)
    {
        service.adduser(obj);
        return "admin added successfully";
    }
    @PutMapping("/changestatus/{id}")
    public String changestatus(@PathVariable int id)
    {
        service.changestatus(id);
        return "order approved";
    }
    @DeleteMapping("/deleteuser/{id}")
    public void deleteuser(@PathVariable int id)
    {
        service.deleteuser(id);
    }
    @PutMapping("/edituser/{id}")
    public ResponseEntity<String> editUser(@PathVariable int id, @RequestBody UserInfo updatedUser) {
        boolean success = service.updateUser(id, updatedUser);
        if (success) {
            return ResponseEntity.ok("User updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }
    @GetMapping("/get/orders")
    public List<Orders> getorders()
    {
        return service.getorders();
    }
    @GetMapping("get/users")
    public List<UserInfo> getusers()
    {
        return service.getusers();
    }
    @GetMapping("/get")
    public List<PaymentInfo> info()
    {
        return service.info();
    }
}
