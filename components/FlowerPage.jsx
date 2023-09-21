const React = require('react')
const Layout = require('./Layout')

function FlowersPage ({flower,title,user}){
    return (
        <Layout title={title} user={user}>
            <p>{user}</p>
        <div>
        <div><img src={flower.url}/></div>
   
         <h2>{flower.name}</h2>
         <h3>{flower.description}</h3>
     </div>
     </Layout>
    )
}
module.exports = FlowersPage