import Styles from './styles.module.css';
import { IconKnife, IconStar, IconMoney, IconTargetLocation } from '../icon-family';
import Image from 'next/image';

type Props = {
  name: string;
  rate: number;
  comments: number;
  distance: number;
  food: string;
  price: number;
  bonus: string;
  brandUrl: string;

};

export const HighlightsItem = ({ name, brandUrl, rate, comments, food, price, distance, bonus }: Props) => {
  return (
    <div className={Styles.restaurant}>
      <div className={Styles.brand}>
        <Image src={brandUrl} alt={name} width={64} height={64} />
      </div>
      <div className={Styles.information}>
        <h3>{name}</h3>
        <div className='my-3'>
          <div>
            <IconStar size={16} color="#FACD5D" />
            <span>{rate}</span>({comments})
          </div>
          <div>
            <IconKnife size={16} color="#A3A3A4" />
            {food}</div>
          <div>
            <IconMoney color="#A3A3A4" />
            {price}</div>
        </div>
        <div>
          <div>{bonus}</div>
          <div>
            <IconTargetLocation color="#A3A3A4" />
            {distance}</div>
        </div>
      </div>
    </div>

  )
}