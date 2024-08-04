export const EventProps = ()=>{
    const HandleWelcomeUser = (user)=>{
        alert(`Hey ${user} , how are you `);
    }
    const HandleHover = ()=>{
        alert(`Hey thanks for watching me . `);
    }
    return(
        <>
          <WelcomeUser onClick={() => HandleWelcomeUser("RitikChaurasia")} onMouseEnter={HandleHover} />
        </>
    )
}
const WelcomeUser = (props)=>{
    const HandGreeting = (user)=>{
        alert(`Hey ${user} , how are you `);
    }
    return(
        <>
          <button onClick={props.onClick}> ClickMe</button>
          <button onMouseEnter={props.onMouseEnter}> Hover me</button>
          <button onClick={()=>HandGreeting("friend")}>Greeting</button>
        </>
    )
}
export default EventProps;