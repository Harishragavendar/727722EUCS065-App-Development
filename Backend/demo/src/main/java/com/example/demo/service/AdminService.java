package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Orders;
import com.example.demo.entity.PaymentInfo;
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
    public void changestatus(int id)
    {
        Orders obj=orepo.findById(id).get();
        obj.setStatus("Approved");
        orepo.save(obj);
    }
    public void deleteuser(int id)
    {
        UserInfo obj=urepo.findById(id).get();
        urepo.delete(obj);
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
    public List<Orders> getorders()
    {
        return orepo.findAll();
    }
    public List<UserInfo> getusers()
    {
        return urepo.findAll();
    }
    public List<PaymentInfo> info()
    {
        return prepo.findAll();
    }
}
