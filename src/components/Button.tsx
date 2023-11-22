
interface Props {
  name: string;
  url: string;
}
const Button = ({ name, url }: Props) => {
  return (
    <div className="text-white bg-black font-[Popins] py-2 px-6 rounded md:ml-8 hover:bg-blue-200 text-center  md:w-100 w-80">
      <a href={url} target="blank">
        {name}
      </a>
    </div>
  );
};

export default Button;
