import React from "react";
import Card from "../(shared)/Card";

type Props = {};

// function testDrive(str: any) {
//   const regex = /(?<=\d{3})\d(?=\d{3})/g
//   const newStr = str.replace(regex, '*')
//   return newStr
// }
// testDrive('1234567890')

// console.log(testDrive('1234567890'))

const Tech = (props: Props) => {
  return (
    <section>
      <hr className="border-1" />
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
          HOT
        </h4>
        <p className="font-bold text-2xl">Latest News In Technology</p>
      </div>


      {/* GRID */}
      <div className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5">

        {/* LARGE CARD */}
        <Card
          className="bg-wh-500 col-span-1 row-span-3"
          imageHeight="h-96"
          isLongForm
        />

        {/* SMALL CARDS */}
        <Card
          className="bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          isSmallCard
        />
        <Card
          className="bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          isSmallCard
        />
        <Card
          className="bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          isSmallCard
        />

      </div>
    </section>
  );
};

export default Tech;
