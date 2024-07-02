export type Teacher = {
  _id: string;
  name: string;
  lastName: string;
  phone: string;
  email: string;
  schoolId: string;
};

export type UpdateTeacherBody = {
  name?: string;
  lastName?: string;
  phone?: string;
  email?: string;
};

export type School = {
  _id: string;
  name: string;
  phone: string;
  address: string;
};
