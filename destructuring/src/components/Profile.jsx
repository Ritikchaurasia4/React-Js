function Profile()
{
    return ( 
        <div>
          <h1>Profile Card challenge</h1>
          <ProfileCard name="Ritik" age={22}  greeting={
            <div>
                <strong>Hii Ritik , Have a wonderful day!</strong>
            </div>
          }>
            <p>Hobbies :Reading , Hiking</p>
            <button>Contact</button>
         </ProfileCard>
        </div>
    );
}
export default Profile;
// function ProfileCard(props){
//    return(
//     <>
//       <h2>Name:{props.name}</h2>
//       <p>Age:{props.age}</p>
//       <p>{props.greeting}</p>
//       <div>
//           {props.children}
//       </div>
//     </>
//    )
// }

// ==========  or ===================

// function ProfileCard(props){
//     const{name , age , greeting , children} = props;  // destructuring 
//     return(
//      <>
//        <h2>Name:{name}</h2>
//        <p>Age:{age}</p>
//        <p>{greeting}</p>
//        <div>
//            {children}
//        </div>
//      </>
//     )
//  }

// ============= or , ===================

function ProfileCard({name , age , greeting , children}){   // destructuring
    
    return(
     <>
       <h2>Name:{name}</h2>
       <p>Age:{age}</p>
       <p>{greeting}</p>
       <div>
           {children}
       </div>
     </>
    )
 }