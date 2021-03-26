import { Language } from '@/enums/language';

export default {
  [Language.AT]: 'https://yeaimages.s3.eu-central-1.amazonaws.com/at.png',
  [Language.DE]: 'https://yeaimages.s3.eu-central-1.amazonaws.com/de.png',
  [Language.FR]: 'https://yeaimages.s3.eu-central-1.amazonaws.com/fr.png',
  [Language.IT]: 'https://yeaimages.s3.eu-central-1.amazonaws.com/it.png',
  [Language.PL]: 'https://yeaimages.s3.eu-central-1.amazonaws.com/pl.png',
  [Language.UK]: 'https://yeaimages.s3.eu-central-1.amazonaws.com/uk.png',
  [Language.BE]: 'https://yeaimages.s3.eu-central-1.amazonaws.com/be.png',
  [Language.ES]: 'https://yeaimages.s3.eu-central-1.amazonaws.com/es.png',
  [Language.IR]: 'https://yeaimages.s3.eu-central-1.amazonaws.com/ie.png',
  [Language.NL]: 'https://yeaimages.s3.eu-central-1.amazonaws.com/nl.png',
  [Language.SE]: 'https://yeaimages.s3.eu-central-1.amazonaws.com/se.png',
} as Record<Language, string>;
