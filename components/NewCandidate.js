import { useState } from "react"

export default function Newcandidates(){
  const[name,setName]=useState("");
  const[mail,setMail]=useState("");
  const[instituteName,setInstituteName]=useState("");
  const[skill,setSkill]=useState("");
  const[companyName,setCompanyName]=useState("");
  const[project,setProject]=useState("");
  const[role,setRole]=useState("")
//   const[alldata,setAllData]=useState([]);
    
  

  return(
    <>
    <form>
      <h1>Personal Details</h1>
       <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
       </div>
       <div>
        <label>Email</label>
        <input type="email" value={mail} onChange={(e)=>setMail(e.target.value)}/>
       </div>
       <div>
        <label>Gender</label>
        <select onChange={(e)=>console.log(e.target.value)} >
        <option >----</option>
        <option value="Male">Male</option>
        <option value="female">Female</option>
        </select>
       </div>
       <div>
        <label>Hobbies</label>
        <input type="checkbox" value=""/>
       </div>
      <h1>Education</h1>
       <div>
        <label>Name of Institute</label>
        <input type="text" value={instituteName} onChange={(e)=>setInstituteName(e.target.value)}/>
       </div>
       <div>
        <label>Year of Graduation</label>
        <input type="date"/>
       </div>
      <h1>Skills</h1>
       <div>
        <label>Name of Skill</label>
        <input type="text" value={skill} onChange={(e)=>setSkill(e.target.value)}/>
       </div>
       <div>
        <label>Experience in month</label>
        <input type="number" />
       </div>
      <h1>Experience</h1>
       <div>
        <label>Name of the company</label>
        <input type="text" value={companyName} onChange={(e)=>setCompanyName(e.target.value)}/>
      </div>
      <div>
        <label>Name of the project</label>
        <input type="text" value={project} onChange={(e)=>setProject(e.target.value)}/>
      </div>
      <div>
        <label>Role</label>
        <input type="text" value={role} onChange={(e)=>setRole(e.target.value)}/>
      </div>
      <div>
        <label>Duration range in month</label>
        <input type="range"/>
      </div>
      <button type="submit"  >Submit</button>
   </form>
    </>
  )
}