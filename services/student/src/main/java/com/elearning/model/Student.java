package com.elearning.model;

import lombok.*;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.UUID;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "students")
public class Student {
    @javax.persistence.Id
    private UUID Id;
    private String FacNumber;
    private String FirstName;
    private String MiddleName;
    private String LastName;
    private String Email;
    private String Password;
    @Temporal(TemporalType.DATE)
    private Date DateOfBirth;
}
