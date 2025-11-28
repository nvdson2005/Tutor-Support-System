export type Role = "tutor" | "student" | "admin" | "coordinator";

export const tutorAccount = {username: "tutor", password: "1", name: "Nguyen Van A"};
export const studentAccount = {username: "student", password: "1", name: "Nguyen Van B"};
export const adminAccount = {username: "admin", password: "1", name: "Nguyen Van C"};
export const coordinatorAccount = {username: "coordinator", password: "1", name: "Nguyen Van D"};

export const accountsByRole : Record<Role, {username: string; password: string, name: string, route: string}> = {
  tutor: {...tutorAccount, route: "/tutor/dashboard"},
  student: {...studentAccount, route: "/student/dashboard"},
  admin: {...adminAccount, route: "/admin/tracking"},
  coordinator: {...coordinatorAccount, route: "/coordinator/dashboard"},
};