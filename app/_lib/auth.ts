export type Role = "tutor" | "student" | "admin" | "coordinator";

export const tutorAccount = {username: "tutor", password: "1"};
export const studentAccount = {username: "student", password: "1"};
export const adminAccount = {username: "admin", password: "1"};
export const coordinatorAccount = {username: "coordinator", password: "1"};

export const accountsByRole : Record<Role, {username: string; password: string, route: string}> = {
  tutor: {...tutorAccount, route: "/tutor/dashboard"},
  student: {...studentAccount, route: "/student/dashboard"},
  admin: {...adminAccount, route: "/admin/tracking"},
  coordinator: {...coordinatorAccount, route: "/coordinator/dashboard"},
};