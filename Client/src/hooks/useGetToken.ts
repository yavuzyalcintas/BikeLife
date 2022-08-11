import { gql, useMutation } from "@apollo/client";
import { Auth } from "../common/interfaces/auth.interface";

export const GET_TOKEN = gql`
mutation GetToken($input: UserInput!){
    token(input: $input)
}
`

export const useGetToken = ()  => {
    return useMutation<Auth>(GET_TOKEN, {
      onCompleted: (data) => {
        console.log(data) // the response
      },
      onError: (error) => {
        console.log(error); // the error if that is the case
      }});
}