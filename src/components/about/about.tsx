type AboutProps ={
  maxLength: number;
  onChange: (target:any) => void;
  value: string;
}

function About({maxLength, onChange, value }: AboutProps): JSX.Element {
  return(
    <>
      <textarea
        onChange={onChange}
        value={value}
        maxLength={maxLength}
        cols={60}
        rows={5}
      />
      <p className="symbols-count">Осталось символов: {maxLength - value.length} </p>
    </>
  );
}

export default About;