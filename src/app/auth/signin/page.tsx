import styles from "./Signin.module.css";
import Link from "next/link";
import "../../globals.css";
import SignInButton from "./SignInButton";

export default function SignIn() {
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
            <SignInButton />
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
