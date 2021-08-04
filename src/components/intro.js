import React from "react"
import "./intro.scss"
import { GrTwitter } from "@react-icons/all-files/gr/GrTwitter";
import { GrCodepen } from "@react-icons/all-files/gr/GrCodepen";
import { FaSteam } from "@react-icons/all-files/fa/FaSteam";
import { GrGithub } from "@react-icons/all-files/gr/GrGithub";

export default function Intro() {
  return (
    <div className="intro">
      <h1 className="intro__title">Davide <span className="intro__title--highlighted">Scario</span>ni</h1>
      <div className="intro__tags">
        <div className="intro__tag">FrontEnd Developer</div>
        <div className="intro__tag--dot"></div>
        <div className="intro__tag">Indie Games Developer</div>
      </div>
      <div className="intro__social-box">
        <a href="https://twitter.com/5c4r10" title="@5c4r10 on Twitter"><GrTwitter /></a>
        <a href="https://codepen.io/Scario" title="Scario on Codepen"><GrCodepen /></a>
        <a href="https://github.com/davidescarioni" title="Davide Scarioni on GitHub"><GrGithub /></a>
        <a href="https://steamcommunity.com/id/scario88/" title="Curlon on Steam"><FaSteam /></a>
      </div>
    </div>
  )
}