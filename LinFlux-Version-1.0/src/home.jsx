import React from 'react'


export default React.createClass({
  render: function(){
    return(
       <div className="content">
             <img src={require("./images/Linux_banner.png")} alt="Linux Home Banner" width="105%" height="400px" />
            <p className="About">
            <a name="about"></a>
            Welcome to <i>LinFlux!</i>
            <br />
            <br />

            I created this site to bring to the world the world of Linux and how great it is.
            My inspiration for this site is to make Linux more popular for the average person
            and to give them a cost effective solution to their computer needs.
            When I say <i>cost effective,</i> I mean <b>FREE!</b>
            Linux is open source and always will be with the exception of a few builds *ahem..Redhat*
            <br />

            <br />
            I will be steadily making more categories as I make more tutorial videos for various topics
            regarding Linux.
            I am a strong believer in listening to music while you study so my videos will be silent so
            you can listen to your music while learning so you can stay in the zone!
            I will provide links to more resources to help supplement your learning experience.
            Send me an email <a href="mailto:craigdejean1@gmail.com">here</a> if you have any Linux video
            request or wish to contact me!
            Please enjoy and use this site as a one-stop shop for learning linux.

          </p>

       </div>

    )
  }
})