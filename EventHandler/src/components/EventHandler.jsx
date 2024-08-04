export const EventHandling = () => {
//   //   function handleButtonClick() {
//   //     alert("Hey I am onClick Event");
//   //   }

  const handleButtonClick = () => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.type); // "click"
    alert("Hey I am onClick Event");
  };

  const handleWelcomeUser = (user) => {
    console.log(`Hey ${user}, Welcome`);
  };

  return (
    <>
        {/* ------------------- Function Components with Named Functions ----------------------------------    */}

      {/* --------------------- Remember how we haven't called this function, if you call this function here  then it will run without event clicking. You just need to pass reference and not call here. -------------------------- */}

      {/* <button onClick={handleButtonClick()}>click Me</button>
      <br />
       */}

      {/* In React, event handlers receive the event object as an argument by default. However, when you use an arrow function directly in the onClick attribute without passing the event explicitly, React doesn't pass the event object to your handler function. This is because the arrow function creates a new function and calls your handler without passing any arguments. */}

      <button onClick={(event) => handleButtonClick(event)}>click Me 2 </button>
      <br />

      {/* ----------------- Inline Event Handlers ---------------------*/}

      <button onClick={(event) => console.log(event)}>Inline Function</button>
      <br />

      {/* ------------------- Function Components with Inline Arrow Functions-------------------- */}


      <button onClick={() => alert("Hey I am inline evnt function")}>
        Inline Arr fun
      </button>
      <br />

      {/* ------------------ Passing Arguments to Event Handlers ------------------------------ */}

      <button onClick={handleWelcomeUser("Ritik Chaurasia")}>click Me</button>
      <br />
       <button onClick={() => handleWelcomeUser("RitikChaurasia")}>click Me</button>
       <br />
      <button onClick={() => handleWelcomeUser("Rahul Chaurasia")}>click Me</button>
    </>
  );
};