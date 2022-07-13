import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({images}) => {
  return (
    <ul class="gallery">
      {images.map(({id, webformatURL, tags}) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
        />
      ) )}
    </ul>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
    }),
  ),
}

export default ImageGallery;
