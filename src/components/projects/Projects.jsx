import React from "react";
import { chatApp, textutils1, tictactoe, hoobank, movieapp, glassMor } from "../../assets/image/images";
import "./projects.scss";

const proArr = [

  {
    name: "MovieTown",
    imageUrl: movieapp,
    desc: "Personal portfolio website. Don't need much info about it, just scroll down. You're here only!",
    linkToView: "https://moviestown.netlify.app/",
    linkToCode: "https://github.com/Amaan262/movieTown"
  },
  {
    name: "Magical Chat App",
    imageUrl: chatApp,
    desc: "Personal portfolio website. Don't need much info about it, just scroll down. You're here only!",
    linkToView: "",
    linkToCode: "https://github.com/Amaan262/Magical-Chat-v2.0"
  },

  {
    name: "Textutils",
    imageUrl: textutils1,
    desc: "Personal portfolio website. Don't need much info about it, just scroll down. You're here only!",
    linkToView: "https://amaan262.github.io/textutils/",
    linkToCode: "https://github.com/Amaan262/textutils"
  },
  {
    name: "Glass Morphism",
    imageUrl: glassMor,
    desc: "Personal portfolio website. Don't need much info about it, just scroll down. You're here only!",
    linkToView: "https://amaan262.github.io/Glass-Morphism/",
    linkToCode: "https://github.com/Amaan262/Glass-Morphism"
  },
  {
    name: "Hoobank",
    imageUrl: hoobank,
    desc: "Personal portfolio website. Don't need much info about it, just scroll down. You're here only!",
    linkToView: "https://amaan262.github.io/HooBank-website/",
    linkToCode: "https://github.com/Amaan262/HooBank-website"
  },
  {
    name: "TicTacToe",
    imageUrl: tictactoe,
    desc: "Personal portfolio website. Don't need much info about it, just scroll down. You're here only!",
    linkToView: "http://iamaan.me/Tic-tac-toe/",
    linkToCode: "https://github.com/Amaan244/Tic-tac-toe"
  },


];

const Projects = () => {
  return (
    <>
      <section id="projects">
        <h1> <i className="fas fa-laptop-code"></i> Projects</h1>
        <div className="project__container">
          {proArr.map((item, i) => (
            <div className="project__item" key={i}>
              <img src={item.imageUrl} alt="ss" />
              <div className="content">
                <div className="tag">
                  <h2>{item.name}</h2>
                </div>
                <div className="desc">
                  <p>{item.desc}</p>
                  <div className="btns">
                    <a href={item.linkToView} rel="noreferrer" target={"_blank"} className="btn">
                      <i className="fas fa-eye"></i>
                      View</a>
                    <a href={item.linkToCode} rel="noreferrer" target={"_blank"} className="btn">
                      <i className="fas fa-code"></i>
                      Code</a>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
