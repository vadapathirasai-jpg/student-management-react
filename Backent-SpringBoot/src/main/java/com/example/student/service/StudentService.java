package com.example.student.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.student.model.Student;
import com.example.student.repository.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepository stuRepo;
	
	public Student saveStudent(Student student) {
		return stuRepo.save(student);
	}
	
	public List<Student> getAllStudent(){
		return stuRepo.findAll();
	}
	
	public Student getStudentById(int id) {
		return stuRepo.findById(id).get();
	}
	public void deleteStudent(int id) {
		stuRepo.deleteById(id);
	}
	public Student updateStudent(int id, Student newStudent) {
		Student exisitingStudent = stuRepo.findById(id).get();
		
		exisitingStudent.setName(newStudent.getName());
		exisitingStudent.setDepartment(newStudent.getDepartment());
		return stuRepo.save(exisitingStudent);
		
	}

}