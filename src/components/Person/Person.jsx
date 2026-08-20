export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const isAge = age !== undefined && `I am ${age}`;

  const couple = sex === 'm' ? 'wife' : 'husband';

  const status = !isMarried
    ? 'I am not married'
    : `${partnerName} is my ${couple}`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && <p className="Person__age">{isAge}</p>}

      <p className="Person__partner">{status}</p>
    </section>
  );
};
