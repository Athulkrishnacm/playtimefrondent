import { useNavigate } from "react-router-dom";

const TurfCard = ({ _id, courtName, images, location,rating,reviews }) => {
  const Navigate = useNavigate();
  const reviewsArray = reviews || [];
  const viewSingle = (id) => {
    Navigate("/turfs-details", { state: id });
  };

  return (
    <article
      key={_id}
      className="flex flex-col  bg-gray-100 border-2"
      onClick={() => viewSingle(_id)}
    >
      <img
        alt=""
        className="object-cover w-full h-52 bg-gray-500"
        src={images?.[0]}
      />
      <div className="flex flex-col flex-1 p-6">
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
          {courtName}{" "}
          <span className="text-sm ml-1 text-gray-400 font-medium float-right mt-1">
            {" "}
            {location}
          </span>
        </h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
          <span className="flex items-center space-x-2 text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 590"
              className="w-4 h-4 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-sm font-bold">{Math.round(rating * 100 / 100)}</span>
          </span>
          <span>{reviewsArray.length} Reviews</span>
        </div>
      </div>
    </article>
  );
};
export default TurfCard;