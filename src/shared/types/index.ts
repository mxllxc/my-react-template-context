

//================================================
// Envios para o back end

//================================================
// Retornos do back end

//================================================
// Helpers

export type User = {
  email: string;
  status: string
}

//================================================
// State

export type AuthState = {
  singIn: (email: string) => void;
  user: User
};
