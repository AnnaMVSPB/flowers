const React = require('react');
const Layout = require('./Layout');

function Main ({title,user}){
    return(
        <Layout title={title} user={user}>
     <div>
        <h1>ПРИВЕТ ВСЕМ ЦВЕТОВОДАМ</h1>
        <img src='https://www.oshibok-net.ru/storage/c/2020/03/06/1583486589_390256_83.jpg'/>
     </div>

    
       </Layout>
    )
}

module.exports = Main