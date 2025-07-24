import visibility from "../assets/visibility_24px_outlined.svg";
import share from "../assets/Group 2.3.png";
import location from "../assets/outline-location_on-24px.png";
import work from "../assets/outline-work_outline-24px.png";
import calendar from "../assets/Vector.png";
const ArticleCard = ({
  image,
  title,
  description,
  author,
  views,
  date,
  type,
  user,
  logo,
}) => {
  return (
    <div className="bg-white rounded-sm overflow-hidden border border-gray-200 mb-3">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img src={logo} />
        </div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 flex-grow pr-4">
            {title}
          </h3>
          <button className="text-gray-600 text-2xl font-bold hover:text-blue-600">
            ...
          </button>
        </div>

        {type !== "Meetup" && type !== "Job" && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {description}
          </p>
        )}

        {type === "Meetup" && (
          <div className="w-100 text-sm font-bold mb-4 space-y-1 flex justify-between aling-center">
            <div className="flex items-center">
              <img src={calendar} className="mx-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <img src={location} className="mx-1" />
              <span>{description}</span>{" "}
            </div>
          </div>
        )}

        {type === "Job" && (
          <div className="w-100 text-sm font-bold mb-4 space-y-1 flex justify-between aling-center">
            <div className="flex items-center">
              <img src={work} className="mx-1" />
              <span>{description}</span>{" "}
            </div>
            <div className="flex items-center">
              <img src={location} className="mx-1" />
              <span>{date}</span>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <img
              src={user}
              alt={author}
              className="w-12 h-12 rounded-full mr-2"
            />
            <span className="font-bold">{author}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <img src={visibility} />
            <span>{views} views</span>

            <img src={share} />
          </div>
        </div>

        {type === "Meetup" && (
          <div className="rounded-md flex justify-center align-center border border-gray-800 font-bold hover:bg-red-700 hover:border-none">
            <button className="block px-4 py-2 text-red-600 rounded-md hover:text-white w-full ">
              Visit Website
            </button>
          </div>
        )}
        {type === "Job" && (
          <div className="rounded-md flex justify-center align-center border border-gray-800 font-bold hover:bg-green-700 hover:border-none">
            <button className="block px-4 py-2 text-green-600 rounded-md hover:text-white w-full ">
              Visit Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ArticleCard;
