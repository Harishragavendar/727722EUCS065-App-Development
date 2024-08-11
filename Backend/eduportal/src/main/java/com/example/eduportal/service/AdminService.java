package com.example.eduportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.eduportal.model.Admin;
import com.example.eduportal.model.Course;
import com.example.eduportal.model.PaymentInfo;
import com.example.eduportal.model.User;
import com.example.eduportal.repository.AdminRepository;
import com.example.eduportal.repository.CourseRepository;
import com.example.eduportal.repository.PaymentRepository;
import com.example.eduportal.repository.UserRepository;

@Service
public class AdminService 
{
    @Autowired 
    AdminRepository repo;
    @Autowired
    UserRepository urepo;
    @Autowired 
    CourseRepository crepo;
    @Autowired
    PaymentRepository prepo;
    public void post(Admin obj)
    {
        repo.save(obj);
    }
    public List<Admin> get()
    {
        return repo.findAll();
    }
    public Admin newp(int id,String newp)
    {
        Admin obj=repo.findById(id).get();
        obj.setPassword(newp);
        repo.save(obj);
        return obj;
    }
    public void removeadmin(int id)
    {
        repo.deleteadmin(id);
    }
    public void add(Course obj)
    {
        crepo.save(obj);
    }
    public List<PaymentInfo> getAllPayments()
    {
        return prepo.findAll();
    }
    public void removePremium(int id)
    {
        User obj=urepo.findById(id).get();
        obj.setPremium(false);
        urepo.save(obj);
    }
}
