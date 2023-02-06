"use client";
import React from "react";
import styles from "./Signin.module.css";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";
import { useEffect, useState } from "react";

function SignInButton() {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>();

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

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
