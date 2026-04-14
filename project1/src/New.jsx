function New(){
    var x=10;
    let data=5000;
    function Test()
    {
        data=5000-100;
        alert ("Function called here "+data);
    }
    return (
    <>
      <h1>State of variable {x}</h1>
      <h1>{data}</h1>
      <button onClick={Test}>Click</button>
    </>
    )
}
export default New