const React = require('react');
const Layout = require('./Layout');

function UpdateFlowers({ title, flower,user }) {
  return (
    <Layout title={title} user={user}>
      <div>
        <form id='updateFlower' data-id={flower.id}>
          <input name='name' type='text' defaultValue={flower.name} />
          <input
            name='description'
            type='text'
            defaultValue={flower.description}
          />
          <input name='url' type='text' defaultValue={flower.url} />
          <button type='submit'>Update</button>
        </form>
        <div className='errorUpdate'></div>
      </div>
    </Layout>
  );
}

module.exports = UpdateFlowers;
