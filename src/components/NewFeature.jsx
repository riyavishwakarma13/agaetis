import React from "react";

const NewFeature = () => {
  return (
    <section className="space-y-3">
      <h1 className="text-3xl font-serif font-bold">New Feature</h1>
      <p className="text-gray-500 font-medium">
        December 14, 2013 by <span className="text-blue-500">Chris</span>
      </p>
      <div className="space-y-3 text-sm">
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A distinctio
          cum odit expedita commodi atque quo laudantium cumque quia. Minus
          fugiat hic mollitia molestiae nulla, tempora a quidem ullam
          perspiciatis ipsam magni ad voluptatem iure animi harum quo, dolores
          assumenda nobis numquam vel pariatur est repudiandae aut accusamus?
          Quaerat, eaque.{" "}
        </p>
        <ul className="list-disc pl-8">
          <li>
            Presne commodi atque quo laudantium cumque quia. Minus fugiat hic
            mollitia
          </li>
          <li>
            Donec molestiae nulla, tempora a quidem ullam perspiciatis ipsam
          </li>
          <li>Nulla voluptatem iure animi harum quo dolores</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
          ullam ex. Officiis, deleniti eius. Ducimus repellendus sapiente
          dolorum delectus hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          voluptatem.
        </p>
      </div>
    </section>
  );
};

export default NewFeature;
