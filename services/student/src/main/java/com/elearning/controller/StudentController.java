package com.elearning.controller;

import com.elearning.model.Student;
import com.elearning.model.StudentRequest;
import com.elearning.service.StudentService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("api/v1/student")
@AllArgsConstructor
public class StudentController {
    private final StudentService studentService;

    @PostMapping("/register")
    public ResponseEntity<Student> RegisterCustomer(@RequestBody StudentRequest studentRequest) throws Exception {
        Student student = studentService.RegisterStudent(studentRequest);
        return new ResponseEntity<>(student, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Student> FindAllStudents(){
        return studentService.GetAllStudents();
    }

}
