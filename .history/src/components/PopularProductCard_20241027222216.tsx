
const PopularProductCard = ({imgURL,name,price}) => {
  return (
  <div className="flex flex-1 flex-col w-full max-sm:w-full">
    <img src={imgURL} alt={name} className="w-" />
  </div>)
};

export default PopularProductCard;
