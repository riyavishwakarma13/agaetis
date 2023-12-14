import React from "react";

const AnotherBlog = () => {
  return (
    <section className="space-y-3 py-5">
      <div>
        <h1 className="text-3xl font-serif font-bold">Another blog post</h1>
        <p className="text-gray-500 font-medium">
          December 23, 2013 by <span className="text-blue-500">Jacob</span>
        </p>
      </div>
      <div className="space-y-3 text-sm">
        <p>
          Cum sociis natoque penatibus et magnis{" "}
          <span className="text-blue-500">dis parturient montes</span>, nascetur
          ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
          quam venenatis vestibulum. Sed posuere consectetur est at lobortis.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
        <p>
          Curabitur blandit tempus porttitor.{" "}
          <span className="font-bold">Nullam quis risus eget urna mollis</span>{" "}
          ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
          elit.
        </p>
        <p>
          Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </p>
        <p>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros.
        </p>
      </div>
    </section>
  );
};

export default AnotherBlog;
