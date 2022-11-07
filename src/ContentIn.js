import React from 'react'

export default function ContentIn() {
  return (
    <div>
   <form >
  <label>
    Society : 
    </label>
    <input type="text" name="Enter Society Name" />
  
</form>
<form>
  <label>
    Event Name : 
    <input type="text" name ="Enter Event Name " />
  </label>
</form>
<form>
  <label>
    Date : 
    <input type="text" name =" Enter Event Date" />
  </label>
</form>
<form>
  <label>
    Start :  
    <input type="text" name="Start Time " />
  </label>
</form>
<form>
  <label>
    End : 
    <input type="text" name="End Time " />
  </label>
</form>
<form>
  <label>
    Name of Issuer : 
    <input type="text" name="Enter Name of Issuer " />
  </label>
</form>
<form>
  <label>
    Documents :  
    <input type="text" name="Upload documents " />
  </label>
</form>
    </div>
  )
}
