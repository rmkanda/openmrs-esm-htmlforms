import React from "react";
import openmrsRootDecorator from "@openmrs/react-root-decorator";
import { BrowserRouter, Route } from "react-router-dom";
import { getCurrentUser } from "@openmrs/esm-api";
import HtmlForms from "./htmlforms/htmlforms.component";
import { defineConfigSchema } from "@openmrs/esm-module-config";

defineConfigSchema("@openmrs/esm-htmlforms", {});

function Root(props) {
  return (
    <BrowserRouter basename={window["getOpenmrsSpaBase"]()}>
      <Route path="/home" component={HtmlForms} />
    </BrowserRouter>
  );
}

export default openmrsRootDecorator({
  featureName: "HTML Form Entry",
  moduleName: "@openmrs/esm-htmlforms"
})(Root);
