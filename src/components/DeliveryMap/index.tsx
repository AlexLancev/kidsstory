// import React from 'react';

// import { YMaps, Map, Polygon } from '@pbe/react-yandex-maps';

// export const DeliveryMap: React.FC = () => {
//   const mapState = {
//     center: [59.963, 30.308],
//     zoom: 15,
//     controls: ['zoomControl'],
//     behaviors: ['drag', 'dblClickZoom', 'multiTouch'],
//   };

//   const polygonGeometry = [
//     [
//       [59.965, 30.306],
//       [59.965, 30.31],
//       [59.962, 30.31],
//       [59.962, 30.306],
//     ],
//   ];

//   const polygonOptions = {
//     fillColor: '#6699ff',
//     strokeColor: '#0000ff',
//     opacity: 0.5,
//     strokeWidth: 2,
//     strokeStyle: 'solid',
//   };

//   return (
//     <YMaps query={{ apikey: '9df63034-1d3e-4178-b2de-e692e6efc16d' }}>
//       <Map defaultState={mapState} width='100%' height='500px'>
//         <Polygon geometry={polygonGeometry} options={polygonOptions} />
//       </Map>
//     </YMaps>
//   );
// };
