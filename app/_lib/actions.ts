export const login = (username: string) => ({
  type: "LOGIN",
  payload: { username },
});

export const logout = () => ({
  type: "LOGOUT",
});