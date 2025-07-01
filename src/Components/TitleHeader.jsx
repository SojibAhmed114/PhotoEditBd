

const TitleHeader = ({ titleHeader, headerSubTitle }) => {
  return (
    <div>
      <h2 className="text-3xl text-center mt-5 md:text-4xl font-medium pb-1 lg:leading-14 font-subHeader">
        {titleHeader}
      </h2>
      <p className="text-lg font-medium text-slate-600 text-center max-w-3xl mx-auto">
        {headerSubTitle}
      </p>
    </div>
  );
};

export default TitleHeader;
