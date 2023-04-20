import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">iwrite</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex
            doloremque modi harum quae accusamus fuga quisquam blanditiis alias
            at. Repellat enim voluptas facere corporis blanditiis officia aut
            iure dolorum?
          </p>
          <p>© iwrite | All Rights Reserved</p>
        </div>

        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">vitae, nunc, nunc.</p>
          <p>Ullamcorper vivamus</p>
        </div>

        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)867-5309</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
