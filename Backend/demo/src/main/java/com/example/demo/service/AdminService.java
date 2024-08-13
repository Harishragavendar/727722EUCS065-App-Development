package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Orders;
import com.example.demo.entity.UserInfo;
import com.example.demo.repository.OrdersRepository;
import com.example.demo.repository.PaymentRepository;
import com.example.demo.repository.UserInfoRepository;

@Service
public class AdminService 
{
    @Autowired
    UserInfoRepository urepo;
    @Autowired
    PaymentRepository prepo;
    @Autowired
    OrdersRepository orepo;
    public void addadmin(UserInfo obj)
    {
        urepo.save(obj);
    }
    public void adduser(UserInfo obj)
    {
        urepo.save(obj);
    }
    public List<UserInfo> getAllUsers()
    {
       return urepo.findAll();
    }
    public void changestatus(Orders obj)
    {
        obj.setStatus("Approved");
        orepo.save(obj);
    }
    public void deleteuser(UserInfo obj)
    {
        urepo.delete(obj);
    }
    public void changename(int id,String name)
    {
        UserInfo user=urepo.findById(id).get();
        user.setName(name);
        urepo.save(user);
    }
    public void changeemail(int id,String email)
    {
        UserInfo user=urepo.findById(id).get();
        user.setEmail(email);
        urepo.save(user);
    }
    public List<Orders> getorders()
    {
        return orepo.findAll();
    }
    public boolean updateUser(int id, UserInfo updatedUser) {
        Optional<UserInfo> userOpt = urepo.findById(id);
        if (userOpt.isPresent()) {
            UserInfo existingUser = userOpt.get();
            existingUser.setName(updatedUser.getName());
            existingUser.setEmail(updatedUser.getEmail());
            // Update other fields as needed
            urepo.save(existingUser);
            return true;
        }
        return false;
    }
}
