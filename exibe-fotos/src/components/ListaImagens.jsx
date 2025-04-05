import Image from "./Image";

const ListaImagens = ({ photos }) => {
  return photos.map((photo, index) => (
    <div key={photo.id}>
      <Image key={index} src={photo.src.small} alt={photo.alt} />
    </div>
  ));
};

export default ListaImagens;
