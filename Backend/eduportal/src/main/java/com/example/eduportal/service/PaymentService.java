package com.example.eduportal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.eduportal.model.PaymentInfo;
import com.example.eduportal.repository.PaymentRepository;

@Service
public class PaymentService 
{
    @Autowired
    public PaymentRepository repo;
    public void ppost(PaymentInfo info)
    {
        repo.save(info);
    }
    public void deletepayment(int id) {
        PaymentInfo obj=repo.findById(id).get();
        repo.delete(obj);
    }
}
