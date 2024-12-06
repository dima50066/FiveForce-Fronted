import clsx from 'clsx';
import css from './SharedLayout.module.css';

export default function SharedLayout({ children }) {
  return (
    <div className={clsx(css.container)}>
      <header></header>
      {children}
    </div>
  );
}
