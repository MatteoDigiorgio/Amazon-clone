import styles from "./Signin.module.css";
import Link from "next/link";
import "../../../app/(main)/globals.css";
import SignInButton from "./SignInButton";

export default function SignIn() {
  const AmazonLogo = () => {
    return (
      <div className={styles.amazonLogo}>
        <Link title="Home" passHref href="/">
          <img
            alt="Amazon Logo"
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
