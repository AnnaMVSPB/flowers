const React = require('react');
const Card = require('./Card');
const Layout = require('./Layout');
const AddFlower = require('./AddFlower');


function FlowersList({flowers,title,user}) {
return(
    <Layout title={title} user={user}>
       <AddFlower/>
    <div className='row flowersList'>
        {flowers.map(flower=><Card flower={flower} user={user}/>)}

    </div>
    </Layout>
)
}

module.exports = FlowersList;
