import { getProviders, getSession } from "next-auth/react";
import styles from "./Signin.module.css";
import Link from "next/link";
import "../../globals.css";
import SignInButton from "./SignInButton";

export default async function SignIn() {
  const providersProp = {
    providers: await getProviders(),
  };
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

  return (
    <>
      <div className={styles.login}>
        <div className={styles.nav}>
          <AmazonLogo />
        </div>
        <div className={styles.form}>
          <h1>Sign In</h1>
          <div>
            <SignInButton {...providersProp} />
          </div>
          <p>
            By continuing, you agree to Amazon&#39;s{" "}
            <span>Conditions of Use</span> and <span>Privacy Notice</span>.
          </p>
        </div>
      </div>
    </>
  );
}

// export async function getServerSideProps(context: { req: any }) {
//   const { req } = context;
//   const session = await getSession({ req });
//   const providers = await getProviders();

//   if (session) {
//     return {
//       redirect: { destination: "/" },
//     };
//   }

//   return {
//     props: { providers },
//   };
// }
