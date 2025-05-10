const Image = ({ src, alt, imgStyle }) => {
  return (
    <div className={`${imgStyle} flex justify-content-center`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;
