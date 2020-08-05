export const generateIcon = (icon) => {
  switch (icon) {
    case 'PS4':
      return '/assets/playstation-logotype.svg'
    case 'Nintendo Switch':
      return '/assets/nintendo-switch.svg'
    case 'Xbox One':
      return '/assets/xbox.svg'
    case 'PC':
      return '/assets/tower-pc.svg'
    default:
      return '/assets/gamepad.svg'
  }
}
