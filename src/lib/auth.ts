// src/lib/auth.ts
export type User = {
  username: string;
  identifier: string;
};

const STORAGE_KEY = "pasaj_user";

export function login(
  username: string,
  identifier: string,
  password: string
): User | null {
  // Boş alan olmasın yeterli
  if (username && identifier && password) {
    const user = { username, identifier };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  }
  return null;
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY);
}

export function getCurrentUser(): User | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as User;
  } catch {
    return null;
  }
}
