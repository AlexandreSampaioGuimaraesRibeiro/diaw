# DIAW - Web Application Development and Integration

Coursework and exercises developed for the **DIAW (Desenvolvimento e Integração de Aplicações Web)** class, part of the Software Engineering program at **PUC Minas** (Lourdes campus).

## 🎯 About

This repository gathers the exercises and activities developed throughout the DIAW course, covering practical concepts of web application development and integration. Each activity is organized in its own folder.

## 🛠️ Technologies

**Back-end projects**
- **Java**
- **Maven** — dependency and build management
- **Spring Boot** — application development

**Front-end project (Pokedex)**
- **React**
- **Vite** — build tool and dev server
- **JavaScript (JSX)** and **CSS**

## 📁 Structure

| Folder | Stack | Description |
|---|---|---|
| `ClimaAPI/` | Spring Boot | API that fetches and returns weather data |
| `ConsultaDecandidatosTSI/` | Spring Boot | Candidate lookup application |
| `Pokedex/` | React + Vite | Interactive Pokédex with search by name/ID, type filter, Pokémon details and trainers |
| `TelaLogin/` | Spring Boot | Login and authentication screen |

## 🚀 How to run

### Spring Boot projects

`ClimaAPI`, `ConsultaDecandidatosTSI` and `TelaLogin` are independent Maven projects. To run one of them:

```bash
cd activity-name
mvn install
mvn spring-boot:run
```

### React project (Pokedex)

`Pokedex` is a React + Vite project (requires [Node.js](https://nodejs.org/)):

```bash
cd Pokedex
npm install
npm run dev
```

Then open the address shown in the terminal (by default `http://localhost:5173`).

## 🎓 Course Info

- **Course:** DIAW — Desenvolvimento e Integração de Aplicações Web
- **Program:** Software Engineering
- **Institution:** PUC Minas — Lourdes campus

## 👤 Author

Alexandre Sampaio Guimarães Ribeiro