package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.PaymentInfo;
import com.example.demo.repository.PaymentRepository;

import java.util.List;

@Service
public class PaymentService {

    @Autowired
    PaymentRepository prepo;

    public void post(PaymentInfo obj) {
        prepo.save(obj);
    }

    public List<PaymentInfo> getPaymentsOfUser(String name) {
        return prepo.getPaymentsOfUser(name);
    }
}
