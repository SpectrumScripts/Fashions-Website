import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions  = NextAuth({

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
    }}),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ]
});


export { authOptions as GET, authOptions as POST };
