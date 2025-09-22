// src/lib/auth.ts
export type User = {
  username: string;
  identifier: string;
};

const STORAGE_KEY = "pasaj_user";

// Demo kullanıcı
const demoUser = {
  username: "Erva",
  identifier: "000000", // telefon ya da email
  password: "1111",
};

export function login(
  username: string,
  identifier: string,
  password: string
): User | null {
  if (
    username === demoUser.username &&
    identifier === demoUser.identifier &&
    password === demoUser.password
  ) {
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
