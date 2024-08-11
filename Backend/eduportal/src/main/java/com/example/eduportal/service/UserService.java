package com.example.eduportal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.eduportal.model.Course;
import com.example.eduportal.model.PaymentInfo;
import com.example.eduportal.model.User;
import com.example.eduportal.repository.CourseRepository;
import com.example.eduportal.repository.PaymentRepository;
import com.example.eduportal.repository.UserRepository;

@Service
public class UserService 
{
    @Autowired
    UserRepository repo;
    @Autowired
    CourseRepository crepo;
    @Autowired
    PaymentRepository prepo;
    public void post(User obj)
    {
        repo.save(obj);
    }
    public List<User> findall()
    {
        return repo.findAll();
    }
    public void removeuser(int userid)
    {
        repo.deleteuser(userid);
    }
    public void enroll(int userid,int courseid)
    {
        User user=repo.findById(userid).get();
        Course course=crepo.findById(courseid).get();
        user.getCourses().add(course);
        course.getUsers().add(user);
        repo.save(user);
        crepo.save(course);
    }
    public Optional<User> getUserById(int id) {
        return repo.findById(id);
    }
    public void edit(int userId,String newpassword)
    {
        Optional<User>d=repo.findById(userId);
        User obj=d.get();
        obj.setPassword(newpassword);
        repo.save(obj);
    }
    public List<PaymentInfo> getPayments(String name)
    {
        return prepo.getPaymentsOfUser(name);
    }
    public void upgrade(int id)
    {
        User obj=repo.findById(id).get();
        obj.setPremium(true);
        repo.save(obj);
    }
}
