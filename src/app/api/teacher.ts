import axios from 'axios';
import { Teacher, UpdateTeacherBody, School } from './types/teacher.types';

export async function me(): Promise<Teacher> {
  const response = await axios.get<Teacher[]>('http://localhost:4000/teachers');
  return response.data[0];
}

export async function updateTeacher(teacher: UpdateTeacherBody, id: string): Promise<Teacher> {
  const response = await axios.patch<Teacher>(`http://localhost:4000/teachers/${id}`, teacher);
  return response.data;
}

export async function getSchool(id: string): Promise<School> {
  const response = await axios.get<School>(`http://localhost:4000/school/${id}`);
  return response.data;
}
