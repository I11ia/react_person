export const Person = ({ person }) => {
  const isAge = person.age !== undefined && `I am ${person.age}`;

  const couple = person.sex === 'm' ? 'wife' : 'husband';

  const status = !person.isMarried
    ? 'I am not married'
    : `${person.partnerName} is my ${couple}`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>

      {person.age && <p className="Person__age">{isAge}</p>}

      <p className="Person__partner">{status}</p>
    </section>
  );
};
