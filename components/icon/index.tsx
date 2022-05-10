import { 
  IconFire, 
  IconKnife, 
  IconMap, 
  IconMotorcycle, 
  IconStore, 
  IconWallet 
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

    default:
      IconComponet = <IconFire size={size} color={color} />
  }
  return IconComponet;
};