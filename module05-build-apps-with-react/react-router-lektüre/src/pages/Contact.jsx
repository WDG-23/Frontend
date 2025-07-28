import { useOutletContext } from "react-router";

const Contact = () => {
  const { signedIn } = useOutletContext();

  if (!signedIn) {
    return <h1>Bitte einloggen!</h1>;
  }

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Get in touch with our team.</p>
    </div>
  );
};

export default Contact;
