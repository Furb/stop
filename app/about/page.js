import Link from "next/link";
import Dropdown from "../_components/Dropdown";

function About() {
  return (
    <div className='container'>
      <div className='flex'>
        <h4>Dropdown</h4>
        <Dropdown />
      </div>
    </div>
  );
}

export default About;
