import Heading from "components/elements/Heading";

export default function Timeline({ data }) {
  return (
    <div className="border-l-2 box-border lg:w-8/12 ml-4 lg:ml-6 xl:ml-0">
      {data.map((item) => {
        return (
          <div className="flex items-start mb-24" key={item.title}>
            <div className="bg-damask-700 rounded-full w-12 h-12 relative right-6 flex justify-center items-center font-bold text-white lg:mr-4 flex-none">
              {item.year}
            </div>
            <div className="lg:flex items-center">
              <div>
                <Heading as="h2">{item.title}</Heading>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
