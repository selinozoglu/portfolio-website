import React from 'react';
import LinkedinIcon from "../assets/linkedin.svg";
import GithubIcon from "../assets/github.svg";
import HackerrankIcon from "../assets/hackerrank.svg";
import profilePhoto from "../assets/selinozoglu.jpeg";
import About from "./about";
import Projects from "./projects";
import Blog from "./blog";
import Contact from "./contact";

const Home = () => {
    return (
        <div id={'cont'}>
            <div className={'grid grid-cols-2 py-16'}>
                <div className={'col-span-1 m-auto flex'}>
                    <div className={'px-10 m-auto'}>
                        <a rel="noreferrer" className={'p-3'} target={'_blank'}
                           href="https://www.linkedin.com/in/selin-ozoglu/">
                            <img className={'invert-color left-menu'} src={LinkedinIcon} width={30} height={30} alt=""/>
                        </a>
                        <a rel="noreferrer" className={'p-3'} target={'_blank'} href="https://github.com/selinozoglu">
                            <img src={GithubIcon} width={30} className={'invert-color  left-menu'} height={30} alt=""/>
                        </a>
                        <a rel="noreferrer" className={'p-3'} target={'_blank'}
                           href="https://www.hackerrank.com/selin_ozoglu">
                            <img className={'invert-color left-menu'} src={HackerrankIcon} width={30} height={30}
                                 alt=""/>
                        </a>
                    </div>
                    <div className="rounded-lg h-96">
                        <img className={'framed'} width={300} height={300} src={profilePhoto} alt=""/>
                    </div>
                </div>
                <div id={'about'}>
                    <About/>
                </div>
                <div id={'blog'}>
                    <Blog/>
                </div>
                <div id={'projects'}>
                    <Projects/>
                </div>
                <div id={'contact'}>
                    <Contact/>
                </div>
            </div>
        </div>
    );
};

export default Home;