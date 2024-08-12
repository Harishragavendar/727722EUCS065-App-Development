package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.PaymentInfo;
import com.example.demo.service.PaymentService;

import java.util.List;

@RestController
@RequestMapping("/payment")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {

    @Autowired
    PaymentService service;

    @PostMapping("/post")
    @PreAuthorize("hasRole('ROLE_USER')")
    public void post(@RequestBody PaymentInfo info) {
        service.post(info);
    }

    @GetMapping("/view")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<PaymentInfo> viewPayments(@RequestParam String name) {
        return service.getPaymentsOfUser(name);
    }
}
