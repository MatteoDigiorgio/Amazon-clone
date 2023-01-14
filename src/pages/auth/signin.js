import { getProviders, signIn, getSession } from "next-auth/react";
import styles from "../../styles/Signin.module.css";
import Link from "next/link";

export default function SignIn({ providers }) {
  const AmazonLogo = () => {
    return (
      <div className={styles.amazonLogo}>
        <Link passHref href="/">
          <img
            alt="Amazon Logo"
            width="auto"
            height="auto"
            src="https://links.papareact.com/f90"
            className={styles.amazonImage}
          />
        </Link>
      </div>
    );
  };

  const SignInButton = () => {
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
  };

  return (
    <div className={styles.login}>
      <div className={styles.nav}>
        <AmazonLogo />
      </div>
      <div className={styles.form}>
        <h1>Sign In</h1>
        <div>
          <SignInButton />
        </div>
        <p>
          By continuing, you agree to Amazon's <span>Conditions of Use</span>{" "}
          and <span>Privacy Notice</span>.
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  const providers = await getProviders();

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: { providers },
  };
}
