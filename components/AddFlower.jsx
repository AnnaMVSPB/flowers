const React = require('react');


function AddFlower (){
    return(
<div>
    <form action='/api/flowers' method='POST' id='addFlower'>
        <input name='name' placeholder='name' required/>
        <input name='url' placeholder='url' required/>
        <input name='description' placeholder='description' required/>
        <button type='submit'>add</button>
    </form>
    <div id='errorFlowers'></div>
</div>
    )
}

module.exports = AddFlower