import React, {  useState } from "react";
import Card from "../components/Card";
import { profiles } from "../constant/profiles";
import avatar from "../avatar.png";

export default function CardContainer() {

    const [profile,setProfile] = useState({ 
        name:'mohamed',
        job:'Web dev',
        avatar:avatar
    })
 
    console.log('profile',profile)
  return (
    <div>
      <div className="profiles-button-container">
        {profiles.map((profile,index) => (
          <button key={index} className="btn btn-danger" onClick={()=> setProfile(profiles[index])}> {profile.name} </button>
        ))}
      </div>
        <Card profile={profile} />
        
    </div>
  );
}
