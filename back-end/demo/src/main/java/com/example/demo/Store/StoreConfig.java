package com.example.demo.Store;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.List;
@Configuration
public class StoreConfig {
    @Bean
    CommandLineRunner cmd(StoreRepository repo) {
        return ags -> {
            Store jeju = new Store(
                    "Jeju Noodle Bar",
                    "USA",
                    "new york",
                    "NY",
                    "15 34th S",
                    "257",
                    "14011"

            );
            Store atomix = new Store(
                    "Atomix",
                    "USA",
                    "new york",
                    "NY",
                    "16 24th S",
                    "277",
                    "14038"

            );
            repo.saveAll(List.of(jeju, atomix));

        };
    }
}
