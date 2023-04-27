import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import AOS from "aos";
function GithubCal() {
    AOS.init();
  return (
    <div data-aos="fade-right" className="container">
       <div>
        <h1 className="text-center">
          DAYS | CODE <img width={45} className=" mb-1" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
        </h1>
       </div>
      <div className=" mt-3">
         <GitHubCalendar  blockSize={20} blockMargin={5} fontSize={16} username="aayan269" />
      </div>
      <div className=" mt-3">
        <h1 className="text-center">STATS | <img width={45} className=" mb-1" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /> </h1>
        <div class="d-none d-md-block  d-lg-flex justify-content-center">
        <div><img width={650} src="https://github-readme-stats.vercel.app/api?username=aayan269&theme=flag-india&show_icons=true&count_private=true" /></div>
        <div><img width={650} src="https://github-readme-streak-stats.herokuapp.com/?user=aayan269&theme=indian-flag" /></div>
        </div>

        <div class="d-flex flex-column d-md-none mb-3">
        <div><img width={320} src="https://github-readme-stats.vercel.app/api?username=aayan269&theme=flag-india&show_icons=true&count_private=true" /></div>
        <div><img width={320} src="https://github-readme-streak-stats.herokuapp.com/?user=aayan269&theme=indian-flag" /></div>
        </div>
      </div>
    </div>
  )
}

export default GithubCal