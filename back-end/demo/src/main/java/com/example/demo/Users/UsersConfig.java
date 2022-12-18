package com.example.demo.Users;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class UsersConfig {
    @Bean
    CommandLineRunner commandLineRunner(UsersRepository repo) {
        return args -> {
            Users dusty = new Users(
                "Dustin",
                "Zhang",
                "dustinzhangzzz@gmail.com",
                'c',
                "abc1234",
                "US",
                "Brooklyn",
                "NY",
                "277 Gold",
                "",
                "11201",
                LocalDate.of(1998, Month.JULY,9)


        );
            Users lip = new Users(
                    "Philip",
                    "Gal",
                    "xz3749@nyu.edu",
                    'c',
                    "abc1234",
                    "US",
                    "Brooklyn",
                    "NY",
                    "277 Gold",
                    "",
                    "11201",
                    LocalDate.of(1998, Month.JULY,9));
            repo.saveAll(List.of(dusty, lip));
        };

    }
}
