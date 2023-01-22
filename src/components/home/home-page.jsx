import Link from "next/link";
import Image from "next/image";

const HomePage = ({ data }) => {
  const { category } = data;
  const title = data.category.map((a) => a.title);

  return (
    <div className="home_body">
      {category &&
        category.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`}>
            <div className="card">
              <Image
                width={100}
                height={300}
                alt={ev.title}
                src={ev.image}
                className="image"
              />
              <div className="content">
                <h2>{ev.title}</h2> <p>{ev.description}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default HomePage;
