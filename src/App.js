import React, { useState, useEffect } from 'react';
//import { FaAngleDoubleRight } from 'react-icons/fa';
const url = 'https://course-api.netlify.app/api/react-tabs-project';
function App() {
  const [tabs,setTabs]= useState([]);
  const [loading,setLoading]=useState(true);
  const [value,setValue]= useState(0)
  //fetching
  const fetchItems =async ()=>{
    const response = await fetch(url);
    const tabs = await response.json();
    setTabs(tabs)
    setLoading(false)
  }

  useEffect(()=>{
    fetchItems();
  },[])

  if(loading){
return <section className="section loading">
  <h1>loading ...</h1>
</section>

  }
  const {company,dates,duties,title}= tabs[value];

  return <section className="section">
    <div className="title">
      <h2>experience</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      {/* btn container */}
      <div className="btn-container">
        {tabs.map((item,index)=>{
          return <button key={item.id} className={`job-btn ${index===value && "active-btn"}`} onClick={()=>{
            setValue(index)
          }}>
            {item.company}
          </button>
        })}
      </div>
      {/* info */}
      <article className="job-info">
<h3>{title}</h3>
<h4>{company}</h4>
<p className="job-date">{dates}</p>
{duties.map((duty,index)=>{
return <div key={index} className="job-desc">

<p>{duty}</p>
</div>

})}
      </article>
    </div>
  </section>
}

export default App;
