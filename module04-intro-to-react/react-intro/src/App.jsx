import Student from "./components/Student";
import "./App.css";

const students = [
  { name: "John", age: 25, city: "New York", graduate: true },
  { name: "Jane", age: 30, city: "Boston", graduate: false },
  { name: "Jack", age: 25, city: "Washington", graduate: true },
  { name: "Jil", age: 26, city: "New York", graduate: false },
];

const App = () => {
  return (
    <>
      {students.map(({ name, age, city, graduate }, index) => (
        <Student
          key={index}
          name={name}
          age={age}
          city={city}
          graduate={graduate}
        />
      ))}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};

export default App;
