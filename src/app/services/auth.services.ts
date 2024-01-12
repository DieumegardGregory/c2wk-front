import { UserInfosInterface } from "../interfaces/interfaces";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  export const register = async (userInfos: UserInfosInterface) => {
    const response = await fetch(`${apiUrl}/api/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfos),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    return response;
  }
