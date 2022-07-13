import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({webformatURL, tags }) => {
  return (
    <li class={css.imageGalleryItem}>
      <img
          className={css.imageGalleryItem__image}
          src={webformatURL}
          alt={tags}
      />
    </li>
  )
}

export default ImageGalleryItem;
