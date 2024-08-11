package com.example.eduportal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.eduportal.model.PaymentInfo;
import com.example.eduportal.service.PaymentService;

@RestController
@RequestMapping("/payment")
public class PaymentController 
{
    @Autowired
    PaymentService service;
    //to post the payment info
    @PostMapping("/post")
    public PaymentInfo post(@RequestBody PaymentInfo obj)
    {
        service.ppost(obj);
        return obj;
    }
    // to delete the payment infos
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id)
    {
        service.deletepayment(id);
        return "payment removed successfully";
    }
}
