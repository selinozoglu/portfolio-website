import React from 'react';

import './App.css';
import LinkedinIcon from './assets/linkedin.svg'
import GithubIcon from './assets/github.svg'
import HackerrankIcon from './assets/hackerrank.svg'
import profilePhoto from './assets/selinozoglu.jpeg'
import Header from "./components/header";

function App() {
    return (
        <div className="App bg-b" id="wave">
            <Header/>
            <div className={'grid grid-cols-2 py-16'}>
                <div className={'col-span-1 m-auto flex'}>
                    <div className={'px-10 m-auto'}>
                        <a className={'p-3'} target={'_blank'} href="https://www.linkedin.com/in/selin-ozoglu/">
                            <img className={'invert-color'} src={LinkedinIcon} width={30} height={30} alt=""/>
                        </a>
                        <a className={'p-3'} target={'_blank'} href="https://github.com/selinozoglu">
                            <img src={GithubIcon} width={30} className={'invert-color'} height={30} alt=""/>
                        </a>
                        <a className={'p-3'} target={'_blank'} href="https://www.hackerrank.com/selin_ozoglu">
                            <img className={'invert-color'} src={HackerrankIcon} width={30} height={30} alt=""/>
                        </a>
                    </div>

                    <div className="rounded-lg h-96">
                        <img className={'framed'} width={300} height={300} src={profilePhoto} alt=""/>
                    </div>
                </div>
                <div className=" px-4 py-7 sm:px-0 ">
                    <div className="rounded-lg h-96 text-gray-500"><span className={'font-bold text-4xl'}>Hi! I'm Selin</span> <br/> bipbop


                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
