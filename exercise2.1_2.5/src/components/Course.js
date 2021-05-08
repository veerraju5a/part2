import React from 'react'

const Header = ({name}) => {
    return (
        <h1>{name}</h1>
    );
};

const Part = ({part}) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    );
};



const Total = ({ parts }) => {
    const total = parts.reduce((acc = 0, part) => {
      return acc + part.exercises;
    }, 0);
    console.log(total);
    return <p>total of {total} exercises</p>;
  };

  const Course = ({ course }) => {
    const { name, parts } = course;
    return (
      <>
        <Header name={name} />
        {parts && parts.map(part => <Part key={part.id} part={part} />)}
        <Total parts={parts} />
      </>
    );
  };



export default Course