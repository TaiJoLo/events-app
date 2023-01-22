import React from "react";
import Image from "next/image";
import Link from "next/link";

export const CatEvent = ({ data, pageName }) => {
  // console.log(data);
  // console.log(pageName);
  return (
    <div className="cat_events">
      <h1> Events in {pageName} </h1>

      <div className="content">
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
            <div className="card">
              <Image width={300} height={300} alt={ev.title} src={ev.image} />
              <div className="text">
                <h2> {ev.title} </h2>
                <p> {ev.description} </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
