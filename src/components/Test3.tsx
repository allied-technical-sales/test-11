// Each <Animal /> component outputs its animal prop to console on render
// Clicking the buttons triggers re-renders of all <Animal /> components

// 1. Prevent <Animal /> components from re-rendering when buttons are clicked and when it's parent re-renders
// Note: <Animal animal={...} setAnimal={...} /> must take in an 'animal' and 'setAnimal' prop.

import { useState } from "react";

const animals = ["cat", "dog", "monkey", "cow", "raccoon"] as const;
type AnimalType = typeof animals[number];
type SetAnimalType = (animal: AnimalType) => void;

const Animal = ({
  animal,
  setAnimal
}: {
  animal: AnimalType;
  setAnimal: SetAnimalType;
}) => {
  console.log(animal);
  return <button onClick={(e) => setAnimal(animal)}>{animal}</button>;
};

const Test3 = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<AnimalType>(animals[0]);

  const setAnimal = (animal: AnimalType) => {
    setSelectedAnimal(animal);
  };

  return (
    <div>
      <h1>{selectedAnimal}</h1>
      <ul>
        {animals.map((animal) => (
          <Animal key={animal} animal={animal} setAnimal={setAnimal} />
        ))}
      </ul>
    </div>
  );
};

Test3.displayName = "Test3";
export default Test3;
