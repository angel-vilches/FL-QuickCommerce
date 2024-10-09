package com.freelance.quickcommerce.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.freelance.quickcommerce.models.UserModel;

@Repository
public interface UserRepository extends CrudRepository<UserModel, Long> {
    
}
