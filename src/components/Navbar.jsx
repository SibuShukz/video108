import React1,{useEffect} from 'react'

const Navbar = ({color}) => {

   //Case 1: run on every render
   useEffect(() => {
    alert("hey i will run on every render")
  })

  //Case 2: run only on first render
  useEffect(() => {
    alert("hey this is the first render")
  }, [])

  useEffect(() => {
    alert("color was changed")
  },[color])
  
  //example of cleanup function
  useEffect(() => {
    alert("  paagal")
    return () => {
      alert("component was unmounted")
    }
  }, [])
  return (
    <div>
        i am navbar of {color}....
    </div>
  )
}

export default Navbar