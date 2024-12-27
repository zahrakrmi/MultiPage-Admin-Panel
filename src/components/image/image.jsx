import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: '100%', height: 600 }} cols={2} rowHeight={164} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/img_1.jpg',
    title: 'Breakfast',
  },
  {
    img: '/img_2.jpg',
    title: 'Burger',
  },
  {
    img: '/img_3.jpg',
    title: 'Camera',
  },
  {
    img: '/img_4.jpg',
    title: 'Coffee',
  }
];
