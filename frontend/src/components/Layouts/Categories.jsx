import mobiles from "../../assets/images/Categories/phone.png";
import fashion from "../../assets/images/Categories/fashion.png";
import electronics from "../../assets/images/Categories/electronics.png";
import home from "../../assets/images/Categories/home.png";
import travel from "../../assets/images/Categories/travel.png";
import appliances from "../../assets/images/Categories/appliances.png";
import furniture from "../../assets/images/Categories/furniture.png";
import beauty from "../../assets/images/Categories/beauty.png";
import grocery from "../../assets/images/Categories/grocery.png";
import { Link } from "react-router-dom";

const catNav = [
  {
    name: "Journals",
    icon: mobiles,
  },
  {
    name: "Doctrine books",
    icon: fashion,
  },
  {
    name: "Holy Bible",
    icon: electronics,
  },
  {
    name: "Stationeries",
    icon: home,
  },
  {
    name: "Verse board",
    icon: travel,
  },
  {
    name: "LED verse",
    icon: appliances,
  },
];

const Categories = () => {
  return (
    <section className="bg-white mt-05 mb-4 min-w-full px-12 py-1 shadow overflow-hidden newmarginndn">
      <div className="flex items-center justify-between mt-4 caterogoteresjj234j34">
        {catNav.map((item, i) => (
          <Link
            to={`/products?category=${item.name}`}
            className="flex flex-col gap-2 items-center p-2 group"
            key={i}
          >
            <div className="h-21 w-21">
              <img
                draggable="false"
                className="h-full w-full object-contain cateueuiri39849"
                src={item.icon}
                alt={item.name}
              />
            </div>
            <span className="text-sm text-gray-800 font-medium group-hover:text-primary newtexthdirnjnhrjn45">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
