function Greetings(props) {
    return (
      props.nameList.map((singleElement)=>{
      return  <div>Hello {singleElement}</div>
      })
            
    )
}
export default Greetings;