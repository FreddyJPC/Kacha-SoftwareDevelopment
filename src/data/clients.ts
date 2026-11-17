/**
 * Logos de la cinta "Confían en nosotros".
 * Para agregar uno: copia el PNG a src/assets/clients/ e impórtalo aquí.
 */
import type { ImageMetadata } from 'astro';
import autonova from '../assets/clients/autonova.png';
import fag from '../assets/clients/fag-motors.png';
import ksi from '../assets/clients/ksinuevos.png';
import skytrack from '../assets/clients/skytrack.png';
import veo from '../assets/clients/veo-optics.png';

export const clients: { name: string; logo: ImageMetadata }[] = [
  { name: 'KsiNuevos', logo: ksi },
  { name: 'Autonova', logo: autonova },
  { name: 'Veo Optics', logo: veo },
  { name: 'FAG Motors', logo: fag },
  { name: 'SkyTrack', logo: skytrack },
];
