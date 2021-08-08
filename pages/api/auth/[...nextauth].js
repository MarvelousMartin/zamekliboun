import NextAuth from "next-auth";

export default NextAuth({
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: null,
  },
  session: {
    jwt: false,
    maxAge: 8 * 60 * 60,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    encryption: true,
  },
  callbacks: {
    session: async (session, user) => {
      session.id = user.id;
      return Promise.resolve(session);
    },
  },
});
