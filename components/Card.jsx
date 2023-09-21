const React = require('react');

function Card({ flower ,user}) {
  return (
    <div className='cardFlower'>
      <div className='col s4 '>
        <div className='card'>
          <div className='card-image'>
            <a href={`/flowers/${flower.id}`}>
              <img src={flower.url} />
            </a>
            <span className='card-title'>{flower.name}</span>
          </div>
          <div className='card-content'>
            <p>{flower.description}</p>
            {(user && user.id === flower.userId) &&
            <>
             <button className='delFlower' data-idflower={flower.id}>
             delete<i className='material-icons left'>delete_forever</i>
           </button>
           <a href={`/flowers/formUpdate/${flower.id}`}><button className='updateFlower'>
           update<i className='material-icons left'>update</i>
           </button></a>
           </>
            }
           
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
module.exports = Card;
