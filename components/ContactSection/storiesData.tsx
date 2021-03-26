import { FormField } from '@/enums/form';

import Phone from '@/assets/icons/contact/phone.svg';
import Map from '@/assets/icons/contact/map.svg';
import Envelope from '@/assets/icons/contact/envelope.svg';

const title = 'Get in touch!';
const description = 'Contact us for a quote, help or to join the team.';

const onFormSubmit = (values: Record<string, string>) =>
  alert(JSON.stringify(values, null, 0));

const buttonText = 'Contact us';
const formButtonText = 'Submit';

const formTitle = 'Contact Us';

const fields = {
  [FormField.Name]: {
    label: 'Name',
    placeholder: 'Your Name',
    errorMessage: 'This field is required',
  },
  [FormField.PhoneNumber]: {
    label: 'Phone number',
    placeholder: 'Your phone number',
    errorMessage: 'please enter a valid phone number',
  },
  [FormField.Email]: {
    label: 'Email',
    placeholder: 'Your email',
    errorMessage: 'please enter a valid email',
  },
  [FormField.Comment]: {
    label: 'Comment (optional)',
    placeholder: 'Comment',
  },
};

const contactInfo = [
  {
    icon: <Phone />,
    info: '+06 40 30 17 05',
  },
  {
    icon: <Map />,
    info: 'Donjon 1, 1315 XH Almere',
  },
  {
    icon: <Envelope />,
    info: 'hello@yea.com',
  },
];

export const props = {
  title,
  description,
  onFormSubmit,
  buttonText,
  formButtonText,
  formTitle,
  fields,
  contactInfo,
};
