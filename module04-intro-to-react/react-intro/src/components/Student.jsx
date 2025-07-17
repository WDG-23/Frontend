import Address from "./Address";

const Student = (props) => {
  //   console.log(props);
  return (
    <>
      <section>
        <h3>Student</h3>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Status: {props.graduate ? "Graduate" : "Students"}</p>
        <Address city={props.city} />
      </section>
    </>
  );
};

export default Student;
