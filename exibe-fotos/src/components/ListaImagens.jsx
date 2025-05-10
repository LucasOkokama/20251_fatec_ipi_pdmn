import Image from './Image';

const ListaImagens = ({ photos, imgStyle }) => {
  return photos.map((photo, index) => (
    <div key={photo.id}>
      <Image
        imgStyle={imgStyle}
        key={index}
        src={photo.src.small}
        alt={photo.alt}
      />
    </div>
  ));
};

export default ListaImagens;
