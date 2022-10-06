package com.elearning.service;

import com.elearning.model.Student;
import com.elearning.model.StudentRequest;
import com.elearning.repository.StudentRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class StudentService {
    private StudentRepository studentRepository;

    public Student RegisterStudent(StudentRequest studentRequest) throws Exception {
        UUID uuid = UUID.randomUUID();

        String email = "stu" + studentRequest.getFacNumber()+"@uni-plovdiv.bg";

            Student student = Student.builder()
                    .Id(uuid)
                    .FirstName(studentRequest.getFirstName())
                    .MiddleName(studentRequest.getMiddleName())
                    .LastName(studentRequest.getLastName())
                    .FacNumber(studentRequest.getFacNumber())
                    .DateOfBirth(studentRequest.getDateOfBirth())
                    .Email(email)
                    .Password(studentRequest.getPassword())
                    .build();



            //TODO:
            // + email validation;
            // + check if email is not taken

            return studentRepository.save(student);
        }

    public List<Student> GetAllStudents(){
        return studentRepository.findAll();
    }

}
