package Gloyoo.AutoAnders.user.service;


import Gloyoo.AutoAnders.user.dto.UserCreateRequest;
import Gloyoo.AutoAnders.user.entity.User;
import Gloyoo.AutoAnders.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import Gloyoo.AutoAnders.user.entity.Role;

import java.time.Duration;


@Service
public class UserService {

    private final UserRepository users;
    private final PasswordEncoder encoder;

    public UserService(UserRepository users, PasswordEncoder encoder) {
        this.users = users;
        this.encoder = encoder;
    }

    public User register(UserCreateRequest req) {
        if (users.existsByEmail(req.getEmail())) {
            throw new IllegalArgumentException("Email already in use");
        }
        User u = new User();
        u.setEmail(req.getEmail());
        u.setPassword(encoder.encode(req.getPassword()));
        u.setName(req.getName());
        u.setPhoneNumber(req.getPhoneNumber());
        u.setRole(Role.USER);


        return users.save(u);
    }

    public User findByEmailOrThrow(String email) {
        return users.findByEmail(email).orElseThrow(
                () -> new IllegalArgumentException("User not found"));
    }



    public boolean checkPassword(User user, String rawPassword) {

        return encoder.matches(rawPassword, user.getPassword());
    }
}
