package com.example.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.student.model.Student;
import com.example.student.service.StudentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudentController {
	
	@Autowired
	private StudentService stuService;
	
	@PostMapping("/student")
	public Student addStudent(@RequestBody Student student) {
		return stuService.saveStudent(student);
	}
	@GetMapping("/student")
	public List<Student> getStudent(){
		return stuService.getAllStudent();
	}
	@GetMapping("student/{id}")
	public Student getStudentById(@PathVariable int id) {
		return stuService.getStudentById(id);
	}
	@DeleteMapping("student/{id}")
	public void deleteStudent(@PathVariable int id) {
		stuService.deleteStudent(id);
	}
	@PutMapping("/student/{id}")
	public Student updateStudent(@PathVariable int id, @RequestBody Student newStudent)	{
		return stuService.updateStudent(id, newStudent);
	}

}
