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

import com.example.eduportal.model.Admin;
import com.example.eduportal.model.PaymentInfo;
import com.example.eduportal.model.User;
import com.example.eduportal.service.AdminService;
import com.example.eduportal.service.UserService;

@RestController
@RequestMapping("/admin")
public class AdminController 
{
    @Autowired
    AdminService service;
    @Autowired
    UserService uService;
    //to store admin object in the admin repository
    @PostMapping("/post")
    public Admin padmin(@RequestBody Admin obj1)
    {
        service.post(obj1);
        return obj1;
    }
    //to get the list of all admins
    @GetMapping("/get")
    public List<Admin> get()
    {
        return service.get();
    }
    //to edit the password of admin
    @PutMapping("/edit/{id}/{newp}")
    public Admin edit(@PathVariable int id,@PathVariable String newp)
    {
        return service.newp(id, newp);
    }
    //to delete the admin
    @DeleteMapping("/dadmin/{id}")
    public String dadmin(@PathVariable int id)
    {
        service.removeadmin(id);
        return "admin deleted successfully";
    }
    //to delete the user by admin
    @DeleteMapping("/duser/{id}")
    public String duser(@PathVariable int id)
    {
        uService.removeuser(id);
        return "user deleted successfully";
    }
    //to retrieve all the payment infos
    @GetMapping("/pinfo")
    public List<PaymentInfo> getAllPayments()
    {
        return service.getAllPayments();
    }
    //to retrieve the list of users
    @GetMapping("/users")
    public List<User> getAllUsers()
    {
        return uService.findall();
    }
    //to remove the user's premium
    @PutMapping("/removep/{id}")
    public String removep(@PathVariable int id)
    {
        service.removePremium(id);
        return "premium contents are locked";
    }
}
