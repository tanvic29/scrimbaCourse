function App()
{
    const [thingsarr,setThingsarr]=React.useState(['thing 1','thing 2']
)
function additem()
{
    setThingsarr(prevState => 
        {return[...prevState,'Thing ${prevState.length +1}']})
}
    const elementarr=thingsarr.map(thing=> <p>{thing}</p>)
    
    return (
        <div>
            <button onClick={additem}>add item</button>
            {elementarr}
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById('root'));