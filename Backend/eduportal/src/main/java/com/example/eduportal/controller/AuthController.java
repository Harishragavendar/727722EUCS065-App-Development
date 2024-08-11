package com.example.eduportal.controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.eduportal.service.AuthService;
import com.example.eduportal.service.JwtService;
import com.example.eduportal.service.RefreshTokenService;
import com.example.eduportal.utils.AuthResponse;
import com.example.eduportal.utils.LoginRequest;
import com.example.eduportal.utils.RegisterRequest;
@RestController
@RequestMapping("/api/users")
public class AuthController {
    private final AuthService authService;
    private final RefreshTokenService refreshTokenService;
    private final JwtService jwtService;
    public AuthController(AuthService authService, RefreshTokenService refreshTokenService, JwtService jwtService) {
        this.authService = authService;
        this.refreshTokenService = refreshTokenService;
        this.jwtService = jwtService;
    }
    //for user registration
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest registerRequest) {
        return ResponseEntity.ok(authService.register(registerRequest));
    }
    //for user login
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok(authService.login(loginRequest));
    }
    // to refresh the token
    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refreshToken(@RequestBody LoginRequest loginRequest) {
        
        return ResponseEntity.ok(authService.login(loginRequest));
    }
}
