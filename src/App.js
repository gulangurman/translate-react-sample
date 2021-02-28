import React, { Suspense } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import { useTranslation, withTranslation } from "react-i18next";
//https://www.i18next.com/translation-function/interpolation
function Header({ user, project }) {
  const [t, i18n] = useTranslation("common"); //useTranslation hook for func comps
  return (
    <Fragment>
      <p>{t("welcome.title", { user, project })}</p>
    </Fragment>
  );
}

function App() {
  const [t, i18n] = useTranslation("common"); //useTranslation hook for func comps
  var user = { name: "joe" };
  var project = { name: "Panel" };
  return (
    <Fragment>
      <Header user={user} project={project} />
      <h1>{t("welcome.title", { user, project })}</h1>
      <p>Translate with i18n</p>
      <button onClick={() => i18n.changeLanguage("en")}>en</button>
      <button onClick={() => i18n.changeLanguage("tr")}>tr</button>
    </Fragment>
  );
}

export default withTranslation("common")(App);
