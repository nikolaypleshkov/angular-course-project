package com.elearning.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentRequest {
    private String FirstName;
    private String MiddleName;
    private String LastName;
    private String FacNumber;
    private Date DateOfBirth;
    private String Password;
}
