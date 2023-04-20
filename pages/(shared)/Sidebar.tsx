import React from "react";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        Subscribe and Follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="bg-wh-900 my-8">advert image</div>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        About the Blog
      </h4>
      <div className="bg-wh-900 my-8">profile image</div>
      <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
        Larry David
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Sit diam vel quam elementum pulvinar etiam non quam. Egestas sed tempus
        urna et pharetra pharetra massa massa ultricies. Quis hendrerit dolor magna
        eget est lorem ipsum dolor. Quis risus sed vulputate odio ut enim blandit
        volutpat maecenas. Egestas sed tempus urna et pharetra pharetra massa
        massa ultricies. Quis hendrerit dolor magna eget est lorem ipsum dolor.
        Quis risus sed vulputate odio ut enim blandit volutpat maecenas.
      </p>
    </section>
  );
};

export default Sidebar;
