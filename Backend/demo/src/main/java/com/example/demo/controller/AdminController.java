package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Orders;
import com.example.demo.entity.UserInfo;
import com.example.demo.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    AdminService adminService;

    // Get all users
    @GetMapping("/users")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<UserInfo> getAllUsers() {
        return adminService.getAllUsers();  // Ensure this method exists in your service
    }

    // Add new admin
    @PostMapping("/post/admin")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public String addAdmin(@RequestBody UserInfo obj) {
        adminService.addadmin(obj);
        return "Admin added successfully";
    }

    // Add new user
    @PostMapping("/post/user")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public String addUser(@RequestBody UserInfo obj) {
        adminService.adduser(obj);
        return "User added successfully";
    }

    // Change order status
    @PutMapping("/changestatus")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public String changeStatus(@RequestBody Orders obj) {
        adminService.changestatus(obj);
        return "Order approved";
    }

    // Delete user
    @DeleteMapping("/deleteuser")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void deleteUser(@RequestBody UserInfo obj) {
        adminService.deleteuser(obj);
    }

    // Change user name
    @PutMapping("/editname")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void changeName(int id, String name) {
        adminService.changename(id, name);
    }

    // Change user email
    @PutMapping("/editemail")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void changeEmail(int id, String email) {
        adminService.changeemail(id, email);
    }

    // Get all orders
    @GetMapping("/get/orders")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Orders> getOrders() {
        return adminService.getorders();
    }
}
