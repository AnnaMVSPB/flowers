const React = require('react');
const Layout = require('./Layout');

function RegForm({title}) {
return (
    <Layout title={title}>
        <div className='formCont'>
    <form method='post' action='/auth/registration' id='regForm'>
        <input name='name' placeholder='name'/>
        <input name='email' placeholder='email'/>
        <input name='password' placeholder='password'/>
        <button className='btn  green darken-2'><i class="material-icons left">person_add</i>+REGISTRATION+</button>
    </form>
    <div className='errRega'></div>
    </div>
    </Layout>
)
}

module.exports = RegForm;
