import Styles from './styles.module.css';
import { IconSeach } from '../icon-family';

export const SearchInput = () => {
  return (
    <div className={Styles.inputSearch}>
      <IconSeach size={20} color="#000000" />
      <input  placeholder="Pesquise aqui" />
    </div>    
  );
}