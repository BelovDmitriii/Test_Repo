import { useState } from "react";
import About from "../components/about/about";
import Counter from "../components/counter/counter";

const DEFAULT_MAX_LENGTH = 50;
const COUNTER_STEP = 5;

export function AboutPage () {
  const [count, setCount] = useState(DEFAULT_MAX_LENGTH);
  const [text, setText] = useState('');
  return (
    <>
      <div className="w-[500px] p-5 m-auto bg-blue-100 top-10 align-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus excepturi, dolore fugiat commodi eius quo repudiandae quidem nisi distinctio minus quibusdam qui praesentium aliquam labore ex quam perferendis dolorum dicta non blanditiis inventore! Sapiente a perspiciatis, perferendis, ab quaerat porro dolore laudantium labore iusto eaque quod exercitationem, autem ullam eveniet.
        <br/>
        <About 
          onChange={({target}) => setText(target.value)}
          maxLength = {count}
          value = {text}
          />
        <Counter />
      </div>
    </>
  );
}