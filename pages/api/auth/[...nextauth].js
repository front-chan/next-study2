import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: "e3ef8aa8a4b7c8ae9c1b",
            clientSecret: "d117ba9af42221a863b9b786dd1e68098a31ccc2",
        }),
    ],
    secret: "secret1234",
};

export default NextAuth(authOptions);
