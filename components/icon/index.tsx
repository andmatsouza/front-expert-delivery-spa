import {
  IconFire,
  IconKnife,
  IconMap,
  IconMotorcycle,
  IconStore,
  IconWallet,
  IconHome,
  IconExplorer,
  IconFavorite,
  IconOrder,
  IconMail,
  IconGear,
  IconHearth,
} from "../icon-family";


type IconBaseProps = {
  size?: string | number;
  color?: string;
  iconName: string;
};

export const IconBase = ({ iconName, size, color }: IconBaseProps): JSX.Element => {
  let IconComponet: JSX.Element;

  switch (iconName) {
    case "fire":
      IconComponet = <IconFire size={size} color={color} />;
      break;
    case "store":
      IconComponet = <IconStore size={size} color={color} />;
      break;
    case "wallet":
      IconComponet = <IconWallet size={size} color={color} />;
      break;
    case "map":
      IconComponet = <IconMap size={size} color={color} />;
      break;
    case "motorcycle":
      IconComponet = <IconMotorcycle size={size} color={color} />;
      break;
    case "knife":
      IconComponet = <IconKnife size={size} color={color} />;
      break;
    case "home":
      IconComponet = <IconHome size={size} color={color} />;
      break;
    case "explorer":
      IconComponet = <IconExplorer size={size} color={color} />;
      break;
    case "favorite":
      IconComponet = <IconFavorite size={size} color={color} />;
      break;
    case "order":
      IconComponet = <IconOrder size={size} color={color} />;
      break;
    case "mail":
      IconComponet = <IconMail size={size} color={color} />;
      break;
    case "gear":
      IconComponet = <IconGear size={size} color={color} />;
      break;
      case "hearth":
      IconComponet = <IconHearth size={size} color={color} />;
      break;

    default:
      IconComponet = <IconFire size={size} color={color} />
  }
  return IconComponet;
};