//region Button
export enum ButtonSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

export enum ButtonShape {
  Square = 'square',
  Round = 'round',
}
//endregion

//region Card
export enum CardType {
  Fill = 'fill',
  Transparent = 'transparent',
}

export enum CardColor {
  White = 'white',
  Gray = 'gray',
  Blue = 'blue',
  Green = 'green',
  Orange = 'orange',
}
//endregion

//region MenuButtons
export enum ToggleType {
  Hamburger = 'hamburger',
  Plus = 'plus',
}

export enum ArrowType {
  Left = 'left',
  Right = 'right',
}
//endregion

//region input
export enum InputStyle {
  Light = 'light',
  Dark = 'dark',
}

export enum InputType {
  Input = 'input',
  TextArea = 'textarea',
}
//endregion

//region services
export enum Service {
  IntegrationImplementation = 'integration_implementation',
  OnlineAdvertising = 'online_advertising',
  AffiliateMarketing = 'affiliate_marketing',
  Personalization = 'personalization',
  ConversionOptimization = 'conversion_optimization',
  DataAnalytics = 'data_analytics',
  MarketingAutomation = 'marketing_automation',
  EmailMarketing = 'email_marketing',
}

export enum TextPosition {
  Left = 'left',
  Right = 'right',
}

export enum ThreePoints {
  Articles = 'articles',
  OrderedList = 'ordered_list',
}

export enum FourPoints {
  Stats = 'stats',
  OrderedList = 'ordered_list',
}

export enum ServiceButton {
  Input = 'input',
  Button = 'button',
}
//endregion

//region marketing automations
export enum Elapsed {
  '0h' = 0,
  '12h' = 1,
  '24h' = 2,
  '48h' = 3,
  '72h' = 4,
  '96h' = 5,
}
//endregion

//region background gradient
export enum PageBackground {
  Home = 'home',
  About = 'about',
  Contact = 'contact',
  Service = 'service',
}
//endregion
