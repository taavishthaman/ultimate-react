import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const className =
    'inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4';
  const base =
    'inline-block rounded-full text-sm  bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';
  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block text-sm rounded-full border-2 border-stone-300 px-4 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:ring-stone-200 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6  px-4 py-2.5 md:px-6 md:py-4',
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <div disabled={disabled} className={styles[type]}>
      {children}
    </div>
  );
}

export default Button;
