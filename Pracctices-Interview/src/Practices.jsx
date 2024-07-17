export const Practices =()=>{
    const Students = [];
    console.log(Boolean(Students.length));
    console.log(Students.length);
    return(
        <>       
          {/* <p>{Students.length && "No Students Found"}</p> */}

          {/* first solution........... */}
          
          {/* <p>{Students.length===0 && "No Students Found"}</p> */}

          {/* second solution.......... */}

          {/* <p>{!Students.length && "No Students Found"}</p> */}

          {/* third solution.................. */}

          <p>{!Boolean(Students.length) && "No Students Found"}</p>

          <p> Number of The Students : {Students.length} </p>
        </>

    );
};