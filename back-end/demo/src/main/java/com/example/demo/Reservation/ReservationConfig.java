package com.example.demo.Reservation;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.time.LocalDateTime;
import java.util.List;
@Configuration
public class ReservationConfig {
    @Bean
    CommandLineRunner reservationCmd(ReservationRepository repo) {
        return args -> {
            Reservation res1 = new Reservation(
                    LocalDateTime.of(2022, 12, 16, 17, 00),
                    LocalDateTime.of(2022, 12, 16, 19, 00),
                    "Booked"
            );
            Reservation res2 = new Reservation(
                    LocalDateTime.of(2022, 12, 16, 20, 00),
                    LocalDateTime.of(2022, 12, 16, 22, 00),
                    "Available"
            );
            repo.saveAll(List.of(res1,res2));
        };

    }
}
