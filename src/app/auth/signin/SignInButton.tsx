"use client";
import React from "react";
import styles from "./Signin.module.css";
import {
  ClientSafeProvider,
  getProviders,
  getSession,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";
import { useEffect, useState } from "react";
import { Session } from "next-auth";
import { redirect } from "next/navigation";

function SignInButton() {
  const [session, setSession] = useState<Session | null>();
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>();

  useEffect(() => {
    (async () => {
      const session = await getSession();
      const res = await getProviders();
      setProviders(res);
      setSession(session);
    })();
  }, []);

  if (session) {
    redirect("/");
  }

  return (
    <>
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className={styles.button}
              onClick={() => signIn(provider.id)}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </>
  );
}

export default SignInButton;
