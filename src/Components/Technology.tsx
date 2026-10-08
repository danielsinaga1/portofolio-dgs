import java from "../assets/technology/java.svg";
import php from "../assets/technology/php.svg";
import python from "../assets/technology/python.svg";
import typescript from "../assets/technology/typescript.svg";
import javascript from "../assets/technology/javascript.svg";
import sql from "../assets/technology/sql.svg";
import dart from "../assets/technology/dart.svg";
import go from "../assets/technology/go.svg";
import spring from "../assets/technology/spring.svg";
import laravel from "../assets/technology/laravel.svg";
import react from "../assets/technology/react.svg";
import docker from "../assets/technology/docker.svg";
import fiber from "../assets/technology/fiber.svg";
import fastapi from "../assets/technology/fastapi.svg";
import angular from "../assets/technology/angular.svg";
import flutter from "../assets/technology/flutter.svg";
import html from "../assets/technology/html5.svg";
import css from "../assets/technology/css3.svg";
import mysql from "../assets/technology/mysql.svg";
import postgresql from "../assets/technology/postgresql.svg";
import firebase from "../assets/technology/firebase.svg";
import githubActions from "../assets/technology/githubactions.svg";
import linux from "../assets/technology/linux.svg";
import nginx from "../assets/technology/nginx.svg";

const technologyLogos: Record<string, string[]> = {
  Java: [java], PHP: [php], Python: [python], TypeScript: [typescript], JavaScript: [javascript],
  SQL: [sql], Dart: [dart], Go: [go],
  "Spring Boot": [spring], "Java Spring Boot": [java, spring],
  "Go Fiber": [fiber], Laravel: [laravel], FastAPI: [fastapi],
  React: [react], Angular: [angular], Flutter: [flutter], "HTML5/CSS3": [html, css], "HTML/CSS": [html, css],
  MySQL: [mysql], PostgreSQL: [postgresql], Firebase: [firebase],
  "Firebase Cloud Messaging (FCM)": [firebase],
  Docker: [docker], "GitHub Actions (CI/CD)": [githubActions], Linux: [linux], Nginx: [nginx],
};

export default function Technology({ name }: { name: string }) {
  const logos = technologyLogos[name];
  return <span className={`technology-item${logos ? " has-logo" : ""}`}>
    {logos && <span className="technology-logo" aria-hidden="true">{logos.map(src => <img key={src} src={src} alt="" width="21" height="21" draggable={false} />)}</span>}
    <span>{name}</span>
  </span>;
}
