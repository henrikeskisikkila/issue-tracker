
interface AuthProps {
  username: string;
  password: string;
}

export const login = ({ username, password }: AuthProps) => {
  console.log(`Login user ${username}`)

}

export const logout = () => {
  console.log("logout")
}