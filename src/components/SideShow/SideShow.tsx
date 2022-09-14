import { Carousel } from '@mantine/carousel';
import { AspectRatio, createStyles, Image } from '@mantine/core';

const useStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  root: {
    '&:hover': {
      [`& .${getRef('controls')}`]: {
        opacity: 1,
      },
    },
  },
}));

function SideShow() {
  const { classes } = useStyles();
  const images = [
    'https://images.unsplash.com/photo-1600017751108-6df9a5a7334e?ixlib=rb-1.2.1&dl=walling-huo3vkkp7z0-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
    'https://images.unsplash.com/photo-1657979411054-6c619224e281?ixlib=rb-1.2.1&dl=paolo-gregotti-cAmC6bTn4P8-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
    'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&dl=rayul-_M6gy9oHgII-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
  ];

  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 300 }} mx="auto">
        <Image src={url} />
      </AspectRatio>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      mx="auto"
      withIndicators
      height={'100vh'}
      loop
      dragFree
      breakpoints={[
        { maxWidth: 'md', slideSize: '100%' },
        { maxWidth: 'sm', slideSize: '100%' },
      ]}
      classNames={classes}
    >
      {slides}
    </Carousel>
  );
}

export default SideShow;
