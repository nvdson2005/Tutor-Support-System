export const login = (username: string, name: string) => ({
  type: "LOGIN",
  payload: { username, name },
});

export const logout = () => ({
  type: "LOGOUT",
});