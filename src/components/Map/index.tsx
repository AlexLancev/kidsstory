import { FC } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const KEY_MAP: string = import.meta.env.VITE_API_MAP;

interface MapState {
  center: [number, number];
  zoom: number;
}

interface PlacemarkOptions {
  iconLayout: string;
  iconImageHref: string;
  iconImageSize: [number, number];
  iconImageOffset?: [number, number];
}

export const KindergartenMap: FC = () => {
  const mapState: MapState = {
    center: [55.864308, 37.372368],
    zoom: 16,
  };

  const placemarkOptions: PlacemarkOptions = {
    iconLayout: 'default#image',
    iconImageHref: '/img/svg/flower.webp',
    iconImageSize: [170, 170],
    iconImageOffset: [-63, -180],
  };

  return (
    <div className='preload-background-map'>
      <YMaps query={{ apikey: KEY_MAP }}>
        <Map
          defaultState={mapState}
          width='100%'
          height='500px'
          options={{ maxZoom: 16, minZoom: 16 }}
        >
          <Placemark geometry={mapState.center} options={placemarkOptions} />
        </Map>
      </YMaps>
    </div>
  );
};
