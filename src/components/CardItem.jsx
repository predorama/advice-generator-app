import useFetch from '../hooks/useFetch';
import Button from './Button';
import divider from '../assets/images/pattern-divider-desktop.svg';

const CardItem = (props) => {
  const { data, loading, error, refetch } = useFetch(
    'https://api.adviceslip.com/advice'
  );

  if (loading) return <h1 className='loading'>LOADING...</h1>;

  if (error) console.log(error);

  return (
    <>
      <div className='card__header'>
        <p>advice #117</p>
      </div>
      <div className='card__addvice'>
        {data.slip && <h3>" {data.slip.advice} "</h3>}
        <img src={divider} alt='divider' />
        <Button onClick={refetch} />
      </div>
    </>
  );
};
export default CardItem;
