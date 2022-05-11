import Styles from './styles.module.css';
import { IconBase } from '../../components';
import Link from 'next/link';

type Props = {
  name: string;
  legend: string;
  iconName: string;
  backgroundSection: string;
}


export const Category = ({ name, legend, iconName, backgroundSection }: Props) => {
  return (
    <Link href="/categoria">
      <a className={Styles.card}>
        <div
          className={Styles.icon}
          style={{ backgroundColor: backgroundSection }}
        >
          <IconBase iconName={iconName} color="white" />
        </div>
        <h3>{name}</h3>
        <p>{legend}</p>
      </a>
    </Link>
  )
}