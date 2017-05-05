export const fakeAuth = () => {
  return false;
}

export const login = () => {
  localStorage.setItem('isAuthenticated', 'true');
}

export const logout = () => {
  localStorage.removeItem('isAuthenticated');
}
